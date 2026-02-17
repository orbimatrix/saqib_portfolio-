import React from 'react';
import { Domain, DomainTheme } from '../types';

interface NavbarProps {
    activeDomain: Domain;
    setActiveDomain: (domain: Domain) => void;
    theme: DomainTheme;
}

const Navbar: React.FC<NavbarProps> = ({ activeDomain, setActiveDomain, theme }) => {
    const domainTabs = [Domain.AI, Domain.HUGGING_FACE, Domain.DATA_SCIENCE, Domain.WEB3, Domain.VIDEO_EDITOR, Domain.CONTACT];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white border-opacity-10 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <button
                onClick={() => setActiveDomain(Domain.HOME)}
                className="flex items-center gap-3 group"
            >
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-110`}>
                    S
                </div>
                <span className="text-xl font-black tracking-tight uppercase">SAQIB IQBAL</span>
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
    );
};

export default Navbar;
