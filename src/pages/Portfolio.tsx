import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, CheckCircle2, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolio } from '../constants';

const FloatingGlassVisual = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          x: Math.random() * 100 + '%', 
          y: Math.random() * 100 + '%',
          rotate: Math.random() * 360
        }}
        animate={{
          x: [null, Math.random() * 80 + '%', Math.random() * 100 + '%'],
          y: [null, Math.random() * 80 + '%', Math.random() * 100 + '%'],
          rotate: [null, Math.random() * 360 + 'deg'],
        }}
        transition={{
          duration: 30 + i * 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-32 h-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl bg-noise"
        style={{
          boxShadow: 'inset 0 0 40px rgba(255,255,255,0.1)'
        }}
      />
    ))}
    <div className="absolute inset-0 bg-editorial-black/40 backdrop-blur-[2px]" />
  </div>
);

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI & Automation', 'E-Com/Ads', 'Web/Video'];

  const filterItems = useMemo(() => {
    return filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);
  }, [filter]);

  // Masonry logic: Split items into two columns
  const leftColumn = filterItems.filter((_, i) => i % 2 === 0);
  const rightColumn = filterItems.filter((_, i) => i % 2 !== 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-editorial-black py-20 px-6 relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
          alt="Workspace" 
          className="w-full h-full object-cover opacity-30 filter grayscale brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-editorial-black/40" />
      </div>
      <FloatingGlassVisual />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32 relative z-10">
          <div>
            <span className="text-[11px] uppercase font-black tracking-[4px] text-brand-blue mb-4 block underline decoration-brand-blue/30 underline-offset-8">Archive // v2.0</span>
            <h1 className="text-6xl md:text-[120px] font-display font-extrabold tracking-[-0.05em] text-white leading-[0.8] uppercase">
              Proven<br /><span className="text-silver">Results.</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[2px] transition-all border ${filter === cat ? 'bg-brand-blue border-brand-blue text-white shadow-[0_0_20px_rgba(0,163,255,0.4)]' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          {[leftColumn, rightColumn].map((column, colIndex) => (
            <motion.div 
              key={colIndex}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              {column.map((project, i) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group relative rounded-[40px] overflow-hidden border border-white/5 bg-editorial-charcoal/50 hover:border-brand-blue/50 transition-all duration-700 shadow-2xl"
                >
                  {/* Numbered Index */}
                  <div className="absolute top-8 left-8 z-20 font-mono text-[10px] font-bold text-white/20 group-hover:text-brand-blue transition-colors">
                    INDEX_ID // {colIndex === 0 ? `0${i * 2 + 1}` : `0${i * 2 + 2}`}
                  </div>

                  {/* Featured Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* High-End Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-blue/60 group-hover:text-brand-blue transition-colors">
                          [{tag}]
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-extrabold tracking-[-0.04em] text-white mb-6 leading-none">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-white/20 tracking-[2px] mb-1 font-mono">Performance Metric</span>
                        <span className="text-brand-blue font-bold text-xl tracking-tighter">{project.results}</span>
                      </div>
                      <Link to="/contact" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all group/btn">
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-40 text-center py-20 px-6 editorial-glass border border-brand-blue/20 rounded-3xl relative overflow-hidden max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-6 tracking-tight">Ready for a Diamond Result?</h2>
        <p className="text-white/40 mb-10 max-w-md mx-auto">Let's build your next success story together. Our audit team is ready for your project.</p>
        <button className="px-10 py-4 bg-brand-blue text-white rounded font-bold text-xs uppercase tracking-[2px] hover:shadow-[0_0_30px_rgba(0,112,255,0.4)] transition-all">
          Book Your Audit
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
