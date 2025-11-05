import React from 'react';
import { FaExternalLinkAlt, FaCheck, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  if (!project) return null;
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">{project.description}</p>

        {project.features?.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <FaCheck className="text-primary-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.results?.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Results:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <FaArrowRight className="text-secondary-500 mr-2" /> {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-gradient text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Live Site
          </a>
        )}
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
