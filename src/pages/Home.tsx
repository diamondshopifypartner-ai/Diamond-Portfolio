import { motion } from 'motion/react';
import { 
  Globe, 
  ShoppingCart, 
  Target, 
  Star, 
  ShieldCheck, 
  Rocket, 
  TrendingUp, 
  Award,
  Diamond,
  SearchCheck,
  CheckCircle2,
  Plus,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState, ReactNode, FormEvent } from 'react';
import { services, stats, niches, portfolio, tiers, testimonials, faqs } from '../constants';

const HeroMarquee = ({ text, duration, reverse = false, top }: { text: string, duration: number, reverse?: boolean, top: string }) => (
  <div 
    className="absolute left-[-50%] w-[200%] flex whitespace-nowrap opacity-[0.02] select-none pointer-events-none z-0"
    style={{ top, transform: 'rotate(-15deg)' }}
  >
    <motion.div
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-16"
    >
      {[...Array(6)].map((_, i) => (
        <span key={i} className="text-[80px] font-black uppercase tracking-[20px] text-white leading-none">
          {text}
        </span>
      ))}
    </motion.div>
  </div>
);

const CurveDivider = ({ color = 'brand-blue', flip = false }: { color?: string, flip?: boolean }) => (
  <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C41,5,84,18,124,19c40,1,80,0,120,0Z" className={`fill-editorial-black ${color === 'brand-blue' ? 'opacity-40' : 'opacity-20'}`}></path>
    </svg>
  </div>
);

const Node = ({ icon, label, delay }: { icon: ReactNode, label: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
    }}
    transition={{ 
      opacity: { delay },
      scale: { delay },
      y: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }
    }}
    className="flex flex-col items-center gap-2"
  >
    <div className="w-16 h-16 editorial-glass rounded-2xl flex items-center justify-center shadow-lg relative group">
      <div className="absolute inset-0 bg-brand-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
    </div>
    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">{label}</span>
  </motion.div>
);

const NetworkMesh = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
          y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-1 h-1 bg-brand-blue rounded-full shadow-[0_0_10px_#00A3FF]"
      />
    ))}
    <svg className="absolute inset-0 w-full h-full opacity-10">
      <defs>
        <pattern id="mesh-grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 0 100 L 100 0" stroke="currentColor" strokeWidth="0.5" className="text-brand-blue/30" />
          <path d="M 0 0 L 100 100" stroke="currentColor" strokeWidth="0.5" className="text-brand-purple/30" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-grid)" />
    </svg>
    <div className="absolute inset-0 bg-editorial-black/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
  </div>
);

