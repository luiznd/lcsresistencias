import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  title: 'LCS Resistências – Aquecimento Elétrico Industrial',
  description: 'Resistências elétricas industriais e soluções de aquecimento personalizadas.',
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

