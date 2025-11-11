import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mapeamentos de slugs legados para âncoras por domínio
const anchorMapComBr: Record<string, string> = {
  '/galeria': '#gallery',
  '/home': '#home',
  '/servicos': '#services',
  '/contato': '#contact',
}

const anchorMapCom: Record<string, string> = {
  '/galeria': '#gallery',
  '/home': '#home',
  '/servicos': '#services',
  '/contato': '#contact',
  '/sobre': '#about',
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const host = req.headers.get('host') || ''

  // Normaliza trailing slash (exceto root)
  const pathname = url.pathname.endsWith('/') && url.pathname !== '/'
    ? url.pathname.replace(/\/+$/, '')
    : url.pathname

  const isComBr = /(^|\.)lcsresistencias\.com\.br$/i.test(host)
  const isCom = /(^|\.)lcsresistencias\.com$/i.test(host)

  // Em localhost, aplicamos o mapa .com para facilitar testes de todas as âncoras
  const isLocalhost = /^localhost(?::\d+)?$/i.test(host)
  const mapping = isComBr ? anchorMapComBr : anchorMapCom

  const anchor = mapping[pathname]
  if (anchor) {
    url.pathname = '/'
    url.hash = anchor // inclui o fragmento (#...)
    // Redirect permanente para preservar SEO dos links antigos
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

// Evita interceptar assets, API e rotas internas do Next
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|public).*)',
  ],
}

