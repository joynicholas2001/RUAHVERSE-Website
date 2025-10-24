import React from 'react'
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand and Social Links */}
          <div className="footer-section footer-brand-section">
            <h3 className="footer-brand">
              <span className="logo-primary">Ruah</span>
              <span className="logo-secondary">Verse</span>
            </h3>
            <p className="footer-description">
              Professional web development services. Let's build your digital future together.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section footer-nav-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section footer-contact-section">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>itzjoynicholas@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 9963416422</span>
              </div>
            </div>
            <button 
              className="btn-primary footer-cta-btn"
              onClick={() => scrollToSection('contact')}
            >
              Start Project
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; {currentYear} Ruah Verse. All rights reserved.</p>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
            <div className="footer-back-to-top">
              <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer