import React from 'react';
import { Domain } from '../types';

interface BackgroundGridProps {
    activeDomain: Domain;
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({ activeDomain }) => {
    if (activeDomain !== Domain.HOME && activeDomain !== Domain.SKILLS_PAGE) return null;

    return (
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
    );
};

export default BackgroundGrid;
