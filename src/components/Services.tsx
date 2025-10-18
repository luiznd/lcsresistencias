import { WrenchScrewdriverIcon, CogIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const ServiceSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Representação de serviço">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f3f4f6"/>
        <stop offset="100%" stopColor="#e5e7eb"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="640" height="240" fill="url(#bg)" />
    <g stroke="#9ca3af" strokeWidth="6" fill="#f59e0b22">
      <rect x="40" y="60" width="160" height="120" rx="12" />
      <rect x="240" y="40" width="160" height="160" rx="16" />
      <circle cx="480" cy="120" r="56" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={`tooth-${i}`} x="-6" y="-86" width="12" height="22" transform={`translate(480,120) rotate(${i*30})`} />
      ))}
    </g>
  </svg>
)

const Services = () => {
  const services = [
    {
      icon: WrenchScrewdriverIcon,
      title: "Resistores e Fornos",
      description: "Resistores elétricos industriais de alta qualidade para fornos e equipamentos de aquecimento.",
    },
    {
      icon: CogIcon,
      title: "Manutenção",
      description: "Serviços especializados de manutenção preventiva e corretiva em equipamentos elétricos industriais.",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Projetos",
      description: "Desenvolvimento de projetos customizados para soluções de aquecimento elétrico industrial.",
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em aquecimento elétrico industrial, 
            desde o desenvolvimento até a manutenção de equipamentos especializados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
                <div className="overflow-hidden">
                  <ServiceSVG className="w-full h-48" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-orange-600" />
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
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            As Melhores Soluções em Aquecimento Elétrico Industrial
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Venda de equipamentos para a indústria, soluções sob medida e manutenção de 
            equipamentos elétricos industriais com excelência e qualidade.
          </p>
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services