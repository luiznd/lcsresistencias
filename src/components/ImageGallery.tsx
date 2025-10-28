import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// @ts-ignore - módulo virtual fornecido pelo plugin no vite.config.ts
import gallery from 'virtual:gallery'


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Lista de URLs das imagens da pasta public/images/galeria
  const images: string[] = gallery as string[]

  // Gera um título/alt amigável a partir do nome do arquivo
  const toTitle = (url: string) => {
    const name = url.split('/').pop() || ''
    const base = name.replace(/\.[^.]+$/, '')
    
    // Mapeamento específico para melhor SEO com termos específicos
    const altTextMap: { [key: string]: string } = {
      'resistencia03_Generated_Image_aeygi3aeygi3aeyg': 'Resistência elétrica tubular blindada para aquecimento industrial',
      'resistencia_Image_ivsr6mivsr6mivsr': 'Resistência de imersão para aquecimento de líquidos em tanques',
      'res04_Image_dk24zzdk24zzdk24': 'Resistência cartucho tipo cartucho para aplicações industriais',
      'res05_dk24zzdk24zzdk24': 'Resistência fita mica para aquecimento de equipamentos',
      'conjunto01_Image_m5mq9om5mq9om5mq': 'Resistência coleira tipo coleira para injetora plástica',
      'fio_Image_3z9jbd3z9jbd3z9j': 'Resistência de ar quente para dutos de ar forçado',
      'prateleira_Image_qgnb5mqgnb5mqgnb': 'Resistência para chapa elétrica e equipamentos de buffet gastronômico',
      'cafeteirai_4fm79n4fm79n4fm7': 'Resistência para cafeteira elétrica e equipamentos de buffet',
      'Gemini_Generated_Image_id5efgid5efgid5e': 'Resistência serpentina elétrica para fritadeira e equipamentos gastronômicos'
    }
    
    // Verifica se existe um alt text específico
    if (altTextMap[base]) {
      return altTextMap[base]
    }
    
    // Fallback para conversão automática
    return base.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) + ' - Resistência Elétrica Industrial LCS'
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

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt={toTitle(selectedImage)}
                className="max-w-full max-h-[80vh] object-contain rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ImageGallery
