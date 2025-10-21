const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (arquivo local em public/images) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/70 to-black/50 absolute z-10"></div>
        <img
          src="/images/Gemini_Generated_Image_4kegt84kegt84keg.png"
          alt="Aquecimento elétrico industrial"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Soluções em 
            <span className="block text-accent-500">Aquecimento Elétrico Industrial</span>
          </h1>
          
            <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto">
            Especialistas em equipamentos de aquecimento elétrico para indústria, 
            oferecendo soluções personalizadas e de alta qualidade.
          </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a href="#gallery" className="btn-primary text-lg inline-flex items-center gap-2">
              Conheça Nossos Produtos
            </a>
            
            <a href="#contact" className="btn-secondary text-lg">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero