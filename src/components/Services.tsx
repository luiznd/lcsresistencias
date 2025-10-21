import { WrenchScrewdriverIcon, CogIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'


const Services = () => {
  const services = [
    {
      icon: WrenchScrewdriverIcon,
      title: "Resistências e Fornos",
      description: "Resistências elétricas industriais de alta qualidade para fornos e equipamentos de aquecimento.",
      features: ["Resistências tubulares", "Fornos industriais", "Elementos aquecedores"],
      imageSrc: "/images/Gemini_Generated_Image_cm067pcm067pcm06.png"
    },
    {
      icon: CogIcon,
      title: "Manutenção",
      description: "Serviços especializados de manutenção preventiva e corretiva em equipamentos elétricos industriais.",
      imageSrc: "/images/Gemini_Generated_Image_pq632ppq632ppq63.png"
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Projetos",
      description: "Desenvolvimento de projetos customizados para soluções de aquecimento elétrico industrial.",
      imageSrc: "/images/Gemini_Generated_Image_62z15662z15662z1.png"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Serviços
          </h2>
          <div className="badge badge-slate mx-auto mb-8 w-fit">
            <span>Especialistas em aquecimento elétrico industrial</span>
          </div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em aquecimento elétrico industrial, 
            desde o desenvolvimento até a manutenção de equipamentos especializados.
          </p>
        </div>

        {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-accent-200">
                <div className="overflow-hidden">
                  <img src={service.imageSrc} alt={`Imagem ilustrativa: ${service.title}`} className="w-full h-40 md:h-48 object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-accent-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
            <div className="bg-slate-50 rounded-3xl p-6 md:p-12 text-center border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            As Melhores Soluções em Aquecimento Elétrico Industrial
          </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Venda de equipamentos para a indústria, soluções sob medida e manutenção de 
            equipamentos elétricos industriais com excelência e qualidade.
          </p>
          <a href="#contact" className="btn-primary text-lg">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services