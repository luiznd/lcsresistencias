import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Structured Data para LocalBusiness
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LCS Resistências",
      "description": "Especialista em aquecimento elétrico industrial. Resistências elétricas, aquecedores industriais e soluções personalizadas.",
      "url": "https://lcsresistencias.com.br",
      "telephone": "+55-48-99998-7745",
      "email": "lcs.contato@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. José da Cruz, 235",
        "addressLocality": "São José",
        "addressRegion": "SC",
        "postalCode": "88107-488",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.575027,
        "longitude": -48.653071
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-12:00"
      ],
      "priceRange": "$$",
      "image": "https://lcsresistencias.com.br/images/logo-lcs.svg",
      "logo": "https://lcsresistencias.com.br/images/logo-lcs.svg",
      "sameAs": [
        "https://www.facebook.com/lcsresistencias", // Adicione se existir
        "https://www.instagram.com/lcsresistencias", // Adicione se existir
        "https://www.linkedin.com/company/lcsresistencias" // Adicione se existir
      ]
    };

    // Structured Data para Organization
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LCS Resistências",
      "alternateName": "LCS Aquecimento Elétrico Industrial",
      "url": "https://lcsresistencias.com.br",
      "logo": "https://lcsresistencias.com.br/images/logo-lcs.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-48-99998-7745",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. José da Cruz, 235",
        "addressLocality": "São José",
        "addressRegion": "SC",
        "postalCode": "88107-488",
        "addressCountry": "BR"
      }
    };

    // Structured Data para Services
    const servicesData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Resistências Elétricas Industriais",
      "description": "Fabricação e instalação de resistências elétricas para aquecimento industrial",
      "provider": {
        "@type": "Organization",
        "name": "LCS Resistências"
      },
      "serviceType": "Aquecimento Industrial",
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo de Resistências",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Elétrica Tubular",
              "description": "Resistência elétrica tubular e resistência tubular blindada para aquecimento industrial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência de Imersão",
              "description": "Resistência de imersão para aquecimento de líquidos em tanques e caldeiras"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Cartucho",
              "description": "Resistência cartucho e resistência tipo cartucho para aplicações industriais"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Fita Mica",
              "description": "Resistência fita, resistência de fita mica e resistência mica para aquecimento"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Coleira",
              "description": "Resistência coleira, resistência tipo coleira e resistência bico injetora para injetora plástica"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência de Ar Quente",
              "description": "Resistência de ar quente, resistência de ar forçado e resistência de aquecimento de ar para dutos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Flangeada",
              "description": "Resistência flangeada e resistência com flange para instalações industriais"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Estufa",
              "description": "Resistência para estufa, resistência para estufa industrial e resistência para estufa de pintura"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Autoclave",
              "description": "Resistência para autoclave e equipamentos de esterilização industrial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Caldeira",
              "description": "Resistência elétrica para caldeira e resistência elétrica para boiler/aquecedor de água"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Serpentina",
              "description": "Resistência serpentina, serpentina elétrica e resistência tipo espiral"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Plana",
              "description": "Resistência plana e resistência plana industrial para aplicações específicas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Manta Térmica",
              "description": "Resistência fita silicone, manta térmica de silicone, manta térmica aquecimento e manta aquecedora industrial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Baioneta",
              "description": "Resistência baioneta e resistência baionetada para aquecimento de fluidos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Ar Condicionado",
              "description": "Resistência para ar condicionado industrial e resistência de aquecimento de ar condicionado"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Tanque Inox",
              "description": "Resistência para tanque inox e aquecimento de tanques industriais"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Cafeteira Elétrica",
              "description": "Resistências para cafeteira elétrica e equipamentos de aquecimento de bebidas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Buffet",
              "description": "Resistência elétrica para buffet, aquecimento de buffet e equipamentos gastronômicos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Fritadeira",
              "description": "Resistência para fritadeira, resistência elétrica para fritadeira e fritadeira elétrica industrial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Chapa",
              "description": "Resistência para chapa, resistência elétrica para chapa e chapa elétrica industrial para cozinha profissional"
            }
          }
        ]
      }
    };

    // Função para adicionar structured data
    const addStructuredData = (data: any, id: string) => {
      // Remove script existente se houver
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      // Adiciona novo script
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Adicionar todos os structured data
    addStructuredData(localBusinessData, 'local-business-schema');
    addStructuredData(organizationData, 'organization-schema');
    addStructuredData(servicesData, 'services-schema');

    // Cleanup function
    return () => {
      const schemas = ['local-business-schema', 'organization-schema', 'services-schema'];
      schemas.forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // Este componente não renderiza nada visível
};

export default StructuredData;