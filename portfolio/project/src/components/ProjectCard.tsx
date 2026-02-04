import React, { useState } from 'react';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="animate-reveal relative overflow-hidden rounded-xl group transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '400px' }}
    >
      <div 
        className="absolute inset-0 bg-center bg-cover transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-[0.2]"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
      
      <div className="relative z-10 h-full flex flex-col p-6 justify-end">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs py-1 px-2 rounded-full bg-primary-800/60 text-primary-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs py-1 px-2 rounded-full bg-primary-800/60 text-primary-200">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
          
          <div className="flex space-x-3">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-full hover:text-primary-400 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-full hover:text-primary-400 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            
            {project.paperLink && (
              <a 
                href={project.paperLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-full hover:text-primary-400 transition-colors"
              >
                <FileText size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;