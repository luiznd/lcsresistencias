'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// A importação 'virtual:gallery' foi removida, pois era específica do Vite.
// A lógica de carregamento de imagens será recriada usando recursos do Next.js.

// Interface para os dados do produto
interface ProductData {
  _id?: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])
  const [products, setProducts] = useState<ProductData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const res = await fetch('/api/gallery')
        const data = await res.json()
        if (Array.isArray(data)) {
          setImages(data)
        }
      } catch (error) {
        console.error('Erro ao buscar imagens da galeria:', error)
      }
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data)
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    const loadData = async () => {
      await Promise.all([fetchGalleryImages(), fetchProducts()])
      setLoading(false)
    }

    loadData()
  }, [])
  
  // Função para obter detalhes do produto a partir do banco de dados ou fallback para dados estáticos
  const getProductDetails = (imageName: string): ProductData => {
    const normalizedImageName = imageName.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
    const dbProduct = products.find(p => 
      p.title.toLowerCase() === normalizedImageName.toLowerCase()
    );

    if (dbProduct) {
      return dbProduct;
    }

    return {
      title: toTitle(imageName),
      category: 'Resistências Industriais',
      description: 'Resistência elétrica industrial de alta qualidade fabricada pela LCS Resistências.'
    };
  }

  // Gera um título/alt amigável a partir do nome do arquivo
  const toTitle = (url: string) => {
    const name = url.split('/').pop() || ''
    const base = name.replace(/\.[^.]+$/, '')
    
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
        {loading ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">Carregando imagens...</p>
          </div>
        ) : (
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
        )}

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
                      {getProductDetails(selectedImage.split('/').pop() || '').category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {getProductDetails(selectedImage.split('/').pop() || '').title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {getProductDetails(selectedImage.split('/').pop() || '').description}
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
