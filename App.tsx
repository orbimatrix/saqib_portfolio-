
import React, { useState, useEffect, useMemo } from 'react';
import { Domain } from './types';
import { THEMES, PROJECTS, SKILLS, EXPERIENCES } from './constants';
import ProjectCard from './components/ProjectCard';
import SectionHeader from './components/SectionHeader';
import DataViz from './components/DataViz';
import SkillItem from './components/SkillItem';

const App: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<Domain>(Domain.HOME);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const theme = THEMES[activeDomain];

  // Parallax scroll handler
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset filter when switching domains
  useEffect(() => {
    setSelectedTag(null);
  }, [activeDomain]);

  // Extract unique tags for the current domain
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS[activeDomain]?.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [activeDomain]);

  // Filtered projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return PROJECTS[activeDomain] || [];
    return (PROJECTS[activeDomain] || []).filter(project => 
      project.tags.includes(selectedTag)
    );
  }, [activeDomain, selectedTag]);

  // Domain descriptions for headers
  const domainMeta = {
    [Domain.HOME]: {
      title: "Architecting the Intelligence Layer",
      subtitle: "Bridging the gap between intelligent systems and decentralized protocols.",
      description: "Saqib is a multi-disciplinary technical leader specializing in high-performance AI architectures, blockchain integration, and large-scale data systems. Explore my domains below to see deep-dives into specific technologies."
    },
    [Domain.AI]: {
      title: "Artificial Intelligence",
      subtitle: "Pushing the boundaries of generative models and edge inference.",
      description: "My AI research focuses on efficient deep learning architectures. I specialize in optimizing transformer-based models for real-world deployment on constrained hardware."
    },
    [Domain.HUGGING_FACE]: {
      title: "Hugging Face Ecosystem",
      subtitle: "Open-source contributions and community-driven ML innovation.",
      description: "As an active contributor to the HF Hub, I build accessible machine learning tools, share curated datasets, and maintain several high-impact Gradio demos for the community."
    },
    [Domain.DATA_SCIENCE]: {
      title: "Data Science & Research",
      subtitle: "Deriving actionable insights from complex multidimensional datasets.",
      description: "My research methodology combines rigorous statistical analysis with predictive modeling to solve large-scale environmental and industrial challenges."
    },
    [Domain.WEB3]: {
      title: "Web3 & Decentralized Tech",
      subtitle: "Building the foundations of the trustless internet.",
      description: "I develop secure smart contracts and decentralized applications that empower users. My focus is on scalability, interoperability, and user-owned digital identity."
    }
  };

  const domainTabs = [Domain.AI, Domain.HUGGING_FACE, Domain.DATA_SCIENCE, Domain.WEB3];

  return (
    <div className={`min-h-screen transition-all duration-700 ${theme.bg} ${theme.text} relative`}>
      {/* Box Grid Background for HOME Domain */}
      {activeDomain === Domain.HOME && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          ></div>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white border-opacity-10 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <button 
          onClick={() => setActiveDomain(Domain.HOME)}
          className="flex items-center gap-3 group"
        >
          <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-110`}>
            S
          </div>
          <span className="text-xl font-black tracking-tight uppercase">SAQIB.</span>
        </button>
        
        <div className="flex bg-slate-200/20 rounded-full p-1.5 backdrop-blur-lg overflow-x-auto max-w-full relative z-10 shadow-inner">
          {domainTabs.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`px-4 py-2 rounded-full text-[10px] md:text-xs lg:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                activeDomain === domain 
                ? `bg-white shadow-md ${theme.accent} scale-105` 
                : 'hover:bg-white/10 opacity-70'
              }`}
            >
              {domain.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className={`px-5 py-2 rounded-full bg-gradient-to-r ${theme.primary} text-white text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all`}>
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
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
                <a 
                  href="#experience" 
                  className={`px-10 py-5 rounded-2xl bg-gradient-to-r ${theme.primary} text-white font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center`}
                >
                  View Career Path
                </a>
                <a 
                  href="#skills-summary" 
                  className="px-10 py-5 rounded-2xl border border-slate-900 border-opacity-100 font-bold hover:bg-slate-900 hover:text-white transition-all text-lg flex items-center justify-center bg-white/50 backdrop-blur-sm"
                >
                  Core Expertise
                </a>
              </>
            ) : (
              <>
                <a 
                  href="#projects" 
                  className={`px-10 py-5 rounded-2xl bg-gradient-to-r ${theme.primary} text-white font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center`}
                >
                  Case Studies
                </a>
                <a 
                  href="#skills" 
                  className="px-10 py-5 rounded-2xl border border-current border-opacity-20 font-bold hover:bg-current hover:text-white hover:bg-opacity-5 transition-all text-lg flex items-center justify-center"
                >
                  Skill Proficiency
                </a>
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
              src={
                activeDomain === Domain.HOME ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" :
                activeDomain === Domain.AI ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" :
                activeDomain === Domain.HUGGING_FACE ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" :
                activeDomain === Domain.DATA_SCIENCE ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" :
                "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
              } 
              alt="Context Visual"
              className="w-full aspect-[21/9] object-cover transition-opacity duration-1000"
            />
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="px-6 md:px-12 py-20 max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* LANDING PAGE ONLY CONTENT */}
        {activeDomain === Domain.HOME && (
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
                          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                          <span className="text-sm text-slate-500 font-mono">{exp.location}</span>
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
        )}

        {/* DOMAIN PAGES: PROJECTS AND SKILLS ONLY */}
        {activeDomain !== Domain.HOME && (
          <>
            <section id="skills" className="scroll-mt-32">
              <SectionHeader 
                title={`${domainMeta[activeDomain].title} Specialization`} 
                subtitle="Deep-dive into specialized toolsets and domain knowledge."
                theme={theme}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {SKILLS[activeDomain]?.map((skill, index) => (
                  <SkillItem key={index} skill={skill} theme={theme} />
                ))}
              </div>
            </section>

            <section id="projects" className="scroll-mt-32">
              <SectionHeader 
                title="Vertical Impact" 
                subtitle="Featured case studies and deployments in this domain."
                theme={theme}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} theme={theme} />
                ))}
                {filteredProjects.length === 0 && (
                  <div className="col-span-full py-20 text-center opacity-40 italic">
                    Case studies for this domain coming soon.
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {/* Call to Action - Consistent across all */}
        <section id="contact" className={`scroll-mt-32 rounded-[3.5rem] bg-gradient-to-br ${theme.primary} p-12 md:p-24 text-white relative overflow-hidden shadow-3xl`}>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-black opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Let's build the future.</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              I'm always looking for ambitious projects that push the boundaries of what's possible with code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-6 bg-white text-slate-900 font-black rounded-2xl shadow-2xl hover:scale-105 transition-transform text-lg">
                Get in Touch
              </button>
              <button className="px-12 py-6 bg-black/30 backdrop-blur-xl border border-white/20 text-white font-black rounded-2xl hover:bg-black/50 transition-all text-lg">
                View Resume
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-current border-opacity-10 py-20 px-6 md:px-12 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white font-bold text-lg`}>
                S
              </div>
              <span className="text-xl font-black tracking-tight uppercase">SAQIB.</span>
            </div>
            <p className="text-slate-500 max-w-sm text-center md:text-left leading-relaxed">
              Leading the innovation at the intersection of AI, Web3, and Data Science.
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
            {/* GitHub */}
            <a href="#" className={`p-2 rounded-xl transition-all hover:bg-current hover:bg-opacity-10 ${theme.accent}`} aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className={`p-2 rounded-xl transition-all hover:bg-current hover:bg-opacity-10 ${theme.accent}`} aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* X */}
            <a href="#" className={`p-2 rounded-xl transition-all hover:bg-current hover:bg-opacity-10 ${theme.accent}`} aria-label="X">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Hugging Face */}
            <a href="#" className={`p-2 rounded-xl transition-all hover:bg-current hover:bg-opacity-10 ${theme.accent}`} aria-label="Hugging Face">
               <span className="text-2xl leading-none grayscale hover:grayscale-0 transition-all">🤗</span>
            </a>
          </div>
          
          <p className="text-sm font-mono opacity-30">
            © {new Date().getFullYear()} SAQIB.PRO
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
