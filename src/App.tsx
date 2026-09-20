import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white relative selection:bg-white/20">
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
