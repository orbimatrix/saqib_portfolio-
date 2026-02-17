import React, { useState, useEffect, useMemo } from 'react';
import { Domain } from './types';
import { THEMES, PROJECTS, SKILLS, EXPERIENCES } from './constants';
import ProjectCard from './components/ProjectCard';
import SectionHeader from './components/SectionHeader';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeDomain]);

  // Extract unique tags for current view
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS[activeDomain]?.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [activeDomain]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return PROJECTS[activeDomain] || [];
    return (PROJECTS[activeDomain] || []).filter(project =>
      project.tags.includes(selectedTag)
    );
  }, [activeDomain, selectedTag]);

  const domainMeta = {
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
    }
  };

  const domainTabs = [Domain.AI, Domain.HUGGING_FACE, Domain.DATA_SCIENCE, Domain.WEB3, Domain.VIDEO_EDITOR, Domain.CONTACT];

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
              className={`px-4 py-2 rounded-full text-[10px] md:text-xs lg:text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeDomain === domain
                  ? `bg-white shadow-md ${theme.accent} scale-105`
                  : 'hover:bg-white/10 opacity-70'
                }`}
            >
              {domain.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setActiveDomain(Domain.ALL_PROJECTS)}
            className={`px-5 py-2 rounded-full border border-current border-opacity-20 text-sm font-bold transition-all hover:bg-current hover:text-white hover:bg-opacity-10`}
          >
            Project Vault
          </button>
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
                        activeDomain === Domain.WEB3 ? "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" :
                          activeDomain === Domain.VIDEO_EDITOR ? "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200" :
                            "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200"
              }
              alt="Context Visual"
              className="w-full aspect-[21/9] object-cover transition-opacity duration-1000"
            />
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="px-6 md:px-12 py-20 max-w-7xl mx-auto space-y-32 relative z-10">

        {/* LANDING PAGE CONTENT */}
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

        {/* DOMAIN PAGES & ALL PROJECTS GALLERY */}
        {activeDomain !== Domain.HOME && activeDomain !== Domain.CONTACT && (
          <>
            {/* Tag Filters - Hidden for Domain.ALL_PROJECTS and Domain.VIDEO_EDITOR to avoid clutter */}
            {availableTags.length > 0 && activeDomain !== Domain.ALL_PROJECTS && activeDomain !== Domain.VIDEO_EDITOR && (
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${!selectedTag ? `bg-white ${theme.accent} shadow-md` : 'bg-white/10 hover:bg-white/20'}`}
                >
                  All Tech
                </button>
                {availableTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedTag === tag ? `bg-white ${theme.accent} shadow-md` : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            <section id="projects" className="scroll-mt-32">
              <SectionHeader
                title={activeDomain === Domain.ALL_PROJECTS ? "Production Showcase" : (activeDomain === Domain.VIDEO_EDITOR ? "YouTube Portfolio" : "Vertical Impact")}
                subtitle={activeDomain === Domain.ALL_PROJECTS ? "A deep dive into 20+ production-grade projects." : (activeDomain === Domain.VIDEO_EDITOR ? "Direct portfolio of channels I edit and upload for." : "Case studies and deployments in this domain.")}
                theme={theme}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} theme={theme} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* CONTACT PAGE CONTENT */}
        {activeDomain === Domain.CONTACT && (
          <section id="contact-details" className="scroll-mt-32 max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-slate-400 mb-2">Availability</h3>
                    <p className="text-3xl font-black text-slate-800">9:00 AM - 5:00 PM EST</p>
                  </div>
                   <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-slate-400 mb-2">Email</h3>
                    <a href="mailto:saqibiqbal27772@gmail.com" className="text-2xl md:text-3xl font-black text-slate-800 hover:text-blue-600 transition-colors break-words">saqibiqbal27772@gmail.com</a>
                  </div>
                </div>
                
                <div className="space-y-8">
                   <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-slate-400 mb-2">Socials</h3>
                    <div className="flex flex-col gap-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <span className="text-xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">LinkedIn</span>
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                         <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                        <span className="text-xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section id="contact" className={`scroll-mt-32 rounded-[3.5rem] bg-gradient-to-br ${theme.primary} p-12 md:p-24 text-white relative overflow-hidden shadow-3xl`}>
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Let's build the future.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-6 bg-white text-slate-900 font-black rounded-2xl shadow-2xl hover:scale-105 transition-transform text-lg">
                Get in Touch
              </button>
              <button
                onClick={() => setActiveDomain(Domain.ALL_PROJECTS)}
                className="px-12 py-6 bg-black/30 backdrop-blur-xl border border-white/20 text-white font-black rounded-2xl hover:bg-black/50 transition-all text-lg"
              >
                View Full Vault
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
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                S
              </div>
              <span className="text-xl font-black tracking-tight uppercase">SAQIB.</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-5 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                </svg>
              </a>
              <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                <span className="text-xl grayscale hover:grayscale-0 transition-all cursor-pointer">🤗</span>
              </a>
            </div>
          </div>

          <p className="text-sm font-mono opacity-30">© {new Date().getFullYear()} SAQIB.PRO</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
