import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const ProjectsSection: React.FC = () => {
  return (
    <SectionContainer id="projects">
      <SectionTitle 
        title="Featured Projects" 
        subtitle="A selection of my recent work in data science and AI"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;