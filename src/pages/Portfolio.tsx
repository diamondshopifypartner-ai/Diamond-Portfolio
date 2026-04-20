import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, CheckCircle2, ChevronRight, Search } from 'lucide-react';
import { portfolio } from '../constants';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI & Automation', 'E-Com/Ads', 'Web/Video'];

  const filteredItems = useMemo(() => {
    return filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-[4px] text-brand-blue mb-4 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter">Case Studies</h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[2px] transition-all border ${filter === cat ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-32">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start"
              >
                {/* Visuals */}
                <div className="relative group">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden editorial-border relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  
                  {/* Results Badge */}
                  <div className="absolute -bottom-10 -right-10 editorial-glass p-8 rounded-2xl border-brand-blue/50 shadow-2xl z-20 hidden md:block">
                    <span className="text-[10px] uppercase font-bold tracking-[2px] text-brand-blue mb-2 block">Key Result</span>
                    <h4 className="text-3xl font-extrabold tracking-tighter">{project.results}</h4>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded border border-white/10">{tool}</span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-display font-extrabold mb-12 tracking-tight">{project.title}</h2>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-brand-blue text-[10px] uppercase font-black tracking-[4px] mb-4">01. The Problem</h4>
                      <p className="text-white/60 font-light leading-relaxed">{project.problem || 'Coming soon...'}</p>
                    </div>
                    <div>
                      <h4 className="text-brand-blue text-[10px] uppercase font-black tracking-[4px] mb-4">02. The Solution</h4>
                      <p className="text-white/60 font-light leading-relaxed">{project.solution || 'Coming soon...'}</p>
                    </div>
                    <div>
                      <h4 className="text-brand-blue text-[10px] uppercase font-black tracking-[4px] mb-4">03. The Result</h4>
                      <p className="text-white/60 font-light leading-relaxed">{project.result || 'Coming soon...'}</p>
                    </div>
                  </div>

                  <div className="mt-12 flex items-center gap-8">
                    <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[2px] hover:text-brand-blue transition-colors">
                      Live Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