const Home = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <>
      <section className="pb-20 px-6 relative overflow-hidden min-h-[90vh] flex items-center bg-editorial-black">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            alt="Technical Abstract" 
            className="w-full h-full object-cover opacity-40 filter grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-editorial-black/40" />
          <NetworkMesh />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-12 relative z-10 w-full pt-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
               <span className="inline-block text-[11px] uppercase font-black tracking-[4px] text-brand-blue mb-4">
                Omni-Channel Mastery
              </span>
              <h1 className="text-5xl md:text-[88px] font-display font-extrabold leading-[0.82] mb-10 tracking-[-0.04em] text-white">
                We Don't Just<br />Build.<br />We Automate.<br /><span className="text-silver">We Convert.</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif italic text-white/60 mb-10 max-w-xl leading-relaxed">
                "Our mission is to translate complex code into predictable revenue through the Diamond Standard."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="/services" className="px-10 py-5 bg-brand-blue text-white rounded-[4px] font-black text-[10px] uppercase tracking-[2px] transition-all flex items-center justify-center gap-2 group relative overflow-hidden shadow-[0_20px_50px_rgba(0,163,255,0.3)]">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   <span className="relative z-10">Start Transformation</span>
                   <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6 opacity-40">
                <div className="h-[1px] w-12 bg-white" />
                <p className="text-[10px] uppercase font-bold tracking-[3px] font-mono">Status: Standardized v2.0</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative group">
            <motion.div 
              animate={{ 
                rotateX: [0, 2, 0],
                rotateY: [0, 2, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 aspect-square editorial-glass rounded-[40px] p-12 border-white/10 overflow-hidden bg-black/40 perspective-1000 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-t border-l border-white/20"
            >
              <div className="h-full flex flex-col justify-between relative">
                {/* Hardware Aesthetic Details */}
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 uppercase tracking-[2px]">
                  Engine-ID: DIA-0128
                </div>
                
                <div className="flex justify-between">
                  <Node icon={<Globe className="text-brand-blue w-8 h-8" />} label="Google Ads" delay={0} />
                  <Node icon={<ShoppingCart className="text-brand-diamond w-8 h-8" />} label="Shopify" delay={2} />
                </div>
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.path 
                    d="M 60 50 Q 150 150 250 50" 
                    stroke="rgba(0, 112, 255, 0.2)" 
                    strokeWidth="2" 
                    fill="none" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>

                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-brand-blue rounded-full editorial-glow flex items-center justify-center animate-pulse border-4 border-white/20">
                    <Diamond className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Node icon={<ShieldCheck className="text-blue-400" />} label="Compliance" delay={1.5} />
                  <Node icon={<Rocket className="text-brand-blue" />} label="Scaling" delay={3} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CurveDivider color="brand-blue" />

      {/* Trust Bar */}
      <div className="bg-editorial-black py-4 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-[2px]">5.0 Fiverr Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-brand-blue" />
            <span className="text-[10px] font-bold uppercase tracking-[2px]">Top Rated Seller</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-[2px]">GMC Policy Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-blue rounded-full editorial-glow" />
            <span className="text-[10px] font-bold uppercase tracking-[2px]">Pro Verified Agency</span>
          </div>
        </div>
      </div>

      {/* Results Numbers */}
      <section className="py-20 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-blue/5 mb-6 group-hover:bg-brand-blue/10 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-display font-extrabold mb-2 tracking-tighter">{stat.value}</h3>
                <p className="text-[10px] uppercase font-bold tracking-[3px] text-white/30">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider color="brand-purple" flip />

      {/* Bento Grid */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">The Expertise Bento</h2>
            <p className="text-white/40">Multi-channel excellence delivered through a unified diamond standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-editorial-charcoal/40 border border-white/[0.08] p-8 rounded-xl group relative overflow-hidden transition-all duration-700 hover:border-brand-blue hover:shadow-[0_0_50px_rgba(0,112,255,0.15)]
                  ${s.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${s.size === 'medium' ? 'md:col-span-2' : ''}
                  backdrop-blur-xl
                `}
              >
                {/* Individual Card Texture */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none grayscale">
                  <img 
                    src={
                      s.id === 'ai' ? 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' :
                      s.id === 'ecom' ? 'https://images.unsplash.com/photo-1551288049-bbbda536639a' :
                      s.id === 'content' ? 'https://images.unsplash.com/photo-1550745619-755a94740640' :
                      'https://images.unsplash.com/photo-1542831371-29b0f74f9713'
                    }
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-editorial-black/40 group-hover:bg-editorial-black/20 transition-all" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-[14px] font-bold mb-2 text-white group-hover:text-brand-blue transition-colors text-strong">{s.title}</h3>
                  <p className="text-white/50 text-[11px] leading-relaxed mb-6 flex-grow text-strong">{s.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.tags.map(t => (
                      <span key={t} className="text-[8px] uppercase font-bold tracking-widest bg-brand-blue/5 border border-brand-blue/10 px-2 py-0.5 rounded text-brand-blue/60 group-hover:bg-brand-blue/20 transition-all text-strong">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider color="brand-blue" />

      {/* Niche Focus */}
      <section id="niches" className="py-24 px-6 relative overflow-hidden bg-white text-editorial-black bg-cyber-grid-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase font-bold tracking-[4px] text-brand-blue mb-4 block">Industry Expertise</span>
            <h2 className="text-4xl font-display font-bold mb-4">Niche Focus</h2>
            <p className="text-editorial-black/60">Tailored diamond solutions for high-impact sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {niches.map((niche, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, borderColor: 'rgba(0, 163, 255, 0.3)' }}
                className="p-10 rounded-xl bg-black/[0.03] editorial-glass-light border border-black/5 relative overflow-hidden group transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:text-brand-blue transition-all duration-500">
                  {niche.icon}
                </div>
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-8 border border-black/10 group-hover:border-brand-blue/50 transition-colors">
                  <Plus className="w-5 h-5 text-brand-blue rotate-45" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 tracking-tight group-hover:text-brand-blue transition-colors text-strong leading-none">{niche.title}</h3>
                <p className="text-editorial-black/60 text-[13px] leading-relaxed font-light">{niche.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider color="brand-purple" flip />

      {/* Work Archive Preview */}
      <section id="work" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[4px] text-brand-blue mb-4 block">Our Portfolio</span>
              <h2 className="text-4xl font-display font-bold">Case Studies</h2>
            </div>
            <a href="/portfolio" className="text-[10px] font-black uppercase tracking-[2px] flex items-center gap-2 group">
              View All Work <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="group relative rounded-xl overflow-hidden editorial-border aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-editorial-black via-transparent to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-[2px] px-3 py-1 editorial-glass rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-blue font-extrabold text-2xl tracking-tighter">{item.results}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative bg-white text-editorial-black bg-cyber-grid-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Investment Tiers</h2>
            <p className="text-editorial-black/60">Predictable pricing for exponential growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`p-10 rounded-2xl flex flex-col transition-all duration-500 border shadow-xl
                  ${tier.featured 
                    ? 'bg-brand-blue/5 border-brand-blue/50 scale-105 z-10 editorial-glow text-editorial-black' 
                    : 'bg-black/[0.03] border-black/5'}
                `}
              >
                <div className="mb-8 text-center flex flex-col items-center">
                  <span className="text-[10px] font-extrabold uppercase text-brand-blue mb-2 tracking-[2px]">{tier.tagline}</span>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl font-extrabold tracking-tighter">{tier.price}</span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {tier.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span className="text-[11px] text-editorial-black/60">{f}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className={`w-full py-4 rounded-[4px] font-bold text-xs uppercase tracking-[1px] transition-all text-center
                  ${tier.featured 
                    ? 'bg-brand-blue hover:bg-brand-blue/90 text-white' 
                    : 'editorial-border-light hover:bg-black/10'}
                `}>
                  {tier.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-white text-editorial-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Voices of Success</h2>
            <p className="text-editorial-black/60">The real-world impact of the Diamond Standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-black/[0.02] editorial-glass-light border border-black/5 relative group hover:border-brand-blue/50 transition-all duration-500"
              >
                <div className="absolute top-8 right-8 text-brand-blue/20 group-hover:text-brand-blue/50 transition-colors">
                  <Plus className="w-8 h-8 rotate-45" />
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-sm tracking-tight">{t.name}</h4>
                    <p className="text-[10px] uppercase font-bold text-brand-blue tracking-widest">{t.role} @ {t.company}</p>
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed italic text-editorial-black/70">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">Inquiry Cache</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((item, i) => (
             <div key={i} className="editorial-glass editorial-border p-8 rounded-xl">
                <h4 className="font-bold mb-4 text-brand-blue text-[11px] uppercase tracking-[2px]">Q: {item.q}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.a}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-24 px-6 relative overflow-hidden bg-editorial-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Data Highway" 
            className="w-full h-full object-cover opacity-20 filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-editorial-black via-transparent to-editorial-black" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="editorial-glass editorial-border p-1 md:p-2 rounded-2xl overflow-hidden relative">
            <div className="bg-editorial-black/80 backdrop-blur-xl p-8 md:p-16 rounded-xl flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 rounded-full mb-6 border border-brand-blue/20">
                  <SearchCheck className="w-3 h-3 text-brand-blue" />
                  <span className="text-[9px] uppercase font-bold tracking-[2px] text-brand-blue">Limited Availability</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tighter leading-[0.9]">
                  Get Your Free <span className="text-brand-blue">24-Hour</span> GMC & Ads Audit
                </h2>
                <p className="text-white/40 mb-8 max-w-md font-light">
                  Our precision diagnostic reveals exactly why your ads are suspended or underperforming. No obligation, pure value.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Policy Scan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">ROAS Forecast</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full max-w-md relative">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Audit Queued</h3>
                    <p className="text-white/40 text-sm">We'll deliver your report via email in 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleAuditSubmit} className="space-y-4">
                    <input 
                      required
                      type="url"
                      placeholder="Store URL (e.g. yourstore.com)" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-5 text-sm focus:outline-none focus:border-brand-blue transition-all"
                    />
                    <input 
                      required
                      type="email"
                      placeholder="Work Email" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-5 text-sm focus:outline-none focus:border-brand-blue transition-all"
                    />
                    <button 
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-brand-blue text-white rounded-lg font-bold text-xs uppercase tracking-[3px] hover:shadow-[0_0_30px_rgba(0,112,255,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? 'Processing...' : 'Request Free Audit'}
                      <SearchCheck className="w-4 h-4" />
                    </button>
                    <p className="text-[9px] text-center text-white/20 uppercase tracking-widest">Reports delivered within 24 hours</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
