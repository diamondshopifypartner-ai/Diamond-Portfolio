import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';

const IntroBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] bg-brand-blue overflow-hidden group z-[60]">
      <motion.div 
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap h-full"
      >
        <div className="flex items-center gap-8 px-4 h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[3px] text-white">Diamond Standard Automation</span>
              <Diamond className="w-3 h-3 text-white/50 fill-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[3px] text-white">24-Hour GMC Delivery</span>
              <Diamond className="w-3 h-3 text-white/50 fill-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[3px] text-white">Predictable ROAS Growth</span>
              <Diamond className="w-3 h-3 text-white/50 fill-white/20" />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-transparent to-brand-blue opacity-50 pointer-events-none" />
    </div>
  );
};

export default IntroBanner;
