import http from 'http'
import fs from 'fs'
import path from 'path'
import handler from '../api/send-email.js'

const PORT = Number(process.env.API_PORT || 8787)

function loadEnv() {
  const projectRoot = path.resolve(process.cwd())
  const localEnvPath = path.join(projectRoot, '.env.local')
  const exampleEnvPath = path.join(projectRoot, '.env.example')
  const envPath = fs.existsSync(localEnvPath) ? localEnvPath : exampleEnvPath
  const content = fs.readFileSync(envPath, 'utf-8')
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx)
    const value = trimmed.slice(idx + 1)
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
  console.log(`Loaded env from ${path.basename(envPath)} (SMTP_HOST=${process.env.SMTP_HOST}, SMTP_PORT=${process.env.SMTP_PORT}, MAIL_TO=${process.env.MAIL_TO})`)
}

function sendJson(res, statusCode, data, headers = {}) {
  const body = JSON.stringify(data)
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
    ...headers,
  })
  res.end(body)
}

function createResAdapter(nodeRes) {
  const state = { statusCode: 200, headers: {} }
  return {
    setHeader(name, value) {
      state.headers[name] = value
    },
    status(code) {
      state.statusCode = code
      return this
    },
    json(obj) {
      sendJson(nodeRes, state.statusCode, obj, state.headers)
    },
    end() {
      nodeRes.writeHead(state.statusCode, state.headers)
      nodeRes.end()
    },
  }
}

function createReqAdapter(nodeReq, bodyObj) {
  return {
    method: nodeReq.method,
    body: bodyObj,
  }
}

loadEnv()

const server = http.createServer(async (req, res) => {
  // Basic CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(200, corsHeaders)
    return res.end()
  }

  if (req.url === '/api/send-email' && req.method === 'POST') {
    let raw = ''
    req.on('data', chunk => { raw += chunk })
    req.on('end', async () => {
      try {
        const body = raw ? JSON.parse(raw) : {}
        const reqAdapter = createReqAdapter(req, body)
        const resAdapter = createResAdapter(res)
        // Set CORS headers expected by handler
        resAdapter.setHeader('Access-Control-Allow-Origin', '*')
        resAdapter.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
        resAdapter.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        try {
          await handler(reqAdapter, resAdapter)
        } catch (err) {
          console.error('Handler error:', err)
          sendJson(res, 500, { error: 'Internal server error' }, corsHeaders)
        }
      } catch (err) {
        console.error('JSON parse error:', err)
        sendJson(res, 400, { error: 'Invalid JSON' }, corsHeaders)
      }
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json', ...corsHeaders })
    res.end(JSON.stringify({ error: 'Not found' }))
  }
})

server.listen(PORT, () => {
  console.log(`Dev API server listening on http://localhost:${PORT}`)
})