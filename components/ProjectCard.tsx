
import React from 'react';
import { Project, DomainTheme } from '../types';

interface ProjectCardProps {
  project: Project;
  theme: DomainTheme;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  return (
    <div className={`group overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${theme.cardBg} border-opacity-10 backdrop-blur-sm`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${theme.secondary} ${theme.accent}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className={`text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4`}>
          {project.title}
        </h3>
        
        <p className={`text-sm opacity-80 mb-6 line-clamp-2`}>
          {project.description}
        </p>
        
        {project.stats && (
          <div className="flex gap-4 mb-6 border-t border-slate-100 pt-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[10px] uppercase tracking-wider opacity-60 font-bold">{stat.label}</div>
                <div className={`text-sm font-mono font-bold ${theme.accent}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        )}
        
        <a 
          href={project.link}
          className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${theme.accent} hover:opacity-70`}
        >
          View Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
