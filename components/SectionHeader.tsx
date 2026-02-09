
import React from 'react';
import { DomainTheme } from '../types';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  theme: DomainTheme;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, theme }) => {
  return (
    <div className="mb-12">
      <div className={`inline-block h-1 w-12 rounded bg-gradient-to-r ${theme.primary} mb-4`}></div>
      <h2 className={`text-3xl md:text-4xl font-black mb-3 tracking-tight`}>{title}</h2>
      <p className="text-lg opacity-70 max-w-2xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
