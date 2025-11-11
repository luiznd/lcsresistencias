"use client"
import { useEffect } from 'react'

const GoogleAnalytics = () => {
  useEffect(() => {
    // Detectar o domínio atual
    const hostname = window.location.hostname

    // Permitir configuração via variáveis de ambiente
    // Preferencialmente use VITE_GA_MEASUREMENT_IDS com IDs separados por vírgula
    const envMeasurementIdsRaw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_IDS as string | undefined
    const envMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string | undefined
    const enableOnLocal = (process.env.NEXT_PUBLIC_ENABLE_GA_ON_LOCAL as string | undefined) === 'true'

    // Definir os measurement IDs (configurados) e fallback
    let configuredIds: string[] = []
    if (envMeasurementIdsRaw) {
      configuredIds = envMeasurementIdsRaw.split(',').map(id => id.trim()).filter(Boolean)
    } else if (envMeasurementId) {
      configuredIds = [envMeasurementId]
    }
    const fallbackIds = ['G-2N2RTT79SJ', 'G-5HQKVHEFZB'] // [com.br, com]

    // Em localhost, só carrega se explicitamente habilitado
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1'
    let measurementIds: string[] = []
    if (isLocalhost) {
      measurementIds = enableOnLocal ? (configuredIds.length ? configuredIds : fallbackIds) : []
    } else if (hostname.endsWith('lcsresistencias.com.br')) {
      // Usar apenas o ID da propriedade .com.br
      measurementIds = [configuredIds[0] || fallbackIds[0]]
    } else if (hostname.endsWith('lcsresistencias.com')) {
      // Usar apenas o ID da propriedade .com
      measurementIds = [configuredIds[1] || fallbackIds[1]]
    } else {
      // Hostname desconhecido — carregar IDs configurados ou fallback (ambos)
      measurementIds = configuredIds.length ? configuredIds : fallbackIds
    }
    if (!measurementIds.length) {
      console.log('Google Analytics não carregado (hostname:', hostname, 'enableOnLocal:', enableOnLocal, ')')
      return
    }

    // Carregar o script do Google Analytics
    const script = document.createElement('script')
    script.async = true
    // Carregue com o primeiro ID (os demais serão configurados via gtag('config'))
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementIds[0]}`
    script.onerror = () => {
      console.error('Falha ao carregar o script do Google Analytics para IDs:', measurementIds)
    }
    document.head.appendChild(script)

    // Configurar o gtag
    script.onload = () => {
      // @ts-ignore
      window.dataLayer = window.dataLayer || []
      // @ts-ignore
      function gtag(...args: any[]) {
        // @ts-ignore
        window.dataLayer.push(args)
      }
      // @ts-ignore
      window.gtag = gtag

      // @ts-ignore
      gtag('js', new Date())
      // Configurar cada Measurement ID selecionado
      measurementIds.forEach((id) => {
        // @ts-ignore
        gtag('config', id, {
          page_title: document.title,
          page_location: window.location.href,
          // Evitar duplicidade de page_view (vamos enviar manualmente abaixo)
          send_page_view: false,
          // Cross-domain linking entre .com.br e .com
          linker: { domains: ['lcsresistencias.com.br', 'lcsresistencias.com'] },
          // Debug opcional em localhost
          debug_mode: isLocalhost && enableOnLocal ? true : undefined,
        })
      })

      // Enviar um page_view explícito para garantir coleta
      // @ts-ignore
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      })

      console.log(`Google Analytics carregado para ${hostname} com IDs: ${measurementIds.join(', ')}`)
    }

    // Cleanup function
    return () => {
      // Remover o script se o componente for desmontado
      const existingScript = document.querySelector(`script[src*="${measurementIds[0]}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null // Este componente não renderiza nada
}

export default GoogleAnalytics
