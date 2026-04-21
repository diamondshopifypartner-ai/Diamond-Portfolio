import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Target, Diamond, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 px-6 bg-editorial-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - White Section */}
        <div className="text-center mb-24 bg-white/95 backdrop-blur-xl p-16 rounded-[40px] shadow-2xl border border-white/20 text-editorial-black relative overflow-hidden bg-cyber-grid-light group">
          <div className="absolute inset-0 z-0 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
               alt="Global Office" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase font-black tracking-[4px] text-brand-blue mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-none"
          >
            From Sole Expert <br /> to <span className="text-brand-blue">Diamond Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-editorial-black/60 max-w-2xl mx-auto text-xl font-light leading-relaxed"
          >
            We realized that scaling a brand in 2026 requires more than just one expert. It requires a synchronized team of specialists across Shopify, Google Ads, and AI systems.
          </motion.p>
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Diamond className="w-64 h-64 text-brand-blue" />
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-10 leading-[1.2] tracking-tight">
              "Our mission is to translate complex code into predictable revenue through the Diamond Standard."
            </h2>
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <Cpu className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Automating the Future</h4>
                  <p className="text-sm text-white/40 font-mono font-light leading-relaxed">We leverage cutting-edge AI to eliminate manual bottlenecks in your workflow.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded bg-brand-purple/10 flex items-center justify-center shrink-0 border border-brand-purple/20">
                  <Target className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Precision Growth</h4>
                  <p className="text-sm text-white/40 font-mono font-light leading-relaxed">Data-driven strategies that optimize for ROAS, not just vanity metrics.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square editorial-glass border border-brand-blue/30 rounded-3xl relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
              alt="Team collaboration" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-editorial-black via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* The Team */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4 tracking-tight">The Expertise Core</h2>
            <p className="text-white/40">The specialists behind the diamond standard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: 'Shopify Masters', desc: 'Custom Liquid devs turning design mocks into high-performance storefronts.', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000' },
              { name: 'Ads Architects', desc: 'Expert media buyers scaling accounts from $10k to $1M+ with precision.', image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1000' },
              { name: 'AI Engineers', desc: 'Automation wizards building GHL ecosystems and autonomous agents.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="editorial-glass border border-white/5 rounded-xl text-center group overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-editorial-black/20 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3">{member.name}</h4>
                  <p className="text-[13px] text-white/40 leading-relaxed font-light">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white/95 text-editorial-black border border-white/20 p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden shadow-2xl bg-cyber-grid-light group">
          <div className="absolute inset-0 z-0 opacity-[0.03] grayscale group-hover:grayscale-0 transition-all duration-1000">
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
               alt="Schematic" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="relative z-10">
            <span className="text-[40px] mb-8 block drop-shadow-xl">💎</span>
            <h2 className="text-4xl font-display font-extrabold mb-8 tracking-tighter">The Diamond Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-6 bg-black/[0.03] rounded-2xl border border-black/5"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-blue mb-4" />
                <h4 className="font-bold mb-2 uppercase text-[10px] tracking-[2px]">Flawless Execution</h4>
                <p className="text-sm text-editorial-black/60 font-light">Every line of code and every ad campaign is audited for perfection before going live.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-6 bg-black/[0.03] rounded-2xl border border-black/5"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-blue mb-4" />
                <h4 className="font-bold mb-2 uppercase text-[10px] tracking-[2px]">Multi-Faceted Growth</h4>
                <p className="text-sm text-editorial-black/60 font-light">We look at your brand from every angle—traffic, conversion, the backend, and retention.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-6 bg-black/[0.03] rounded-2xl border border-black/5"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-blue mb-4" />
                <h4 className="font-bold mb-2 uppercase text-[10px] tracking-[2px]">Everlasting Systems</h4>
                <p className="text-sm text-editorial-black/60 font-light">We don't build temporary fixes. We build automated ecosystems that scale with you.</p>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Diamond className="w-64 h-64 text-brand-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
