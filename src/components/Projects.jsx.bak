import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects] = React.useState([
    {
      id: 1,
      title: "ArtGram E-Commerce Platform",
      description: "A scalable e-commerce solution built for a multi-branch art supplies retailer. The platform handles thousands of daily transactions across multiple locations with real-time inventory sync.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=top",
      technologies: ["React", "MongoDB", "Node.js", "Express"],
      features: ["Multi-branch Inventory", "Real-time Stock Updates", "Advanced Analytics", "Mobile-first Design"],
      results: [
        "30% increase in online sales",
        "99.9% uptime"
      ],
      liveUrl: "https://artgram.in"
    },
    {
      id: 2,
      title: "Araku House Café",
      description: "A modern e-commerce website for a premium café chain, featuring online ordering, menu management, and a loyalty program.",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=250&fit=crop&crop=top",
      technologies: ["React", "MongoDB", "Next.js", "Tailwind CSS"],
      features: ["Modern UI/UX Design", "Online Ordering", "Menu Management", "Customer Reviews"],
      results: [
        "25% increase in customer engagement",
        "40% boost in online orders"
      ],
      liveUrl: "https://araku-house.vercel.app"
    }
  ]);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight pb-2">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing our expertise through real-world applications and solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="project-process max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Project Development Process</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h4 className="text-xl font-semibold">Requirements Analysis</h4>
              </div>
              <p className="text-gray-600">We thoroughly analyze your needs and create detailed project specifications.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h4 className="text-xl font-semibold">Design & Prototyping</h4>
              </div>
              <p className="text-gray-600">Creating wireframes and prototypes to visualize the final product.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h4 className="text-xl font-semibold">Development & Testing</h4>
              </div>
              <p className="text-gray-600">Agile development with continuous testing and quality assurance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h4 className="text-xl font-semibold">Deployment & Maintenance</h4>
              </div>
              <p className="text-gray-600">Smooth deployment and ongoing support for optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;