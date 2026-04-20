import { ReactNode } from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import IntroBanner from '../components/Shared/IntroBanner';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

import ChatBot from '../components/Shared/ChatBot';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <IntroBanner />
      <Navbar />
      <main className="pt-[140px]"> {/* Account for IntroBanner + Navbar */}
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
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, -50, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-brand-purple/10 blur-[120px] rounded-full" 
        />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-brand-blue/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
};

export default MainLayout;
