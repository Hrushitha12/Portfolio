import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const Icon = (LucideIcons as any)[skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)];

  return (
    <div className="glass-card p-4 flex flex-col items-center animate-reveal">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-800/50 mb-3">
        {Icon ? <Icon size={24} className="text-primary-300" /> : null}
      </div>
      <h3 className="text-lg font-medium">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;