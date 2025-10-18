import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ImageGallery from './components/ImageGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <ImageGallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App