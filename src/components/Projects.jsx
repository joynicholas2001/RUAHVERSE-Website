import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "React based E-Commerce solution with React frontend, Mongo database. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=top",
      technologies: ["React", "Mongo DB", "API Integration", "3 Different Payment gateways for 3 branches"],
      features: ["User Authentication", "Payment Gateway", "Inventory Management", "Order Tracking"],
      liveUrl: "https://artgram.in",
    },
    
  ]


  const filteredProjects = projects

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Sample Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing our expertise through real-world applications and solutions
          </p>
        </div>


        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project.title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  <a href={project.liveUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
   

        <div className="project-process">
          <h3>Our Project Development Process</h3>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h4>Requirements Analysis</h4>
                <p>We thoroughly analyze your needs and create detailed project specifications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h4>Design & Prototyping</h4>
                <p>Creating wireframes and prototypes to visualize the final product.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h4>Development & Testing</h4>
                <p>Agile development with continuous testing and quality assurance.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h4>Deployment & Maintenance</h4>
                <p>Smooth deployment and ongoing support for optimal performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
