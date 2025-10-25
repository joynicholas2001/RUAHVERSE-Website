import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight pb-2">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your project to life? Let's start the conversation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Build Something Amazing Together</h3>
              <p>
                Whether you have a detailed project plan or just an idea, we're here to help 
                you turn your vision into a powerful web application. Get in touch for a 
                free consultation and project estimate.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-text">
                    <h4>Email Us</h4>
                    <p>itzjoynicholas@gmail.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div className="contact-text">
                    <h4>Call Us</h4>
                    <p>+91 9963416422</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Remote & Worldwide</p>
                    <span>Serving clients globally</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <h3>Get in touch with us for your dream website!</h3>
              <p>Send us a message on WhatsApp to discuss your project.</p>
              <a 
                href="https://wa.me/9963416422" 
                className="btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
