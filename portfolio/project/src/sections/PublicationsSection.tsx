import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import PublicationCard from '../components/PublicationCard';
import { publications } from '../data/portfolioData';

const PublicationsSection: React.FC = () => {
  return (
    <SectionContainer id="publications">
      <SectionTitle 
        title="Research Publications" 
        subtitle="My contributions to academic research in AI and data science"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {publications.map(publication => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default PublicationsSection;