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

const ServicePillar = ({ title, icon, color, items, quote }: { title: string, icon: any, color: string, items: { t: string, d: string }[], quote: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-32 last:mb-0"
  >
    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8 ${color === 'blue' ? 'bg-brand-blue/5 border-brand-blue/20 text-brand-blue' : 'bg-brand-purple/5 border-brand-purple/20 text-brand-purple'}`}>
      {icon}
      <span className="text-[10px] font-extrabold uppercase tracking-[3px]">{title}</span>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-8 leading-[1]">
          {quote}
        </h2>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded font-bold text-xs uppercase tracking-[2px] hover:bg-brand-blue hover:text-white transition-all group"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="p-8 editorial-glass border border-white/5 rounded-2xl group hover:border-white/20 transition-all">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
               <CheckCircle2 className={`w-4 h-4 ${color === 'blue' ? 'text-brand-blue' : 'text-brand-purple'}`} />
               {item.t}
            </h4>
            <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] uppercase font-bold tracking-[4px] text-brand-blue mb-4 block"
          >
            Our Core Competencies
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8"
          >
            Digital Dominance. <br /> <span className="text-brand-blue">Defined.</span>
          </motion.h1>
        </div>

        <ServicePillar 
          title="Shopify & Web"
          icon={<ShoppingCart className="w-4 h-4" />}
          color="blue"
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
