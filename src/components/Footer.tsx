import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { CONTACT, LINKS } from '../config/contact'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">LCS</span>
              </div>
              <span className="text-2xl font-bold">LCS Aquecimento</span>
            </div>
            <p className="text-gray-300 mb-6">
              Especialistas em soluções de aquecimento elétrico industrial. 
              Oferecemos produtos de alta qualidade e serviços especializados 
              para atender às necessidades da sua empresa.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <a href={LINKS.mapsLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
                    {CONTACT.addressLine1}
                  </a>
                  <p className="text-gray-300">{CONTACT.addressLine2}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href={LINKS.tel} className="text-gray-300 hover:text-orange-400">{CONTACT.phoneDisplay}</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href={LINKS.mailto} className="text-gray-300 hover:text-orange-400">{CONTACT.email}</a>
              </div>
              
              <div className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-gray-300">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Resistores Elétricos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Fornos Industriais
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Manutenção Especializada
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Projetos Customizados
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Galeria de Produtos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LCS Aquecimento Elétrico Industrial. Todos os direitos reservados.
            </p>
            
            <div className="text-gray-400 text-sm">
              Desenvolvido com tecnologia React
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
