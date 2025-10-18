# LCS Resistências — Website

Projeto do site institucional da LCS Resistências, desenvolvido com React + Vite + TypeScript e Tailwind CSS.

## 📦 Stack
- Vite (React + TypeScript)
- Tailwind CSS
- Framer Motion
- Heroicons / Lucide Icons
- Nodemailer (API de envio de e-mail)

## 🚀 Scripts
- `npm run dev` — inicia o servidor de desenvolvimento (porta 3000)
- `npm run build` — compila TypeScript e gera build de produção em `dist/`
- `npm run preview` — serve o build de produção local (porta 4173)
- `npm run lint` — executa ESLint

## 🔧 Configuração
- Vite configurado em `vite.config.ts`:
  - Plugin React e plugin custom `virtual:gallery` para listar imagens em `public/images/galeria`
  - Dev server: porta 3000 e abre automaticamente
  - Build: saída em `dist/` com sourcemap

## 🗂 Estrutura
- `src/` — código-fonte (componentes, estilos, configuração)
- `public/images/` — imagens públicas do site
- `api/send-email.js` — função de API para envio de e-mails via SMTP (Nodemailer)

## ✉️ Envio de e-mail (SMTP)
A função `api/send-email.js` utiliza variáveis de ambiente:
- `SMTP_HOST` (default: `smtp.gmail.com`)
- `SMTP_PORT` (default: `465`)
- `SMTP_USER` — usuário SMTP (obrigatório)
- `SMTP_PASS` — senha ou app password (obrigatório)
- `MAIL_TO` — e-mail destino (default: `lcs.contato@gmail.com`)

Validação de entrada: nome, e-mail e descrição são obrigatórios. Responde com `200` em sucesso ou `400/500` em erros.

## ☎️ Dados canônicos de contato
Centralizados em `src/config/contact.ts`:
- Email, telefone, endereço
- Links `mailto:`, `tel:` e WhatsApp (`wa.me`)
- Link de mapa (Google Maps)

Consumidos por `Header`, `Contact` e `Footer`.

## 🖼 Galeria de Imagens
O plugin `virtual:gallery` varre `public/images/galeria` e expõe uma lista de URLs estáticos para uso nos componentes.

## 🧪 Qualidade
- TypeScript estrito (tsconfig)
- ESLint configurado (`.eslintrc.cjs`)

## 🔐 Git & Deploy
- Repositório Git inicializado e remoto configurado para `git@github.com:luiznd/lcsresistencias.git`
- Para fazer push via SSH:
  1. Gere/adicione sua chave pública em GitHub > Settings > SSH and GPG keys
  2. Execute `git push -u origin main`

## 🏁 Como rodar
1. Instale dependências: `npm install`
2. Desenvolvimento: `npm run dev`
3. Build produção: `npm run build`
4. Preview: `npm run preview` e abra `http://localhost:4173/`

## 📄 Licença
Projeto privado da LCS Resistências.