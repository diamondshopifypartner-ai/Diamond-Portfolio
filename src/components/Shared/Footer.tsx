import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10 relative bg-editorial-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm">
           <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-brand-blue rotate-45 border-2 border-white" />
            <span className="font-display text-2xl font-extrabold tracking-tighter uppercase">DIAMOND TEAM</span>
          </div>
          <p className="text-white/40 font-light mb-8 text-sm leading-relaxed">
            Leading the charge in AI-driven e-commerce and complete omni-channel dominance. Your partner for growth on autopilot.
          </p>
          <div className="flex gap-4">
             {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="p-3 editorial-glass rounded hover:bg-brand-blue/20 hover:text-brand-blue transition-all">
                  <ExternalLink className="w-4 h-4" />
                </a>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="font-extrabold uppercase tracking-[1px] text-[10px] mb-6 text-brand-blue">Company</h4>
            <div className="space-y-4 text-[11px] text-white/30 uppercase tracking-widest">
              <Link to="/about" className="block hover:text-white transition-colors">Our Story</Link>
              <Link to="/portfolio" className="block hover:text-white transition-colors">Portfolio</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Services</Link>
              <Link to="/blog" className="block hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-extrabold uppercase tracking-[1px] text-[10px] mb-6 text-brand-blue">Support</h4>
            <div className="space-y-4 text-[11px] text-white/30 uppercase tracking-widest">
               <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
               <Link to="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
               <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
            <motion.a
                animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 10px rgba(0,112,255,0.2)', '0 0 30px rgba(157,0,255,0.4)', '0 0 10px rgba(0,112,255,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                href="https://fiverr.com"
                target="_blank"
                className="px-10 py-5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-[4px] font-black text-xs uppercase tracking-[2px] hover:scale-110 transition-all flex items-center gap-3 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Hire Us on Fiverr</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            </motion.a>
            <p className="mt-4 text-[10px] text-white/20 uppercase font-extrabold tracking-[2px]">Available 24/7 for Enterprise Orders</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-white/20 uppercase font-extrabold tracking-widest">© 2026 Diamond Team Agency. All Rights Reserved.</p>
        <p className="text-[10px] text-white/20 uppercase font-extrabold tracking-widest">Designed by Diamond Development.</p>
      </div>
    </footer>
  );
};

export default Footer;
