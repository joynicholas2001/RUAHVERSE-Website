import React from 'react'
import { FaLightbulb, FaHandshake, FaAward, FaCogs } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Ruah Verse</h2>
          <p className="section-subtitle">
            Where innovation meets expertise to create exceptional web solutions
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-main">
              <h3>Who We Are</h3>
              <p>
                Ruah Verse is a cutting-edge web development company specializing in 
                full-stack solutions that drive business growth. Founded by passionate 
                developers with a vision to transform ideas into powerful digital experiences, 
                we combine technical excellence with creative innovation.
              </p>
              <p>
                Our team brings together years of experience in modern web technologies, 
                delivering scalable, secure, and user-centric applications that exceed 
                client expectations. We don't just write code – we craft solutions that 
                solve real-world problems.
              </p>
            </div>

            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with robust, scalable web applications that drive 
                growth and innovation. We believe in building long-term partnerships with 
                our clients, providing ongoing support and evolving solutions that adapt 
                to changing business needs.
              </p>
            </div>
          </div>

          <div className="about-values">
            <h3>Why Choose Ruah Verse?</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaLightbulb />
                </div>
                <h4>Innovation First</h4>
                <p>
                  We stay ahead of technology trends, implementing the latest tools 
                  and frameworks to give your project a competitive edge.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h4>Client Partnership</h4>
                <p>
                  Your success is our success. We work closely with you throughout 
                  the entire development process, ensuring transparent communication.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaAward />
                </div>
                <h4>Quality Assurance</h4>
                <p>
                  Every line of code is thoroughly tested and optimized for performance, 
                  security, and scalability before deployment.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaCogs />
                </div>
                <h4>Full-Stack Expertise</h4>
                <p>
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