import React from 'react';
import { Domain, DomainTheme, Project } from '../types';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
    activeDomain: Domain;
    theme: DomainTheme;
    filteredProjects: Project[];
    availableTags: string[];
    selectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
    activeDomain,
    theme,
    filteredProjects,
    availableTags,
    selectedTag,
    setSelectedTag
}) => {
    return (
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
    );
};

export default ProjectsSection;
