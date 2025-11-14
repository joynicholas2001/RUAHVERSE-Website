import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assests/RUAH-VERSE-LOGO_PNG.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'services', 'technologies', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      } sticky`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
              <img
                src={logo}
                alt="RuahVerse Logo"
                className="h-12 w-auto md:h-16 object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${
                activeSection === 'home' ? 'text-primary-500' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${
                activeSection === 'about' ? 'text-primary-500' : ''
              }`}
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${
                activeSection === 'services' ? 'text-primary-500' : ''
              }`}
            >
              Services
            </a>
            <a
              href="#technologies"
              onClick={(e) => scrollToSection(e, 'technologies')}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${
                activeSection === 'technologies' ? 'text-primary-500' : ''
              }`}
            >
              Technologies
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${
                activeSection === 'projects' ? 'text-primary-500' : ''
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`btn-primary px-6 py-2 text-sm ${
                activeSection === 'contact' ? 'bg-primary-600' : ''
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes size={20} className="text-gray-700" />
            ) : (
              <FaBars size={20} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-6 pt-2 border-t border-gray-200 mt-2">
            <nav className="flex flex-col space-y-1">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, 'home')}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${
                  activeSection === 'home' ? 'text-primary-500' : ''
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${
                  activeSection === 'about' ? 'text-primary-500' : ''
                }`}
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${
                  activeSection === 'services' ? 'text-primary-500' : ''
                }`}
              >
                Services
              </a>
              <a
                href="#technologies"
                onClick={(e) => scrollToSection(e, 'technologies')}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${
                  activeSection === 'technologies' ? 'text-primary-500' : ''
                }`}
              >
                Technologies
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${
                  activeSection === 'projects' ? 'text-primary-500' : ''
                }`}
              >
                Projects
              </a>
              <div className="px-4 pt-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className={`block w-full btn-primary text-center py-3 text-sm rounded-lg ${
                    activeSection === 'contact' ? 'bg-primary-600' : ''
                  }`}
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
