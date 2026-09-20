import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

interface SectionProps {
  title: string;
  data: any[];
  fieldMap: {
    title: string;
    subtitle: string;
  };
}

const Experience: React.FC = () => {
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
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  const Section: React.FC<SectionProps> = ({ title, data, fieldMap }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-display font-semibold tracking-tight text-white">
          {title}
        </h2>
      </div>
      
      <div className="flex flex-col gap-6">
        {data.map((item) => (
          <motion.div 
            key={item.id} 
            variants={itemVariants}
            className="group flex flex-col md:flex-row p-8 md:p-10 bg-[#0a0a0a] border border-white/10 rounded-[32px] hover:border-white/20 hover:bg-[#0f0f0f] transition-all duration-300"
          >
            {/* Kolom Kiri: Durasi & Nama Tempat */}
            <div className="md:w-1/3 mb-6 md:mb-0 shrink-0 pr-8">
              <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-neutral-400 mb-4 group-hover:text-white transition-colors">
                {item.duration}
              </span>
              <h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300 ease-out">
                {item[fieldMap.title]}
              </h3>
            </div>
            
            {/* Kolom Kanan: Posisi & Deskripsi */}
            <div className="md:w-2/3 flex flex-col justify-center border-t border-white/5 pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
              <h4 className="text-lg font-medium text-neutral-300 mb-3 group-hover:text-white transition-colors">
                {item[fieldMap.subtitle]}
              </h4>
              <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-neutral-400 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="pt-6 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        
        <Section 
          title="Experience" 
          data={portfolioData.experience} 
          fieldMap={{ title: 'company', subtitle: 'role' }} 
        />
        
        <Section 
          title="Organizations" 
          data={portfolioData.organizations} 
          fieldMap={{ title: 'organization', subtitle: 'role' }} 
        />

      </div>
    </section>
  );
};

export default Experience;
