import React from 'react';
import { Domain, DomainTheme } from '../types';

interface FooterProps {
    theme: DomainTheme;
    setActiveDomain: (domain: Domain) => void;
}

const Footer: React.FC<FooterProps> = ({ theme, setActiveDomain }) => {
    return (
        <footer className="border-t border-current border-opacity-10 py-20 px-6 md:px-12 mt-20 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            S
                        </div>
                        <span className="text-xl font-black tracking-tight uppercase">SAQIB IQBAL</span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-5 mt-2">
                        <a href="https://github.com/orbimatrix" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/saqib77/" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="https://x.com/neuro_crypt" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                            </svg>
                        </a>
                        <a href="https://huggingface.co/Saqib772" target="_blank" rel="noopener noreferrer" className={`opacity-60 hover:opacity-100 transition-opacity ${theme.accent}`}>
                            <span className="text-xl grayscale hover:grayscale-0 transition-all cursor-pointer">🤗</span>
                        </a>
                    </div>
                </div>

                <div className="flex gap-8">
                    <button onClick={() => setActiveDomain(Domain.SKILLS_PAGE)} className="text-sm font-bold opacity-50 hover:opacity-100 transition-opacity">
                        Skills
                    </button>
                    <p className="text-sm font-mono opacity-30">© {new Date().getFullYear()} SAQIB.PRO</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
