"use client"
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  EyeIcon, 
  ArrowTopRightOnSquareIcon, 
  SparklesIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'


const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState<Filter['id']>('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filters: Filter[] = [
    { id: 'all', label: 'Todos', count: 12 },
    { id: 'web', label: 'Web Apps', count: 5 },
    { id: 'mobile', label: 'Mobile', count: 4 },
    { id: 'design', label: 'UI/UX', count: 3 }
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Moderno",
      category: "web",
      description: "Plataforma completa de vendas online com design responsivo e UX otimizada",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Next.js", "Stripe", "Tailwind"],
      color: "from-blue-500 to-purple-600",
      featured: true
    },
    {
      id: 2,
      title: "App de Fitness",
      category: "mobile",
      description: "Aplicativo mobile para acompanhamento de treinos e nutrição",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Health Kit"],
      color: "from-green-500 to-teal-600",
      featured: false
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "web",
      description: "Interface administrativa com visualização de dados em tempo real",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      color: "from-orange-500 to-red-600",
      featured: true
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "design",
      description: "Identidade visual completa para startup de tecnologia",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      tags: ["Branding", "Logo Design", "Style Guide"],
      color: "from-pink-500 to-rose-600",
      featured: false
    },
    {
      id: 5,
      title: "Fintech Platform",
      category: "web",
      description: "Plataforma financeira com foco em segurança e usabilidade",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Blockchain", "Security"],
      color: "from-indigo-500 to-blue-600",
      featured: true
    },
    {
      id: 6,
      title: "Social Media App",
      category: "mobile",
      description: "Rede social focada em compartilhamento de conteúdo visual",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Flutter", "Firebase", "Cloud Storage"],
      color: "from-purple-500 to-pink-600",
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <SparklesIcon className="w-5 h-5 text-accent-400" />
            <span className="text-sm font-medium text-neutral-300">Nosso Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Projetos</span>
            <br />
            <span className="text-white">Incríveis</span>
          </h2>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Cada projeto é uma história única de inovação, criatividade e 
            excelência técnica que transforma visões em realidade digital
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'glass border border-primary-500/50 text-white bg-primary-500/10'
                  : 'glass border border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{filter.label}</span>
              <span className="ml-2 text-xs opacity-60">({filter.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl border border-white/10 p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-neutral-400 mb-8 text-lg">
              Vamos criar algo incrível juntos. Seu próximo projeto pode estar aqui!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Ver Todos os Projetos
              </motion.button>
              <motion.button
                className="btn-secondary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Projeto
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ 
  project, 
  index, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  project: Project, 
  index: number,
  isHovered: boolean,
  onHover: () => void,
  onLeave: () => void
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
      exit={{ opacity: 0, y: 60, scale: 0.8 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }}
      className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="glass rounded-2xl border border-white/10 overflow-hidden h-full relative transition-all duration-500 hover:border-white/20">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.button
              className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <EyeIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <div className="px-3 py-1 rounded-full glass border border-accent-500/50 text-accent-400 text-xs font-medium">
                Destaque
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 rounded-full glass border border-white/20 text-white text-xs font-medium capitalize">
              {project.category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-neutral-400 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            />
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio

// Tipos auxiliares
type Filter = { id: 'all' | 'web' | 'mobile' | 'design'; label: string; count: number }
type Project = {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'design';
  description: string;
  image: string;
  tags: string[];
  color: string;
  featured: boolean;
}
