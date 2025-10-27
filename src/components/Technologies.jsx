import React from 'react'
import { 
  FaPython, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiPostgresql, 
  SiDjango, 
  SiExpress,
  SiVite,
  SiTailwindcss
} from 'react-icons/si'

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      description: "Modern user interface technologies",
      technologies: [
        { name: "React.js", icon: <FaReact />, description: "Component-based UI library" },
        { name: "JavaScript ES6+", icon: <FaJs />, description: "Modern JavaScript features" },
        { name: "HTML5", icon: <FaHtml5 />, description: "Semantic markup language" },
        { name: "CSS3", icon: <FaCss3Alt />, description: "Advanced styling and animations" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework" },
        { name: "Vite", icon: <SiVite />, description: "Fast build tool and dev server" }
      ]
    },
    {
      title: "Backend Development", 
      description: "Server-side and API technologies",
      technologies: [
        { name: "Python", icon: <FaPython />, description: "Versatile programming language" },
        { name: "Django", icon: <SiDjango />, description: "High-level Python web framework" },
        { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime environment" },
        { name: "Express.js", icon: <SiExpress />, description: "Fast Node.js web framework" }
      ]
    },
    {
      title: "Database Management",
      description: "Data storage and management solutions", 
      technologies: [
        { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL document database" },
        { name: "SQL", icon: <FaDatabase />, description: "Structured query language" }
      ]
    },
    {
      title: "Development Tools",
      description: "Tools and workflows for efficient development",
      technologies: [
        { name: "Git", icon: <FaGitAlt />, description: "Version control system" },
        { name: "RESTful APIs", icon: <FaDatabase />, description: "Web service architecture" },
        { name: "JSON", icon: <FaJs />, description: "Data interchange format" }
      ]
    }
  ]

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight pb-2">
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge tools and frameworks that power our development process
          </p>
        </div>

        <div className="tech-categories">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category">
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              
              <div className="tech-grid">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-card">
                    <div className="tech-icon">
                      {tech.icon}
                    </div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-expertise">
          <h3>Our Technical Expertise</h3>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h4>Full-Stack Development</h4>
              <p>
                Complete application development from database design to user interface, 
                ensuring seamless integration across all layers.
              </p>
            </div>
            <div className="expertise-item">
              <h4>API Development & Integration</h4>
              <p>
                RESTful API design, third-party service integration, and microservices 
                architecture for scalable applications.
              </p>
            </div>
            <div className="expertise-item">
              <h4>Database Architecture</h4>
              <p>
                Optimal database design for both SQL and NoSQL systems, ensuring 
                data integrity and query performance.
              </p>
            </div>
            <div className="expertise-item">
              <h4>Modern Development Practices</h4>
              <p>
                Agile methodology, version control, code review, and continuous 
                integration for quality assurance.
              </p>
            </div>
          </div>
        </div>

        <div className="tech-commitment">
          <div className="commitment-content">
            <h3>Committed to Excellence</h3>
            <p>
              We continuously update our skills and adopt emerging technologies to ensure 
              your projects are built with the most effective and modern solutions available.
            </p>
            <div className="commitment-features">
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>Latest Framework Versions</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🔒</span>
                <span>Security Best Practices</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Performance Optimization</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📱</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies