import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

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

        <div className="contact-content flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
          <div className="contact-info w-full lg:w-1/2">
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
                    <p>Remote</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-form-container w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4 shadow-lg animate-pulse">
                  <FaWhatsapp className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Get in touch with us for your dream website!
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Send us a message on WhatsApp to discuss your project.
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <a 
                  href="https://wa.me/919963416422?text=Hi%20Ruah%20Verse!%20I'm%20interested%20in%20discussing%20a%20web%20development%20project." 
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg">Message us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
