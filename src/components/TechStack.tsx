import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const TechStack: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <section id="tech-stack" className="pt-6 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-display font-semibold tracking-tight text-white">
            Tech Stack & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col h-full hover:border-white/20 transition-colors"
            >
              <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="px-4 py-2 bg-white/[0.03] hover:bg-white/[0.1] border border-white/10 hover:border-white/30 rounded-2xl text-sm font-medium text-neutral-400 hover:text-white transition-all duration-300 backdrop-blur-md cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
