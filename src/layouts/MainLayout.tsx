import { ReactNode } from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import IntroBanner from '../components/Shared/IntroBanner';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

import ChatBot from '../components/Shared/ChatBot';
import ScrollToTop from '../components/Shared/ScrollToTop';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-cyber-grid">
      <IntroBanner />
      <Navbar />
      <main className="pt-[140px] relative z-10"> {/* Account for IntroBanner + Navbar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ChatBot />
      <ScrollToTop />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        {/* Animated Main Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: ['-20%', '0%', '-20%'],
            y: ['-10%', '10%', '-10%']
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[80%] h-[80%] bg-brand-blue/15 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
            x: ['20%', '0%', '20%'],
            y: ['20%', '-10%', '20%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[70%] h-[70%] bg-brand-purple/12 blur-[160px] rounded-full" 
        />
        
        {/* Fixed Section Highlighters: Electric Blue and Cyber Lime */}
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 blur-[130px] rounded-full opacity-40 mix-blend-screen" />
        <div className="absolute top-[60%] right-[-10%] w-[45%] h-[45%] bg-cyber-lime/10 blur-[150px] rounded-full opacity-30 mix-blend-screen" />
        
        {/* Technical Blueprint Grid Accent */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      </div>
    </div>
  );
};

export default MainLayout;
