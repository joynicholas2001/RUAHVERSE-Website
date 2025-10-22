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
          <div className="footer-section">
            <div className="footer-brand">
              <h3>
                <span className="logo-primary">Ruah</span>
                <span className="logo-secondary">Verse</span>
              </h3>
              <p className="footer-description">
                Full-stack web development services that transform your ideas into 
                powerful, scalable digital solutions. Let's build the future together.
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
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection('home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection('about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection('services')}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#technologies" onClick={() => scrollToSection('technologies')}>
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => scrollToSection('projects')}>
                  Sample Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Frontend Development</a></li>
              <li><a href="#services">Backend Development</a></li>
              <li><a href="#services">Full-Stack Applications</a></li>
              <li><a href="#services">Database Solutions</a></li>
              <li><a href="#services">API Development</a></li>
              <li><a href="#services">Web Deployment</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Technologies</h4>
            <ul className="footer-links">
              <li><a href="#technologies">React.js</a></li>
              <li><a href="#technologies">Python/Django</a></li>
              <li><a href="#technologies">JavaScript/Node.js</a></li>
              <li><a href="#technologies">MongoDB</a></li>
              <li><a href="#technologies">PostgreSQL</a></li>
              <li><a href="#technologies">HTML5/CSS3</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p>itzjoynicholas@gmai.com</p>
                  <span>24/7 Support</span>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <p>+91 9963416422</p>
                  <span>Mon-Fri, 9AM-6PM IST</span>
                </div>
              </div>
            </div>
            <div className="footer-cta">
              <p>Ready to start your project?</p>
              <button 
                className="btn-primary small"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </button>
            </div>
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