import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function OPTIONS() {
  // Basic CORS support for OPTIONS preflight
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  return new NextResponse(null, { status: 200, headers })
}

export async function POST(req: Request) {
  const corsHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })

  try {
    const body = await req.json().catch(() => ({}))
    const { name, email, phone, description } = body as {
      name?: string
      email?: string
      phone?: string
      description?: string
    }

    // Validation
    const errors: string[] = []
    if (!name || !name.trim()) errors.push('Informe seu nome.')
    if (!email || !email.trim()) errors.push('Informe seu e-mail.')
    if (!description || !description.trim()) errors.push('Descreva sua necessidade.')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      errors.push('Digite um e-mail válido.')
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Invalid input', details: errors },
        { status: 400, headers: corsHeaders }
      )
    }

    // SMTP config from environment
    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = Number(process.env.SMTP_PORT || 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.MAIL_TO || 'lcs.contato@gmail.com'
    const secureEnv = process.env.SMTP_SECURE
    const secure = secureEnv ? /^(true|1|yes)$/i.test(secureEnv) : port === 465
    const fromAddress = process.env.SMTP_FROM || user

    if (!user || !pass) {
      return NextResponse.json(
        { error: 'SMTP credentials not configured' },
        { status: 500, headers: corsHeaders }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    const subject = 'Contato pelo site - Solicitação de Orçamento'
    const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || '-'}\n\nDescrição:\n${description}`
    const html = `
      <div style="font-family:Arial, sans-serif;">
        <h2>Contato pelo site - Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || '-'}</p>
        <p><strong>Descrição:</strong></p>
        <pre style="white-space:pre-wrap; font-family:inherit;">${description}</pre>
      </div>
    `

    const info = await transporter.sendMail({
      from: `LCS Resistências <${fromAddress}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200, headers: corsHeaders }
    )
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500, headers: corsHeaders }
    )
  }
}

