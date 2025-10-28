import { useEffect } from 'react'

const GoogleAnalytics = () => {
  useEffect(() => {
    // Detectar o domínio atual
    const hostname = window.location.hostname
    
    // Definir o tracking ID baseado no domínio
    let trackingId = ''
    
    if (hostname === 'lcsresistencias.com.br' || hostname === 'www.lcsresistencias.com.br') {
      trackingId = 'G-2N2RTT79SJ'
    } else if (hostname === 'lcsresistencias.com' || hostname === 'www.lcsresistencias.com') {
      trackingId = 'G-5HQKVHEFZB'
    } else {
      // Para desenvolvimento local, usar um dos IDs (ou não carregar)
      console.log('Desenvolvimento local - Google Analytics não carregado')
      return
    }

    // Carregar o script do Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
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
      // @ts-ignore
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      })

      console.log(`Google Analytics carregado para ${hostname} com ID: ${trackingId}`)
    }

    // Cleanup function
    return () => {
      // Remover o script se o componente for desmontado
      const existingScript = document.querySelector(`script[src*="${trackingId}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null // Este componente não renderiza nada
}

export default GoogleAnalytics