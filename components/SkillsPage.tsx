import React from 'react';
import { DomainTheme, Skill } from '../types';

interface SkillsPageProps {
    theme: DomainTheme;
    groupedSkills: Record<string, Skill[]>;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ theme, groupedSkills }) => {
    return (
        <section id="skills-gamified" className="scroll-mt-32 max-w-7xl mx-auto space-y-20">
            {Object.entries(groupedSkills).map(([category, skills]: [string, Skill[]]) => (
                <div key={category} className="space-y-8">
                    <h3 className={`text-3xl font-black uppercase tracking-wider ${theme.accent} border-b border-current border-opacity-20 pb-4`}>
                        {category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, idx) => (
                            <div key={idx} className={`${theme.cardBg} backdrop-blur-md p-6 rounded-2xl border border-slate-200 hover:border-violet-500/50 transition-all group relative overflow-hidden shadow-sm hover:shadow-md`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-bold text-lg text-slate-800">{skill.name}</span>
                                        <span className="font-mono text-xs text-violet-600 font-bold">LVL {skill.level}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 relative"
                                            style={{ width: `${skill.level}%` }}
                                        >
                                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SkillsPage;
