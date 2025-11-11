# LCS Resistências — Website

Projeto do site institucional da LCS Resistências, migrado para Next.js (App Router) com TypeScript e Tailwind CSS.

## 📦 Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons / Lucide Icons
- Nodemailer (API de envio de e-mail)

## 🚀 Scripts
- `npm run dev` — inicia o servidor de desenvolvimento (porta 3000)
- `npm run build` — gera o build de produção `.next/`
- `npm run start` — inicia o servidor de produção
- `npm run lint` — executa ESLint

## 🔧 Configuração
- `next.config.ts` — configuração do Next.js (quando necessário)
- Tailwind configurado em `tailwind.config.ts` e `postcss.config.js`

## 🗂 Estrutura (App Router)
- `src/app/layout.tsx` — layout raiz
- `src/app/page.tsx` — página principal
- `src/app/globals.css` — estilos globais (Tailwind)
- `src/components/` — componentes da UI
- `public/images/` — imagens públicas do site
- `src/app/api/send-email/route.ts` — API de envio de e-mails via SMTP (Nodemailer)

## ✉️ Envio de e-mail (SMTP)
A rota `src/app/api/send-email/route.ts` utiliza variáveis de ambiente:
- `SMTP_HOST` (default: `smtp.gmail.com`)
- `SMTP_PORT` (default: `465`)
- `SMTP_SECURE` — `true` para 465 (TLS), `false` para 587 (STARTTLS)
- `SMTP_USER` — usuário SMTP (obrigatório)
- `SMTP_PASS` — senha ou app password (obrigatório)
- `MAIL_FROM` — remetente (ex.: `"LCS Resistências <no-reply@lcsresistencias.com.br>"`)
- `MAIL_TO` — e-mail destino (default: `lcs.contato@gmail.com`)
- `ALLOW_ORIGINS` — origens permitidas para CORS (ex.: `http://localhost:3000,https://www.lcsresistencias.com.br,https://www.lcsresistencias.com`)

Validação de entrada: nome, e-mail e descrição são obrigatórios. Responde com `200` em sucesso ou `400/500` em erros.

## ☎️ Dados canônicos de contato
Centralizados em `src/config/contact.ts`:
- Email, telefone, endereço
- Links `mailto:`, `tel:` e WhatsApp (`wa.me`)
- Link de mapa (Google Maps)

Consumidos por `Header`, `Contact` e `Footer`.

## 🖼 Galeria de Imagens
Imagens servidas a partir de `public/images/galeria`. Em Next.js, você pode usar `next/image` ou imagens estáticas.

## 🧪 Qualidade
- TypeScript estrito (tsconfig)
- ESLint configurado (`.eslintrc.cjs`)

## 🔐 Git & Deploy
- Branch atual: `feature/next`
- Remoto: `origin` (`https://github.com/luiznd/lcsresistencias`)
- Deploy recomendado: **Vercel**
  - Configure as variáveis de ambiente (SMTP_* e NEXT_PUBLIC_*) na Vercel
  - Faça o link do repositório e configure builds com Next.js

## 🏁 Como rodar
1. Instale dependências: `npm install`
2. Desenvolvimento: `npm run dev` e abra `http://localhost:3000/`
3. Build produção: `npm run build`
4. Produção local: `npm run start`

## 🔧 Ambiente (`.env.local`)
Crie o arquivo `.env.local` com, pelo menos:

```
NEXT_PUBLIC_GA_MEASUREMENT_IDS=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_ENABLE_GA_ON_LOCAL=false

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
MAIL_FROM="LCS Resistências <no-reply@lcsresistencias.com.br>"
MAIL_TO=lcs.contato@gmail.com
ALLOW_ORIGINS=http://localhost:3000
```

## 📄 Licença
Projeto privado da LCS Resistências.
