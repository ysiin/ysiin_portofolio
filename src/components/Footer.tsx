import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 bg-neutral-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-16">
          <div className="mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
              Let's Work<br/>Together.
            </h2>
            <a href={`mailto:${portfolioData.personal.email}`} className="inline-flex items-center space-x-2 text-lg text-neutral-400 hover:text-white transition-colors group">
              <span>{portfolioData.personal.email}</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div>
          
          <div className="flex flex-col space-y-4 text-sm font-medium">

            <a href={portfolioData.personal.linkedin} className="text-neutral-500 hover:text-white transition-colors flex items-center justify-between group">
              <span>LinkedIn</span>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity ml-4" size={16} />
            </a>
            <a href={portfolioData.personal.github} className="text-neutral-500 hover:text-white transition-colors flex items-center justify-between group">
              <span>GitHub</span>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity ml-4" size={16} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-mono">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}.</p>
          <p className="mt-4 md:mt-0">Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

