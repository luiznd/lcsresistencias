import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Data de validade para preços (1 ano a partir de hoje)
    const priceValidUntil = new Date();
    priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
    const priceValidUntilISO = priceValidUntil.toISOString().split('T')[0];

    // Política de devolução padrão
    const defaultReturnPolicy = {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "BR",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    };

    // Detalhes de envio padrão
    const defaultShippingDetails = {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "BRL"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "BR"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 3,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 5,
          "maxValue": 15,
          "unitCode": "DAY"
        }
      }
    };

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
        "https://www.facebook.com/lcsresistencias",
        "https://www.instagram.com/lcsresistencias",
        "https://www.linkedin.com/company/lcsresistencias"
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
      }
    };

    // Structured Data para Maintenance Service com produtos corrigidos
    const maintenanceServiceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Manutenção de Resistências Elétricas",
      "description": "Serviços de manutenção, reparo e substituição de resistências elétricas industriais",
      "provider": {
        "@type": "Organization",
        "name": "LCS Resistências"
      },
      "serviceType": "Manutenção Industrial",
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
              "description": "Resistência elétrica tubular e resistência tubular blindada para aquecimento industrial",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "25",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência de Imersão",
              "description": "Resistência de imersão para aquecimento de líquidos em tanques e caldeiras",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "18",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Cartucho",
              "description": "Resistência cartucho e resistência tipo cartucho para aplicações industriais",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "32",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Fita Mica",
              "description": "Resistência fita, resistência de fita mica e resistência mica para aquecimento",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "15",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Coleira",
              "description": "Resistência coleira, resistência tipo coleira e resistência bico injetora para injetora plástica",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "22",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência de Ar Quente",
              "description": "Resistência de ar quente, resistência de ar forçado e resistência de aquecimento de ar para dutos",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "19",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Flangeada",
              "description": "Resistência flangeada e resistência com flange para instalações industriais",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "12",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Estufa",
              "description": "Resistência para estufa, resistência para estufa industrial e resistência para estufa de pintura",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "28",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Autoclave",
              "description": "Resistência para autoclave e equipamentos de esterilização industrial",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "14",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Caldeira",
              "description": "Resistência elétrica para caldeira e resistência elétrica para boiler/aquecedor de água",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "21",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Serpentina",
              "description": "Resistência serpentina, serpentina elétrica e resistência tipo espiral",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "17",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Plana",
              "description": "Resistência plana e resistência plana industrial para aplicações específicas",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "13",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Manta Térmica",
              "description": "Resistência fita silicone, manta térmica de silicone, manta térmica aquecimento e manta aquecedora industrial",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "35",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência Baioneta",
              "description": "Resistência baioneta e resistência baionetada para aquecimento de fluidos",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "16",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Ar Condicionado",
              "description": "Resistência para ar condicionado industrial e resistência de aquecimento de ar condicionado",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "reviewCount": "11",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Tanque Inox",
              "description": "Resistência para tanque inox e aquecimento de tanques industriais",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "20",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Cafeteira Elétrica",
              "description": "Resistências para cafeteira elétrica e equipamentos de aquecimento de bebidas",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "24",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Buffet",
              "description": "Resistência elétrica para buffet, aquecimento de buffet e equipamentos gastronômicos",
              "image": "https://lcsresistencias.com.br/images/buffet_d200.jpg",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "31",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Fritadeira",
              "description": "Resistência para fritadeira, resistência elétrica para fritadeira e fritadeira elétrica industrial",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "27",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Resistência para Chapa",
              "description": "Resistência para chapa, resistência elétrica para chapa e chapa elétrica industrial para cozinha profissional",
              "image": "https://lcsresistencias.com.br/images/resistencia.jfif",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": priceValidUntilISO,
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL",
                  "price": "0"
                },
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": defaultReturnPolicy,
                "shippingDetails": defaultShippingDetails,
                "seller": {
                  "@type": "Organization",
                  "name": "LCS Resistências Elétricas"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "23",
                "bestRating": "5",
                "worstRating": "1"
              }
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
    addStructuredData(maintenanceServiceData, 'maintenance-service-schema');

    // Cleanup function
    return () => {
      const schemas = ['local-business-schema', 'organization-schema', 'services-schema', 'maintenance-service-schema'];
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