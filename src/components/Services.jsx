import React from 'react'
import { FaLaptopCode, FaMobile, FaDatabase, FaCloud, FaCog, FaSearch } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React, HTML5, CSS3, and JavaScript. We create engaging experiences that work seamlessly across all devices.",
      features: ["React.js Applications", "Responsive Design", "Interactive UI/UX", "Performance Optimization"]
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development", 
      description: "Robust server-side solutions using Python, Node.js, and modern frameworks. Scalable architectures that handle your business logic efficiently.",
      features: ["Python/Django APIs", "RESTful Services", "Database Design", "Server Architecture"]
    },
    {
      icon: <FaDatabase />,
      title: "Database Solutions",
      description: "Complete database design and management with SQL and NoSQL databases. From MongoDB to PostgreSQL, we optimize your data layer.",
      features: ["SQL Database Design", "MongoDB Integration", "Data Modeling", "Query Optimization"]
    },
    {
      icon: <FaMobile />,
      title: "Full-Stack Applications",
      description: "End-to-end web applications that integrate seamlessly from frontend to backend. Complete solutions that scale with your business.",
      features: ["MERN Stack Development", "API Integration", "User Authentication", "Real-time Features"]
    },
    {
      icon: <FaCloud />,
      title: "Web Application Deployment",
      description: "Professional deployment and hosting solutions with CI/CD pipelines. Get your application live with optimal performance and security.",
      features: ["Cloud Deployment", "CI/CD Setup", "Performance Monitoring", "Security Implementation"]
    },
    {
      icon: <FaCog />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly and securely.",
      features: ["24/7 Support", "Regular Updates", "Bug Fixes", "Performance Monitoring"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta">Learn More</button>
            </div>
          ))}
        </div>

        <div className="services-process">
          <h3>Our Development Process</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Discovery & Planning</h4>
              <p>We analyze your requirements and create a detailed project roadmap.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Design & Architecture</h4>
              <p>We design the system architecture and create wireframes for your approval.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Development & Testing</h4>
              <p>We build your application with regular updates and thorough testing.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Deployment & Support</h4>
              <p>We deploy your application and provide ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services