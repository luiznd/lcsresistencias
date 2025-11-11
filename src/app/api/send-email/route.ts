import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, description } = body || {}
    const msg = message ?? description

    if (!name || !email || !msg) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const secure = (process.env.SMTP_SECURE || 'false') === 'true'
    const mailTo = process.env.MAIL_TO || process.env.SMTP_USER
    const from = process.env.SMTP_FROM || `Website LCS <${user}>`

    // Modo de desenvolvimento: se SMTP não estiver configurado, fazemos mock/log
    const isDev = process.env.NODE_ENV !== 'production'
    const devMode = process.env.DEV_EMAIL_MODE || (isDev ? 'log' : undefined)
    if (!host || !user || !pass) {
      if (devMode === 'log') {
        console.log('[DEV EMAIL MOCK] Nova mensagem:', { name, email, phone, msg })
        return NextResponse.json({ ok: true, dev: 'mock_log' })
      }
      return NextResponse.json({ ok: false, error: 'SMTP não configurado.' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } })

    const html = `
      <h2>Nova mensagem do site</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone || '-'} </p>
      <p><strong>Mensagem:</strong></p>
      <p>${msg}</p>
    `

    try {
      const info = await transporter.sendMail({
        from,
        to: mailTo,
        subject: `Contato do site - ${name}`,
        html,
        replyTo: email,
      })
      return NextResponse.json({ ok: true, messageId: info.messageId })
    } catch (err: any) {
      if (devMode === 'log') {
        console.log('[DEV EMAIL MOCK - FALLBACK] Erro ao enviar, fazendo log:', err?.message)
        console.log('Conteúdo:', { name, email, phone, msg })
        return NextResponse.json({ ok: true, dev: 'mock_log_fallback' })
      }
      throw err
    }
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Erro desconhecido' }, { status: 500 })
  }
}
