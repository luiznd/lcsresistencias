'use client';

import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LCS Resistências Elétricas",
      "url": "https://www.lcsresistencias.com.br",
      "logo": "https://www.lcsresistencias.com.br/images/logo-lcs.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99999-9999",
        "contactType": "sales",
        "areaServed": "BR",
        "availableLanguage": ["Portuguese"]
      }
    }`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;