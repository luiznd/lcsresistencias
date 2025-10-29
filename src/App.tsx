import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ImageGallery from './components/ImageGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import GoogleAnalytics from './components/GoogleAnalytics'
import StructuredData from './components/StructuredData'
import { Analytics } from '@vercel/analytics/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gray-50">
        <GoogleAnalytics />
        <StructuredData />
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <ImageGallery />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </I18nextProvider>
  )
}

export default App