import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { experienceTimeline } from '../data/portfolioData';

const ExperienceSection: React.FC = () => {
  return (
    <SectionContainer id="experience">
      <SectionTitle 
        title="Professional Experience" 
        subtitle="My journey in the world of data science and AI"
      />
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experienceTimeline.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;