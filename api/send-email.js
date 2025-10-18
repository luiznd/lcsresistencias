import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Basic CORS (optional; same-origin on Vercel typically doesn’t need this)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, description } = req.body || {}

    // Validation
    const errors = []
    if (!name || !name.trim()) errors.push('Informe seu nome.')
    if (!email || !email.trim()) errors.push('Informe seu e-mail.')
    if (!description || !description.trim()) errors.push('Descreva sua necessidade.')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      errors.push('Digite um e-mail válido.')
    }

    if (errors.length > 0) {
      return res.status(400).json({ error: 'Invalid input', details: errors })
    }

    // Transport config from environment variables
    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = Number(process.env.SMTP_PORT || 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.MAIL_TO || 'lcs.contato@gmail.com'

    if (!user || !pass) {
      return res.status(500).json({ error: 'SMTP credentials not configured' })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for others
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
      from: `Site LCS <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return res.status(200).json({ success: true, messageId: info.messageId })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}