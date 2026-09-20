import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Briefcase, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 80, damping: 20 }
    }
  };

  return (
    <section id="about" className="pt-32 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Main Hero Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 relative"
        >
          {/* Horizontal Spotlight Glow Effect Behind Name */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[1000px] h-[150px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
          
          <motion.h1 
            variants={itemVariants}
            className="relative font-display text-[clamp(50px,8vw,120px)] font-bold tracking-tighter mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-neutral-500 pb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            {portfolioData.personal.name.toUpperCase()}
          </motion.h1>

          <motion.div variants={itemVariants} className="max-w-2xl mt-2 mb-8">
            <h2 className="text-2xl md:text-4xl font-medium text-neutral-300 mb-4 tracking-tight">
              {portfolioData.personal.role}
            </h2>
            <div className="flex gap-4 mt-6">
              <a href={`mailto:${portfolioData.personal.email}`} className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                Get in touch <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bento Grid Layout (RugeFX Style) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          
          {/* About Me Card */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:opacity-70" />
            <h3 className="text-3xl font-display font-semibold text-white mb-6 tracking-tight">About me</h3>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light relative z-10">
              {portfolioData.personal.bio}
            </p>
          </motion.div>

          {/* Social / Links Card */}
          <motion.div 
            variants={itemVariants} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col gap-4"
          >
            <h3 className="text-xl font-medium text-white mb-4">Connect</h3>
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 hover:border-white/20 group">
              <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
                <Code size={20} />
                <span className="font-medium">GitHub</span>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 hover:border-white/20 group">
              <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
                <Briefcase size={20} />
                <span className="font-medium">LinkedIn</span>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 hover:border-white/20 group">
              <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
                <Mail size={20} />
                <span className="font-medium">Email</span>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
            </a>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <div className="md:w-1/3 shrink-0">
              <h3 className="text-3xl font-display font-semibold text-white tracking-tight mb-2">Education</h3>
              <p className="text-neutral-500">My academic background</p>
            </div>
            <div className="w-full flex flex-col gap-8">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="flex flex-col border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium text-white tracking-tight">{edu.institution}</h4>
                    <span className="text-xs font-mono text-neutral-500 bg-white/5 px-3 py-1 rounded-full">{edu.duration}</span>
                  </div>
                  <p className="text-neutral-300 font-medium mb-2">{edu.degree}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

