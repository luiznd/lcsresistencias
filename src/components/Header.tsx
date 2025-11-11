"use client"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LINKS } from '../config/contact'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
    { name: 'WhatsApp', href: LINKS.whatsapp },
  ]

  return (
    <header className="bg-slate-900 text-slate-100 shadow-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-14 md:h-16 md:flex md:items-center md:justify-between">
          {/* Right aligned mobile menu button */}
          {/* Mobile brand (visible only on mobile) */}
          <div className="col-start-1 col-span-2 md:hidden">
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-100">LCS Resistências</span>
              <span className="text-[11px] text-slate-400">Aquecimento Elétrico Industrial</span>
            </div>
          </div>
          {/* Logo */}
          <div className="hidden md:flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img src="/images/logo-lcs.svg" alt="LCS Resistências" className="h-10 w-auto" />
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-slate-100">LCS Resistências</h1>
                  <p className="text-xs text-slate-400">Aquecimento Elétrico Industrial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm" aria-label="Navegação principal">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="col-start-3 col-span-1 justify-self-end flex justify-end md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-slate-100 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-800">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-accent-500 block px-3 py-3 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
