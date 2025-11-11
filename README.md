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

## 🔀 Proxy de redirecionamento (rotas legadas → âncoras)
Para evitar 404 em links antigos e levar o usuário diretamente às seções da home, usamos o recurso de **Proxy** do Next.js 16 (novo nome do antigo Middleware).

- Arquivo: `src/proxy.ts`
- Status: redireciona com **308 Permanent Redirect** e inclui o fragmento (âncora) na URL.
- Normaliza barra final (ex.: `/galeria/` → `/galeria`).
- Ignora assets/API/rotas internas: `api`, `_next/static`, `_next/image`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `images`, `public`.

Mapeamentos:
- Domínio `.com.br`
  - `/galeria` → `/#gallery`
  - `/home` → `/#home`
  - `/servicos` → `/#services`
  - `/contato` → `/#contact`
- Domínio `.com`
  - `/galeria` → `/#gallery`
  - `/home` → `/#home`
  - `/servicos` → `/#services`
  - `/contato` → `/#contact`
  - `/sobre` → `/#about`

Observações importantes:
- O `next.config.ts` foi mantido sem redirects para esses slugs, pois **Next.js redirects não suportam fragmentos `#`** no destino. O Proxy resolve isso corretamente.
- Certifique-se de que as seções da home possuam os ids correspondentes: `home`, `gallery`, `services`, `contact`, `about`.
- Referência: renomeação “middleware → proxy” no Next.js 16 (documentação oficial).

Como testar localmente (PowerShell):

```
try {
  $resp = Invoke-WebRequest -Uri 'http://localhost:3000/galeria' -MaximumRedirection 0 -ErrorAction Stop
  $resp
} catch {
  $res = $_.Exception.Response
  $res.Headers  # deve conter Location: /#gallery
}
```

Resultado esperado:
- Status: `PermanentRedirect`
- Headers: `Location: /#gallery`, `Refresh: 0;url=/#gallery`

## ✉️ Envio de e-mail (SMTP)
A rota `src/app/api/send-email/route.ts` utiliza variáveis de ambiente:
- `SMTP_HOST` (default: `smtp.gmail.com`)
- `SMTP_PORT` (default: `465`)
- `SMTP_SECURE` — `true` para 465 (TLS), `false` para 587 (STARTTLS)
- `SMTP_USER` — usuário SMTP (obrigatório)
- `SMTP_PASS` — senha ou app password (obrigatório)
- `MAIL_FROM` — remetente (ex.: `"LCS Resistências <no-reply@lcsresistencias.com.br>"`)
- `MAIL_TO` — e-mail destino (default: `lcs.contato@gmail.com`)
- `ALLOW_ORIGINS` — origens permitidas para CORS (ex.: `http://localhost:3000,https://lcsresistencias.com.br,https://www.lcsresistencias.com.br,https://lcsresistencias.com,https://www.lcsresistencias.com`)

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
# Recomenda-se incluir as origens de produção (apex e www):
# ALLOW_ORIGINS=http://localhost:3000,https://lcsresistencias.com.br,https://www.lcsresistencias.com.br,https://lcsresistencias.com,https://www.lcsresistencias.com
```

## 📄 Licença
Projeto privado da LCS Resistências.
