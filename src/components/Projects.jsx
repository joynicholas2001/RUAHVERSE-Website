import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye } from 'react-icons/fa'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Python Django backend, and PostgreSQL database. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Django", "PostgreSQL", "Stripe API"],
      category: "fullstack",
      features: ["User Authentication", "Payment Gateway", "Inventory Management", "Order Tracking"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application built with React and MongoDB. Real-time updates, team collaboration, and project tracking capabilities.",
      image: "/api/placeholder/400/250", 
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
      features: ["Real-time Collaboration", "Task Assignment", "Progress Tracking", "Team Management"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Modern restaurant website with online reservation system, menu display, and customer reviews. Responsive design with smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "JavaScript", "Firebase"],
      category: "frontend",
      features: ["Online Reservations", "Menu Display", "Customer Reviews", "Gallery"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business analytics with interactive charts, real-time data updates, and custom reporting features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Python", "PostgreSQL", "Chart.js"],
      category: "fullstack",
      features: ["Data Visualization", "Real-time Updates", "Custom Reports", "Export Functionality"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system with rich text editor, user roles, and SEO optimization. Built with modern web technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      category: "fullstack",
      features: ["Rich Text Editor", "User Roles", "SEO Optimization", "Comment System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Creative portfolio website with smooth animations, responsive design, and contact form integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "JavaScript", "Netlify"],
      category: "frontend",
      features: ["Smooth Animations", "Contact Form", "Image Gallery", "Mobile Responsive"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sample Projects</h2>
          <p className="section-subtitle">
            Showcasing our expertise through real-world applications and solutions
          </p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button 
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" title="View Live">
                      <FaEye />
                    </a>
                    <a href={project.githubUrl} className="project-link" title="View Code">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
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
                  <a href={project.liveUrl} className="btn-primary">
                    <FaExternalLinkAlt /> View Live
                  </a>
                  <a href={project.githubUrl} className="btn-secondary">
                    <FaCode /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>Interested in Working With Us?</h3>
            <p>
              These projects represent just a fraction of our capabilities. 
              Let's discuss how we can bring your unique vision to life.
            </p>
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </button>
          </div>
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