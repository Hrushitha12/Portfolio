import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import { leadershipActivities } from '../data/portfolioData';
import { Users, Trophy, Award } from 'lucide-react';

const LeadershipSection: React.FC = () => {
  return (
    <SectionContainer id="leadership">
      <SectionTitle 
        title="Leadership & Activities" 
        subtitle="Organizations and initiatives I've been involved with"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipActivities.map(activity => (
          <div key={activity.id} className="glass-card p-6 animate-reveal">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-primary-800/50 flex items-center justify-center">
                  <Users size={24} className="text-primary-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <div className="text-sm text-primary-300 mb-1">
                  {activity.role} • {activity.organization}
                </div>
                <p className="text-gray-300 mb-4">{activity.description}</p>
              </div>
            </div>
            
            <div className="ml-16">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Achievements:</h4>
              <ul className="space-y-2">
                {activity.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <Award size={16} className="text-primary-400 mr-2" />
                    <span className="text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default LeadershipSection;