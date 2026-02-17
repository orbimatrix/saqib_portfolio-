import React from 'react';
import { Domain, DomainTheme } from '../types';
import { SKILLS, EXPERIENCES } from '../constants';
import SectionHeader from './SectionHeader';
import SkillItem from './SkillItem';

interface HomeContentProps {
    theme: DomainTheme;
}

const HomeContent: React.FC<HomeContentProps> = ({ theme }) => {
    return (
        <>
            <section id="skills-summary" className="scroll-mt-32">
                <SectionHeader
                    title="Strategic Focus"
                    subtitle="High-level engineering capabilities driving innovation in tech."
                    theme={theme}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-200">
                    {SKILLS[Domain.HOME]?.map((skill, index) => (
                        <SkillItem key={index} skill={skill} theme={theme} />
                    ))}
                </div>
            </section>

            <section id="experience" className="scroll-mt-32">
                <SectionHeader
                    title="Professional Journey"
                    subtitle="A chronological path through leadership and technical excellence."
                    theme={theme}
                />
                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-slate-200 py-6 group transition-all">
                            <div className={`absolute left-[-11px] top-10 h-5 w-5 rounded-full bg-gradient-to-r ${theme.primary} shadow-lg transition-transform duration-300 group-hover:scale-125`}></div>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                                <div>
                                    <h3 className="text-2xl font-black tracking-tight text-slate-800">{exp.role}</h3>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="font-bold text-slate-600">{exp.company}</span>
                                    </div>
                                </div>
                                <div className="text-sm font-bold font-mono px-4 py-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                                    {exp.period}
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {exp.description.map((bullet, i) => (
                                    <li key={i} className="flex gap-4 text-slate-600 leading-relaxed">
                                        <span className="mt-2.5 h-2 w-2 rounded-full bg-slate-400 shrink-0"></span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomeContent;
