import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to reset scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavLinkClick = (path, sectionId) => {
    setIsMenuOpen(false)
    if (location.pathname === path) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path + (sectionId ? `#${sectionId}` : ''))
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-primary-500">Ruah</span>
              <span className="text-secondary-500">Verse</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={() => handleNavLinkClick('/', 'home')} 
               className="text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/" onClick={() => handleNavLinkClick('/', 'about')} 
               className="text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/" onClick={() => handleNavLinkClick('/', 'services')} 
               className="text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/" onClick={() => handleNavLinkClick('/', 'technologies')} 
               className="text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium">
              Technologies
            </Link>
            <Link to="/" onClick={() => handleNavLinkClick('/', 'projects')} 
               className="text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium">
              Projects
            </Link>
            <Link to="/" onClick={() => handleNavLinkClick('/', 'contact')} 
               className="btn-primary px-6 py-2 text-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes size={20} className="text-gray-700" /> : <FaBars size={20} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-6 pt-2 border-t border-gray-200 mt-2">
            <nav className="flex flex-col space-y-1">
              <Link 
                to="/" 
                onClick={() => handleNavLinkClick('/', 'home')} 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/" 
                onClick={() => handleNavLinkClick('/', 'about')} 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                About
              </Link>
              <Link 
                to="/" 
                onClick={() => handleNavLinkClick('/', 'services')} 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Services
              </Link>
              <Link 
                to="/" 
                onClick={() => handleNavLinkClick('/', 'technologies')} 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Technologies
              </Link>
              <Link 
                to="/" 
                onClick={() => handleNavLinkClick('/', 'projects')} 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Projects
              </Link>
              <div className="px-4 pt-3">
                <Link 
                  to="/" 
                  onClick={() => handleNavLinkClick('/', 'contact')} 
                  className="block w-full btn-primary text-center py-3 text-sm rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
