import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ImageGallery from '../components/ImageGallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import fs from 'fs'
import path from 'path'

function getGalleryImages(): string[] {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'galeria')
    const entries = fs.readdirSync(galleryDir, { withFileTypes: true })
    const allowed = new Set(['.png', '.jpg', '.jpeg', '.jfif', '.webp'])
    const files = entries
      .filter((e) => e.isFile() && allowed.has(path.extname(e.name).toLowerCase()))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true, sensitivity: 'base' }))
    return files.map((name) => `/images/galeria/${name}`)
  } catch {
    return []
  }
}

export default function Page() {
  const images = getGalleryImages()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <ImageGallery images={images} />
      <Contact />
      <Footer />
    </div>
  )
}

