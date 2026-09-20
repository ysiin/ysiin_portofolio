import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="projects" className="pt-6 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-display font-semibold tracking-tight text-white">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              className={`group block bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-10 hover:border-white/20 hover:bg-[#0f0f0f] transition-all duration-300 ${
                index === 2 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden rounded-[24px] mb-8 ${index === 2 ? 'aspect-[21/9]' : 'aspect-[4/3]'} bg-neutral-900 w-full border border-white/5`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Tech Stack floating pills (Framer style) */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md text-white rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Details Container */}
              <div className="flex justify-between items-center px-4 pb-2">
                <div className="pr-4">
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                {/* Arrow Button */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

