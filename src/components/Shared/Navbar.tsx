import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-[60px] w-full z-50 transition-all duration-300 ${scrolled ? 'bg-editorial-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand-blue rotate-45 border-2 border-white shadow-[0_0_15px_rgba(0,112,255,0.5)]" />
          <span className="font-display text-xl font-extrabold tracking-tighter">DIAMOND TEAM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => `text-[12px] font-bold transition-colors uppercase tracking-[1px] ${isActive ? 'text-brand-blue' : 'text-white/60 hover:text-brand-blue'}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="editorial-glass px-5 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-[1px] hover:bg-brand-blue/20 transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-editorial-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={({ isActive }) => `text-xl font-display font-medium ${isActive ? 'text-brand-blue' : 'text-white/80'}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
