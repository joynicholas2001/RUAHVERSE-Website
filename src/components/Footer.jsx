import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand and Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-primary-400">Ruah</span>
              <span className="text-secondary-400">Verse</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Professional web development services. Let's build your digital future together.
            </p>
            
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#trust" 
                  onClick={() => scrollToSection('trust')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Why Trust Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 text-sm flex-shrink-0" />
                <span className="text-gray-300 text-sm">itzjoynicholas@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 text-sm flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9963416422</span>
              </div>
            </div>
            <button 
              className="btn-primary text-sm px-6 py-2 hover:transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Start Project
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">&copy; {currentYear} Ruah Verse. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-2">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 text-xs transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-primary-400 text-xs transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button 
                onClick={scrollToTop} 
                className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="Back to top"
              >
                <FaArrowUp className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="absolute top-4 right-4 flex space-x-1 opacity-20">
        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
        <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </footer>
  )
}

export default Footer
