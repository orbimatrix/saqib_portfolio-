import React from 'react';
import { Domain, DomainTheme } from '../types';

interface CallToActionProps {
    activeDomain: Domain;
    setActiveDomain: (domain: Domain) => void;
    theme: DomainTheme;
}

const CallToAction: React.FC<CallToActionProps> = ({ activeDomain, setActiveDomain, theme }) => {
    return (
        <section id="contact" className={`scroll-mt-32 rounded-[3.5rem] bg-gradient-to-br ${theme.primary} p-12 md:p-24 text-white relative overflow-hidden shadow-3xl`}>
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Let's build the future.</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {activeDomain !== Domain.CONTACT && (
                        <button
                            onClick={() => setActiveDomain(Domain.CONTACT)}
                            className="px-12 py-6 bg-white text-slate-900 font-black rounded-2xl shadow-2xl hover:scale-105 transition-transform text-lg"
                        >
                            Get in Touch
                        </button>
                    )}
                    <button
                        onClick={() => setActiveDomain(Domain.ALL_PROJECTS)}
                        className="px-12 py-6 bg-black/30 backdrop-blur-xl border border-white/20 text-white font-black rounded-2xl hover:bg-black/50 transition-all text-lg"
                    >
                        View Full Vault
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
