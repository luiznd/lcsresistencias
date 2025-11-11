import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://lcsresistencias.com.br'),
  title: {
    default: 'LCS Resistências – Aquecimento Elétrico Industrial',
    template: '%s | LCS Resistências',
  },
  description: 'Resistências elétricas industriais e soluções de aquecimento personalizadas.',
  keywords: [
    'resistências elétricas',
    'aquecimento industrial',
    'resistência tubular',
    'resistência de imersão',
    'resistência cartucho',
    'serviços de manutenção de resistências',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'LCS Resistências',
    title: 'LCS Resistências – Aquecimento Elétrico Industrial',
    description: 'Resistências elétricas industriais e soluções de aquecimento personalizadas.',
    images: [
      {
        url: '/images/design-layout.png',
        width: 1200,
        height: 630,
        alt: 'LCS Resistências – Aquecimento Elétrico Industrial',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LCS Resistências – Aquecimento Elétrico Industrial',
    description: 'Resistências elétricas industriais e soluções de aquecimento personalizadas.',
    images: ['/images/design-layout.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: ['/favicon.svg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0F172A', // slate-900
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <GoogleAnalytics />
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
