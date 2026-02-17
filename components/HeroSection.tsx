import React, { useMemo } from 'react';
import { Domain, DomainTheme } from '../types';

interface HeroSectionProps {
    activeDomain: Domain;
    setActiveDomain: (domain: Domain) => void;
    theme: DomainTheme;
    scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeDomain, setActiveDomain, theme, scrollY }) => {
    const domainMeta = useMemo(() => ({
        [Domain.HOME]: {
            title: "Architecting the Intelligence Layer",
            description: "AI Architect & Data Scientist with 3+ years of experience designing scalable Generative AI systems, LLM Agents, and Web3 protocols. Passionate about bridging the gap between advanced NLP research and production-grade software solutions."
        },
        [Domain.AI]: {
            title: "Artificial Intelligence",
            description: "Specializing in optimizing transformer-based models for real-world deployment on constrained hardware."
        },
        [Domain.HUGGING_FACE]: {
            title: "Hugging Face Ecosystem",
            description: "Active contributor to the HF Hub, building accessible machine learning tools and high-impact Gradio demos."
        },
        [Domain.DATA_SCIENCE]: {
            title: "Data Science & Research",
            description: "Combining rigorous statistical analysis with predictive modeling to solve large-scale environmental challenges."
        },
        [Domain.WEB3]: {
            title: "Web3 & Decentralized Tech",
            description: "Developing secure smart contracts and decentralized applications that empower users."
        },
        [Domain.VIDEO_EDITOR]: {
            title: "Professional Video Production",
            description: "Crafting visual stories for leading YouTube channels. Expert in cinematic editing, post-production, and audience retention."
        },
        [Domain.ALL_PROJECTS]: {
            title: "The Project Vault",
            description: "A comprehensive showcase of 20+ projects across Web3, Generative AI, Gaming, and Research."
        },
        [Domain.CONTACT]: {
            title: "Get in Touch",
            description: "Let's discuss how we can build the future together. Whether it's a project inquiry or a technical consultation, I'm here to help."
        },
        [Domain.SKILLS_PAGE]: {
            title: "Technical Arsenal",
            description: "Level 99 Engineering. A breakdown of my combat-ready tech stack and proficiencies."
        }
    }), []);

    const getHeroImage = () => {
        switch (activeDomain) {
            case Domain.HOME: return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";
            case Domain.AI: return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200";
            case Domain.HUGGING_FACE: return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200";
            case Domain.DATA_SCIENCE: return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200";
            case Domain.WEB3: return "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200";
            case Domain.VIDEO_EDITOR: return "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200";
            default: return "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200";
        }
    };

    return (
        <header className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden z-10">
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current border-opacity-20 text-xs font-mono font-bold mb-8 ${theme.accent}`}>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                    </span>
                    {activeDomain === Domain.HOME ? 'SYSTEMS ARCHITECT & VISIONARY' : domainMeta[activeDomain].title}
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter max-w-5xl">
                    {activeDomain === Domain.HOME ? (
                        <>Defining the <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.primary}`}>Intelligent Stack.</span></>
                    ) : (
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.primary}`}>{domainMeta[activeDomain].title}</span>
                    )}
                </h1>

                <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-3xl leading-relaxed">
                    {domainMeta[activeDomain].description}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {activeDomain === Domain.HOME ? (
                        <>
                            <button
                                onClick={() => setActiveDomain(Domain.ALL_PROJECTS)}
                                className={`px-10 py-5 rounded-2xl bg-gradient-to-r ${theme.primary} text-white font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 group`}
                            >
                                View All Projects
                                <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <a
                                href="#experience"
                                className="px-10 py-5 rounded-2xl border border-slate-900 border-opacity-100 font-bold hover:bg-slate-900 hover:text-white transition-all text-lg flex items-center justify-center bg-white/50 backdrop-blur-sm"
                            >
                                Professional Journey
                            </a>
                        </>
                    ) : (
                        <>
                            {activeDomain !== Domain.SKILLS_PAGE && (
                                <a
                                    href="#projects"
                                    className={`px-10 py-5 rounded-2xl bg-gradient-to-r ${theme.primary} text-white font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center`}
                                >
                                    Contact Me
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Parallax Visual Asset */}
            <div className="mt-20 flex justify-center relative">
                <div className={`absolute -inset-20 bg-gradient-to-r ${theme.primary} opacity-10 blur-3xl rounded-full`}></div>
                <div
                    className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2.5rem] border-8 border-white/10 shadow-3xl transition-all duration-700 ease-out"
                    style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                    <img
                        src={getHeroImage()}
                        alt="Context Visual"
                        className="w-full aspect-[21/9] object-cover transition-opacity duration-1000"
                    />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
