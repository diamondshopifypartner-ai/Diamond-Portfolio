import { motion } from 'motion/react';
import { 
  ShoppingCart, 
  Globe, 
  ShieldCheck, 
  BarChart3, 
  Search, 
  TrendingUp, 
  Cpu, 
  Bot, 
  Video,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicePillar = ({ title, icon, color, items, quote, bgImage }: { title: string, icon: any, color: string, items: { t: string, d: string }[], quote: string, bgImage: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-32 last:mb-0 relative group/pillar"
  >
    {/* Pillar Background Image (Targeted) */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover/pillar:opacity-30 transition-opacity duration-1000 overflow-hidden rounded-3xl">
      <img 
        src={bgImage} 
        alt="" 
        className="w-full h-full object-cover grayscale brightness-50" 
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-10">
      <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8 ${color === 'blue' ? 'bg-brand-blue/5 border-brand-blue/20 text-brand-blue' : 'bg-brand-purple/5 border-brand-purple/20 text-brand-purple shadow-[0_0_15px_rgba(157,0,255,0.1)]'}`}>
        {icon}
        <span className="text-[10px] font-mono font-black uppercase tracking-[3px]">{title}</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight mb-8 leading-[1.2] text-white">
            "{quote}"
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded font-bold text-xs uppercase tracking-[2px] hover:bg-brand-blue hover:text-white transition-all group backdrop-blur shadow-2xl"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 bg-editorial-gray/40 border border-white/10 rounded-2xl group hover:border-brand-diamond/30 transition-all backdrop-blur-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <span className="text-4xl font-mono font-black">0{i+1}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-strong">
                 <CheckCircle2 className={`w-4 h-4 ${color === 'blue' ? 'text-brand-blue' : 'text-brand-purple'}`} />
                 {item.t}
              </h4>
              <p className="text-[13px] text-white/40 leading-relaxed font-mono font-light text-strong">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const GrowthVisual = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 bg-editorial-black">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        <linearGradient id="growth-grad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="var(--color-cyber-lime)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {[...Array(10)].map((_, i) => (
        <motion.path
          key={i}
          initial={{ d: `M 0 ${400 + i * 40} Q 250 ${300 + i * 20}, 500 ${400 + i * 40} T 1000 ${400 + i * 40}` }}
          animate={{ 
            d: [
              `M 0 ${400 + i * 40} Q 250 ${300 + i * 20}, 500 ${400 + i * 40} T 1000 ${400 + i * 40}`,
              `M 0 ${420 + i * 40} Q 250 ${350 + i * 20}, 500 ${420 + i * 40} T 1000 ${420 + i * 40}`,
              `M 0 ${400 + i * 40} Q 250 ${300 + i * 20}, 500 ${400 + i * 40} T 1000 ${400 + i * 40}`,
            ]
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          stroke="url(#growth-grad)"
          strokeWidth="0.5"
          fill="none"
        />
      ))}
    </svg>
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-editorial-black/60 to-editorial-black" />
  </div>
);

const Services = () => {
  return (
    <div className="py-20 px-6 relative overflow-hidden bg-editorial-black">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=2070" 
          alt="Data Visualization" 
          className="w-full h-full object-cover opacity-30 filter grayscale brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-editorial-black/30" />
      </div>
      <GrowthVisual />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] uppercase font-black tracking-[4px] text-brand-blue mb-4 block underline decoration-brand-blue/30 underline-offset-8"
          >
            Capabilities.v02
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-display font-extrabold tracking-[-0.05em] mb-12 text-white leading-[0.8] uppercase"
          >
            Digital<br /><span className="text-silver">Dominance.</span>
          </motion.h1>
        </div>

        <ServicePillar 
          title="Shopify & Web"
          icon={<ShoppingCart className="w-4 h-4" />}
          color="blue"
          bgImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000" // Code editor
          quote="Storefronts built for high-scale conversion."
          items={[
            { t: 'Custom Liquid Dev', d: 'Unique, high-performance Shopify themes built from the ground up without clunky plugins.' },
            { t: 'GMC Suspension Fixing', d: 'The "Google Fixer" protocol to get your merchant center unblocked and shipping.' },
            { t: 'Wix/WordPress Mastery', d: 'Dynamic lead-gen sites and complex CMS architectures for service-based businesses.' },
            { t: 'Performance Audits', d: 'Deep-dive storefront analysis focusing on Speed, UX, and Conversion Rate Optimization.' }
          ]}
        />

        <ServicePillar 
          title="Advertising & ROI"
          icon={<TrendingUp className="w-4 h-4" />}
          color="purple"
          bgImage="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1000" // Abstract data chart
          quote="Scalable traffic that pays for itself."
          items={[
            { t: 'Google Shopping', d: 'AI-driven feeds and CSS optimization to dominate the shopping carousel. Navigating complex structures for maximum visibility.' },
            { t: 'Search Ads Mastery', d: 'High-intent keyword targeting that captures ready-to-buy customers instantly.' },
            { t: 'ROAS Optimization', d: 'Metric-obsessed management focused on increasing your bottom-line profitability.' },
            { t: 'Multi-Channel Strategy', d: 'Synchronized campaigns across Google, Meta, and TikTok for total brand awareness.' }
          ]}
        />

        <ServicePillar 
          title="AI & Automation"
          icon={<Cpu className="w-4 h-4" />}
          color="blue"
          bgImage="https://images.unsplash.com/photo-1550745619-755a94740640?auto=format&fit=crop&q=80&w=1000" // Motion graphic frame
          quote="Systems that work while you sleep."
          items={[
            { t: 'GHL Ecosystem Setup', d: 'Complete GoHighLevel snapshots including funnels, automation, and CRM integration.' },
            { t: 'AI Voice & Text Agents', d: 'Autonomous agents that handle customer support, booking, and lead qualification 24/7.' },
            { t: 'Content Automation', d: 'AI-driven video creation and social media scheduling at scale.' },
            { t: 'Custom API Integrations', d: 'Connecting your toolkit with Make.com and Zapier for flawless data flow.' }
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
