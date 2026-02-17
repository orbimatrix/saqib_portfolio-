import React, { useState, useEffect, useMemo } from 'react';
import { Domain, Skill } from './types';
import { THEMES, PROJECTS, SKILLS } from './constants';
import Navbar from './components/Navbar';
import BackgroundGrid from './components/BackgroundGrid';
import HeroSection from './components/HeroSection';
import HomeContent from './components/HomeContent';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import ProjectsSection from './components/ProjectsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

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

  // Group skills for Skills Page
  const groupedSkills = useMemo<Record<string, Skill[]>>(() => {
    if (activeDomain !== Domain.SKILLS_PAGE) return {};
    const skills = SKILLS[Domain.SKILLS_PAGE] || [];
    const groups: Record<string, Skill[]> = {};
    skills.forEach(skill => {
      const category = skill.category || 'Other';
      if (!groups[category]) groups[category] = [];
      groups[category].push(skill);
    });
    return groups;
  }, [activeDomain]);

  return (
    <div className={`min-h-screen transition-all duration-700 ${theme.bg} ${theme.text} relative`}>
      <BackgroundGrid activeDomain={activeDomain} />
      
      <Navbar 
        activeDomain={activeDomain} 
        setActiveDomain={setActiveDomain} 
        theme={theme} 
      />

      <HeroSection 
        activeDomain={activeDomain} 
        setActiveDomain={setActiveDomain} 
        theme={theme} 
        scrollY={scrollY} 
      />

      <main className="px-6 md:px-12 py-20 max-w-7xl mx-auto space-y-32 relative z-10">
        
        {activeDomain === Domain.HOME && <HomeContent theme={theme} />}

        {activeDomain !== Domain.HOME && activeDomain !== Domain.CONTACT && activeDomain !== Domain.SKILLS_PAGE && (
          <ProjectsSection 
            activeDomain={activeDomain}
            theme={theme}
            filteredProjects={filteredProjects}
            availableTags={availableTags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        )}

        {activeDomain === Domain.SKILLS_PAGE && (
          <SkillsPage theme={theme} groupedSkills={groupedSkills} />
        )}

        {activeDomain === Domain.CONTACT && <ContactPage />}

        <CallToAction 
          activeDomain={activeDomain} 
          setActiveDomain={setActiveDomain} 
          theme={theme} 
        />
      </main>

      <Footer theme={theme} setActiveDomain={setActiveDomain} />
    </div>
  );
};

export default App;
