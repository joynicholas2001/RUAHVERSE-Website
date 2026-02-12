import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects] = React.useState([
    {
      id: 1,
      title: "Architectural Website",
      description: "Zionic ARC delivers innovative Commercial Architecture, Residential Architecture, Interior Design, and Institutional Architecture solutions—designed with precision, functionality, and modern aesthetics.",
      image: "https://images.unsplash.com/photo-1549735651-77a5e0e7954b?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React JS"],
      features: ["Advanced Transitions", "Performance Optimization", "Responsive Grid", "SEO Engine"],
      liveUrl: "https://zionicarc-website.vercel.app/"
    },
  ]);

  return (
    <section id="projects" className="py-16 md:py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
          <p className="text-violet-600 font-bold tracking-widest text-sm uppercase">The Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Selected <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We don't just write code; we solve business problems. Each project below represents a unique challenge we've overcome, delivering custom-tailored digital experiences that drive real-world results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 mb-16 md:mb-32">
          {projects.map(project => (
            <div key={project.id} className="animate-reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Project Process - Redesigned */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 shadow-xl border border-slate-100">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 md:mb-16 gap-6 md:gap-8">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 text-center lg:text-left">
              Our Development Cycle
            </h3>
            <div className="h-[2px] w-24 bg-violet-600 hidden lg:block"></div>
            <p className="text-slate-500 font-medium text-center lg:text-left max-w-sm">
              From the initial handshake to the final deployment, we maintain a standard of absolute excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Analysis", desc: "We thoroughly analyze your needs and create detailed specifications." },
              { title: "Prototyping", desc: "Creating high-fidelity wireframes to visualize the user experience." },
              { title: "Engineering", desc: "Agile development with continuous testing and quality assurance." },
              { title: "Sustainment", desc: "Smooth deployment followed by white-glove ongoing support." }
            ].map((step, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-6xl font-black text-slate-100 mb-2 truncate group-hover:text-violet-50 transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;