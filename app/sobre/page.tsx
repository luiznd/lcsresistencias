import { Metadata } from 'next';
import { CheckCircle, Target, Eye, Heart, Factory } from 'lucide-react';
import ImageSlices from '../components/ImageSlices';
import { CONTACT } from '../core/config/contact';

export const metadata: Metadata = {
  title: 'Sobre a LCS | LCS Resistências Elétricas',
  description: 'Conheça a história, missão, visão e valores da LCS Resistências, sua parceira em aquecimento elétrico industrial.',
};

const SobrePage = () => {
  const achievements = [
    'Mais de 20 anos de experiência em resistências elétricas',
    'Equipe técnica especializada em aquecimento industrial',
    'Certificações ISO 9001 e normas técnicas brasileiras',
    'Atendimento personalizado para cada aplicação',
    'Soluções customizadas para diversos segmentos',
    'Suporte técnico especializado e manutenção preventiva'
  ];

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer peças e serviços com alto padrão de qualidade e um excelente custo benefício, com soluções que contemplem o perfil e necessidade de cada cliente.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência nacional no segmento de aquecimento elétrico industrial.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Honestidade, profissionalismo, respeito, inovação, qualidade, superação, diálogo e parceria.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="badge badge-accent mb-6">
              <Factory className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Sobre a LCS Resistências</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Sobre a LCS Resistências
            </h1>
            <div className="badge badge-slate mb-6">
              <span>20 Anos de Excelência em Atendimento e Serviços</span>
            </div>
            
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              A LCS Resistências é uma empresa especializada no desenvolvimento, fabricação e manutenção 
              de resistências elétricas industriais, com mais de 20 anos de experiência no mercado nacional.
            </p>
            
            <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed">
              Nossa equipe de engenheiros e técnicos especializados desenvolve soluções customizadas 
              em aquecimento elétrico para diversos segmentos industriais, garantindo máxima eficiência 
              energética, segurança operacional e durabilidade dos equipamentos.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="relative">
            {/* Image Slices Display */}
            <div className="mb-8">
              <ImageSlices
                imageSrc="/images/resistencia.jfif"
                sliceCount={3}
                layout="vertical"
                className="rounded-2xl overflow-hidden shadow-xl"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <div className="text-2xl font-bold text-slate-800 mb-1">500+</div>
                <div className="text-sm text-slate-600">Projetos Concluídos</div>
              </div>
              <div className="bg-slate-100 rounded-xl p-6 text-center border border-slate-200">
                <div className="text-2xl font-bold text-slate-800 mb-1">98%</div>
                <div className="text-sm text-slate-600">Taxa de Satisfação</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
              Nossos Princípios
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Os valores que nos guiam em cada projeto e relacionamento com nossos clientes.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={CONTACT.social.find(s => s.name === 'WhatsApp')?.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Fale Conosco
            </a>
            <a href="/#contact" className="btn-outline text-lg">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobrePage;