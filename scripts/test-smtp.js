import fs from 'fs'
import path from 'path'
import handler from '../api/send-email.js'

// Load environment variables from .env.local or fallback to .env.example
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
  console.log(`Loaded env from ${path.basename(envPath)} (SMTP_HOST=${process.env.SMTP_HOST}, SMTP_PORT=${process.env.SMTP_PORT})`)
}

function createMockRes() {
  return {
    headers: {},
    statusCode: 200,
    setHeader(name, value) {
      this.headers[name] = value
    },
    status(code) {
      this.statusCode = code
      return this
    },
    json(obj) {
      console.log('Response:', JSON.stringify(obj))
    },
    end() {
      console.log('Response end')
    },
  }
}

async function main() {
  loadEnv()
  const req = {
    method: 'POST',
    body: {
      name: 'Teste SMTP Local',
      email: 'teste.smtp.local@example.com',
      phone: '(11) 99999-9999',
      description: 'Teste de envio via SMTP usando .env.example/.env.local',
    },
  }
  const res = createMockRes()

  try {
    await handler(req, res)
    console.log('Handler executed.')
  } catch (err) {
    console.error('Error executing handler:', err)
  }
}

main()