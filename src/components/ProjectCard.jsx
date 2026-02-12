import React from 'react';
import { FaExternalLinkAlt, FaCheck, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row min-h-[300px] md:min-h-[400px]">
      {/* Left side - Image with Overlay */}
      <div className="h-48 md:h-auto md:w-1/2 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent mix-blend-multiply transition-opacity group-hover:opacity-80"></div>

        {/* Project Type Badge */}
        <div className="absolute top-6 md:top-8 left-6 md:left-8">
          <span className="px-3 md:px-4 py-1.5 md:py-2 glass-panel !rounded-full !bg-white/10 !border-white/20 text-white font-bold text-[10px] md:text-xs tracking-widest uppercase backdrop-blur-md">
            Featured Case Study
          </span>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="p-6 md:p-12 md:w-1/2 flex flex-col bg-white">
        <div className="space-y-4 md:space-y-6 flex-1">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 group-hover:text-violet-600 transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className="text-[10px] font-black tracking-widest uppercase text-slate-400">
                  {tech} {idx < project.technologies.length - 1 && "•"}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-slate-50">
            {project.features?.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                <FaCheck className="text-emerald-500 text-xs" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-50 flex items-center justify-between">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-900 font-black hover:text-violet-600 transition-colors decoration-violet-600/30 underline underline-offset-8"
            >
              Explore Project
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
          <div className="hidden sm:flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">RC</div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-violet-600 flex items-center justify-center text-[10px] font-bold text-white">RV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    results: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string
  }).isRequired
};

export default ProjectCard;
