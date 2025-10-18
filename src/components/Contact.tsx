import { useState, type ChangeEvent, type FormEvent } from 'react'

import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { CONTACT, LINKS } from '../config/contact'

// Ícone do WhatsApp (SVG inline, sem dependências externas)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#25D366" d="M16 3C9.373 3 4 8.373 4 15c0 2.284.61 4.427 1.67 6.28L4 29l7.876-1.642C13.64 28.39 14.792 28.7 16 28.7 22.627 28.7 28 23.327 28 16.7 28 10.073 22.627 4.7 16 4.7z"/>
    <path fill="#fff" d="M22.25 19.083c-.174-.097-1.027-.507-1.186-.566-.159-.058-.275-.096-.392.097-.116.192-.451.565-.553.681-.103.116-.204.13-.378.045-.174-.087-.736-.271-1.402-.864-.518-.46-.868-1.028-.97-1.202-.103-.174-.011-.267.077-.355.08-.08.174-.204.261-.307.087-.103.116-.174.174-.29.058-.116.029-.217-.015-.31-.045-.097-.392-.945-.537-1.291-.142-.342-.286-.296-.392-.296-.1-.006-.217-.006-.334-.006-.116 0-.31.044-.474.217-.163.174-.622.608-.622 1.481 0 .873.636 1.717.725 1.833.087.116 1.25 1.906 3.028 2.676.423.182.754.29 1.012.372.425.135.813.116 1.121.07.342-.051 1.027-.42 1.171-.826.144-.407.144-.756.1-.83-.04-.074-.159-.116-.333-.213z"/>
  </svg>
)

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validação simples de campos obrigatórios
    const errors: string[] = []
    if (!formData.name.trim()) errors.push('Informe seu nome.')
    if (!formData.email.trim()) errors.push('Informe seu e-mail.')
    if (!formData.description.trim()) errors.push('Descreva sua necessidade.')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Digite um e-mail válido.')
    }

    if (errors.length > 0) {
      alert('Por favor, corrija os seguintes pontos:\n\n- ' + errors.join('\n- '))
      return
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        const details = Array.isArray(data?.details) ? `\n\n- ${data.details.join('\n- ')}` : ''
        throw new Error(data?.error || `Falha ao enviar e-mail.${details}`)
      }
      alert('Mensagem enviada com sucesso!')
      setFormData({ name: '', email: '', phone: '', description: '' })
    } catch (err: any) {
      alert(err.message || 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário com seus dados e descreva sua necessidade. Nossa equipe retornará rapidamente.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Formulário */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Formulário de Contato</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={CONTACT.phoneDisplay.replace('7745', '9999')}
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Descrição *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="Descreva sua necessidade de aquecimento elétrico industrial..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mr-4">
                  <PhoneIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <a href={LINKS.tel} className="text-gray-900 font-medium hover:text-orange-600">{CONTACT.phoneDisplay}</a>
                  <p className="text-gray-600 text-sm">Ligue para nós</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mr-4">
                  <EnvelopeIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <a href={LINKS.mailto} className="text-gray-900 font-medium hover:text-orange-600">{CONTACT.email}</a>
                  <p className="text-gray-600 text-sm">Envie um e-mail</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mr-4">
                  <MapPinIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <a href={LINKS.mapsLink} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:text-orange-600">{CONTACT.addressLine1}</a>
                  <p className="text-gray-900 font-medium">{CONTACT.addressLine2}</p>
                  <p className="text-gray-600 text-sm">Visite nossa fábrica</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mr-4">
                  <ClockIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horário</h4>
                  <p className="text-gray-900 font-medium">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-gray-900 font-medium">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              aria-label="Chamar no WhatsApp"
            >
              <WhatsAppIcon className="h-6 w-6 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mapa - Localização */}
      <div className="container mx-auto px-4 mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Localização</h3>
        <p className="text-gray-700 mb-4">{CONTACT.fullAddress}</p>
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            title={`Mapa - ${CONTACT.fullAddress}`}
            src={LINKS.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 flex items-center justify-center"
        aria-label="Abrir chat do WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </section>
  )
}

export default Contact
