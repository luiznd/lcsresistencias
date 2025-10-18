import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart, Factory } from 'lucide-react'
import ImageSlices from './ImageSlices'

const About: React.FC = () => {
  const achievements = [
    'Mais de 25 anos de experiência em resistências elétricas',
    'Equipe técnica especializada em aquecimento industrial',
    'Certificações ISO 9001 e normas técnicas brasileiras',
    'Atendimento personalizado para cada aplicação',
    'Soluções customizadas para diversos segmentos',
    'Suporte técnico especializado e manutenção preventiva'
  ]

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Desenvolver e fabricar resistências elétricas industriais de alta qualidade, oferecendo soluções eficientes em aquecimento para diversos segmentos industriais.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser líder nacional na fabricação de resistências elétricas industriais, reconhecida pela qualidade, inovação e excelência no atendimento.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Qualidade superior, inovação tecnológica, sustentabilidade, ética profissional e compromisso com a satisfação dos clientes.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <Factory className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-primary-600">Sobre a LCS Resistências</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Especialistas em
              <span className="text-primary-600 block">Resistências Elétricas Industriais</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A LCS Resistências é uma empresa especializada no desenvolvimento, fabricação e manutenção 
              de resistências elétricas industriais, com mais de 25 anos de experiência no mercado nacional.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa equipe de engenheiros e técnicos especializados desenvolve soluções customizadas 
              em aquecimento elétrico para diversos segmentos industriais, garantindo máxima eficiência 
              energética, segurança operacional e durabilidade dos equipamentos.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Slices Display */}
            <div className="mb-8">
              <ImageSlices
                imageSrc="/images/industrial-heating.jpg"
                sliceCount={3}
                layout="vertical"
                className="rounded-2xl overflow-hidden shadow-xl"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-6 text-center border border-primary-100">
                <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-sm text-primary-700">Projetos Concluídos</div>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center border border-gray-200">
                <div className="text-2xl font-bold text-gray-700 mb-1">98%</div>
                <div className="text-sm text-gray-600">Taxa de Satisfação</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Mission, Vision, Values */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nossos Princípios
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os valores que nos guiam em cada projeto e relacionamento com nossos clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div 
                  key={index} 
                  className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
