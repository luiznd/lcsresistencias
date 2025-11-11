import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Redirecionar rotas legadas para a home
  async redirects() {
    return [
      // .com.br e .com compartilham as mesmas rotas
      { source: '/galeria', destination: '/', permanent: true },
      { source: '/galeria/', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
      { source: '/servicos', destination: '/', permanent: true },
      { source: '/servicos/', destination: '/', permanent: true },
      { source: '/contato', destination: '/', permanent: true },
      { source: '/contato/', destination: '/', permanent: true },
      { source: '/sobre', destination: '/', permanent: true },
      { source: '/sobre/', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
