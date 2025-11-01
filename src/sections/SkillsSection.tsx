import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/portfolioData';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks & Libraries' },
    { id: 'tools', name: 'Tools' },
    { id: 'other', name: 'Other' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <SectionContainer id="skills">
      <SectionTitle 
        title="Technical Skills" 
        subtitle="Technologies and tools I use to bring projects to life"
      />
      
      <div className="mb-10 flex flex-wrap justify-center gap-2 animate-reveal">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'glass-card hover:bg-opacity-20'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;