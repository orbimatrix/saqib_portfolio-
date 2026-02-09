
import React from 'react';
import { Skill, DomainTheme } from '../types';

interface SkillItemProps {
  skill: Skill;
  theme: DomainTheme;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, theme }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm uppercase tracking-wider">{skill.name}</span>
        <span className={`font-mono text-sm font-bold ${theme.accent}`}>{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-current bg-opacity-10 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${theme.primary} transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
