import React from 'react'
import { FaLaptopCode, FaMobile, FaDatabase, FaCloud, FaCog, FaCheck, FaArrowRight } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: <strong>"Frontend Development"</strong>,
      description: "Modern, responsive user interfaces built with React and cutting-edge technologies. We create engaging experiences that work seamlessly across all devices.",
      features: ["React.js/Next.js Apps", "Responsive Design", "Interactive UI/UX", "Performance Optimization"],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      benefits: ["Fast load times", "SEO-friendly", "Cross-browser compatible", "Mobile-first"]
    },
    {
      icon: <FaDatabase />,
      title: <strong>"Backend Development"</strong>,
      description: "Robust server-side solutions using Python, Node.js, and modern frameworks. Scalable architectures that handle your business logic efficiently.",
      features: ["RESTful/GraphQL APIs", "Microservices", "Authentication", "Cloud Integration"],
      technologies: ["Python/Django", "Node.js", "Express", "GraphQL"],
      benefits: ["High scalability", "Secure by design", "Easy maintenance", "Real-time capable"]
    },
    {
      icon: <FaDatabase />,
      title: "Database Solutions",
      description: "Complete database design and management with SQL and NoSQL databases. From MongoDB to PostgreSQL, we optimize your data layer.",
      features: ["SQL Database Design", "MongoDB Integration", "Data Modeling", "Query Optimization"],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
      benefits: ["Data consistency", "High performance", "Scalable storage", "Secure backups"]
    },
    {
      icon: <FaMobile />,
      title: "Full-Stack Applications",
      description: "End-to-end web applications that integrate seamlessly from frontend to backend. Complete solutions that scale with your business.",
      features: ["MERN Stack Development", "API Integration", "User Authentication", "Real-time Features"],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      benefits: ["End-to-end solution", "Faster development", "Consistent UX", "Scalable architecture"]
    },
    {
      icon: <FaCloud />,
      title: "Web Application Deployment",
      description: "Professional deployment and hosting solutions with CI/CD pipelines. Get your application live with optimal performance and security.",
      features: ["Cloud Deployment", "CI/CD Setup", "Performance Monitoring", "Security Implementation"],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      benefits: ["Zero downtime", "Auto scaling", "Cost effective", "High availability"]
    },
    {
      icon: <FaCog />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly and securely.",
      features: ["24/7 Support", "Regular Updates", "Bug Fixes", "Performance Monitoring"],
      technologies: ["DevOps", "Monitoring Tools", "Backup Systems", "Security Tools"],
      benefits: ["Peace of mind", "Quick response", "Proactive fixes", "Regular updates"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight pb-2">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <FaCheck className="text-primary-500 mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <FaArrowRight className="text-secondary-500 mr-2" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full btn-primary text-center py-3"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="project-process max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Development Process</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h4 className="text-xl font-semibold">Discovery & Planning</h4>
              </div>
              <p className="text-gray-600">We analyze your requirements and create a detailed project roadmap.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h4 className="text-xl font-semibold">Design & Architecture</h4>
              </div>
              <p className="text-gray-600">We design the system architecture and create wireframes for your approval.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h4 className="text-xl font-semibold">Development & Testing</h4>
              </div>
              <p className="text-gray-600">We build your application with regular updates and thorough testing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h4 className="text-xl font-semibold">Deployment & Support</h4>
              </div>
              <p className="text-gray-600">We deploy your application and provide ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services