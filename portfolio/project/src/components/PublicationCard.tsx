import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Publication } from '../types';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-card p-6 animate-reveal cursor-pointer transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
        {publication.link && (
          <a 
            href={publication.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      
      <div className="text-sm text-primary-300 mb-4">
        {publication.journal} • {publication.date}
      </div>
      
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-[60px] opacity-70'
        }`}
      >
        <p className="text-gray-300">{publication.abstract}</p>
      </div>
      
      <div className="mt-3 text-sm text-primary-400">
        {isExpanded ? 'Show less' : 'Read more'}
      </div>
    </div>
  );
};

export default PublicationCard;