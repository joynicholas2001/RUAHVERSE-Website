import React from 'react'
import { FaLightbulb, FaHandshake, FaAward, FaCogs } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            About Ruah Verse
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where innovation meets expertise to create exceptional web solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who We Are</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ruah Verse is a cutting-edge web development company specializing in 
                full-stack solutions that drive business growth. Founded by passionate 
                developers with a vision to transform ideas into powerful digital experiences, 
                we combine technical excellence with creative innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team brings together years of experience in modern web technologies, 
                delivering scalable, secure, and user-centric applications that exceed 
                client expectations. We don't just write code – we craft solutions that 
                solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with robust, scalable web applications that drive 
                growth and innovation. We believe in building long-term partnerships with 
                our clients, providing ongoing support and evolving solutions that adapt 
                to changing business needs.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Why Choose Ruah Verse?</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <FaLightbulb className="text-primary-500 text-xl" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Innovation First</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We stay ahead of technology trends, implementing the latest tools 
                  and frameworks to give your project a competitive edge.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <FaHandshake className="text-secondary-500 text-xl" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Client Partnership</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your success is our success. We work closely with you throughout 
                  the entire development process, ensuring transparent communication.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <FaAward className="text-primary-500 text-xl" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Quality Assurance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every line of code is thoroughly tested and optimized for performance, 
                  security, and scalability before deployment.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <FaCogs className="text-secondary-500 text-xl" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Full-Stack Expertise</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From frontend interfaces to backend architecture and database design, 
                  we handle every aspect of your web application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About