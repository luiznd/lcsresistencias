import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// @ts-ignore - módulo virtual fornecido pelo plugin no vite.config.ts
import gallery from 'virtual:gallery'

// Interface para os dados do produto
interface ProductData {
  title: string;
  category: string;
  description: string;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Lista de URLs das imagens da pasta public/images/galeria
  const images: string[] = gallery as string[]

  // Mapeamento de produtos com informações detalhadas
  const productDetails: Record<string, ProductData> = {
    'resistencia03_Generated_Image_aeygi3aeygi3aeyg': {
      title: 'Resistência elétrica tubular blindada',
      category: 'Resistências Tubulares',
      description: 'Resistência tubular blindada de alta potência para aplicações industriais. Fabricada com materiais de alta qualidade para garantir durabilidade e eficiência energética em processos de aquecimento industrial.'
    },
    'resistencia_Image_ivsr6mivsr6mivsr': {
      title: 'Resistência de imersão',
      category: 'Resistências de Imersão',
      description: 'Resistência de imersão projetada para aquecimento direto de líquidos em tanques industriais. Ideal para processos que exigem controle preciso de temperatura em banhos químicos e galvânicos.'
    },
    'res04_Image_dk24zzdk24zzdk24': {
      title: 'Resistência tipo cartucho',
      category: 'Resistências Cartucho',
      description: 'Resistência cartucho de alta densidade para moldes de injeção e extrusão. Proporciona aquecimento rápido e uniforme em ferramentas e matrizes industriais.'
    },
    'res05_dk24zzdk24zzdk24': {
      title: 'Resistência fita mica',
      category: 'Resistências Flexíveis',
      description: 'Resistência tipo fita com isolamento em mica para aplicações que exigem flexibilidade. Perfeita para equipamentos com superfícies irregulares ou cilíndricas.'
    },
    'res09_6ttksd6ttksd6ttk': {
      title: 'Resistência para fritadeira',
      category: 'Resistências Flexíveis',
      description: 'Resistência para aplicações que exigem flexibilidade. Perfeita para fritadeiras.'
    },    
    'conjunto01_Image_m5mq9om5mq9om5mq': {
      title: 'Resistência tipo coleira',
      category: 'Resistências Coleira',
      description: 'Resistência coleira para cilindros de injetoras e extrusoras. Projetada para distribuição uniforme de calor em equipamentos de processamento de plásticos.'
    },
    'fio_Image_3z9jbd3z9jbd3z9j': {
      title: 'Resistência de ar quente',
      category: 'Resistências para Ar',
      description: 'Resistência para sistemas de ar quente e secagem industrial. Desenvolvida para garantir alta eficiência em sistemas de ventilação forçada e estufas.'
    },
    'prateleira_Image_qgnb5mqgnb5mqgnb': {
      title: 'Resistência para chapa elétrica',
      category: 'Equipamentos Gastronômicos',
      description: 'Resistência para equipamentos de buffet e cozinhas industriais. Solução personalizada para chapas elétricas e sistemas de aquecimento em serviços de alimentação.'
    },
    'cafeteirai_4fm79n4fm79n4fm7': {
      title: 'Resistência para cafeteira',
      category: 'Equipamentos Gastronômicos',
      description: 'Resistência específica para cafeteiras industriais e comerciais. Projetada para garantir temperatura ideal e durabilidade em equipamentos de alta demanda.'
    },
    'Gemini_Generated_Image_id5efgid5efgid5e': {
      title: 'Resistência serpentina elétrica',
      category: 'Equipamentos Gastronômicos',
      description: 'Resistência tipo serpentina para fritadeiras e equipamentos de cocção. Desenvolvida para distribuição uniforme de calor e eficiência energética em aplicações gastronômicas.'
    }
  }

  // Gera um título/alt amigável a partir do nome do arquivo
  const toTitle = (url: string) => {
    const name = url.split('/').pop() || ''
    const base = name.replace(/\.[^.]+$/, '')
    
    // Verifica se existe um produto específico
    if (productDetails[base]) {
      return productDetails[base].title
    }
    
    // Fallback para conversão automática
    return base.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) + ' - Resistência Elétrica Industrial LCS'
  }

  // Obtém os detalhes completos do produto
  const getProductDetails = (url: string): ProductData => {
    const name = url.split('/').pop() || ''
    const base = name.replace(/\.[^.]+$/, '')
    
    // Verifica se existe um produto específico
    if (productDetails[base]) {
      return productDetails[base]
    }
    
    // Fallback para produtos sem detalhes específicos
    return {
      title: 'Resistência elétrica',
      category: 'Resistências Industriais',
      description: 'Resistência elétrica industrial personalizada para aplicações específicas. Entre em contato para mais informações sobre este produto.'
    }
  }

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galeria de Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos equipamentos e soluções em aquecimento elétrico industrial.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {images.map((url) => (
            <div 
              key={url}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(url)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={url}
                  alt={toTitle(url)}
                  className="w-full h-40 md:h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal com descrição e categoria */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                {/* Imagem */}
                <div className="md:w-1/2 bg-gray-100">
                  <img
                    src={selectedImage}
                    alt={toTitle(selectedImage)}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                
                {/* Informações do produto */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                      {getProductDetails(selectedImage).category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {getProductDetails(selectedImage).title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {getProductDetails(selectedImage).description}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedImage(null)}
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ImageGallery
