import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[11px] uppercase font-bold tracking-[4px] text-brand-blue mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8">Secure Your Audit</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="editorial-glass border border-white/5 p-8 md:p-12 rounded-3xl"
          >
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Message Transmitted</h3>
                <p className="text-white/40">Expect a response from the Diamond Team within 12 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-blue font-bold uppercase text-[10px] tracking-[2px]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-[2px] text-white/30 ml-1">Full Name</label>
                    <input 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-5 text-sm focus:outline-none focus:border-brand-blue transition-all"
                      placeholder="e.g. John Diamond"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-[2px] text-white/30 ml-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-5 text-sm focus:outline-none focus:border-brand-blue transition-all"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[2px] text-white/30 ml-1">Service Required</label>
                  <select className="w-full bg-editorial-charcoal border border-white/10 rounded-lg p-5 text-sm focus:outline-none focus:border-brand-blue transition-all appearance-none text-white/60">
                    <option>Shopify Development</option>
                    <option>GMC Suspension Fix</option>
                    <option>Ads Management / Scaling</option>
                    <option>AI Automation Ecosystem</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[2px] text-white/30 ml-1">Your Vision / Project Details</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-5 text-sm focus:outline-none focus:border-brand-blue transition-all"
                    placeholder="Tell us about your brand and what you want to achieve..."
                  />
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-6 bg-brand-blue text-white rounded font-black text-xs uppercase tracking-[3px] hover:shadow-[0_0_40px_rgba(0,112,255,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Initiate Partnership'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h4 className="text-xl font-bold mb-8">Contact Protocol</h4>
              <div className="space-y-6">
                <a href="mailto:diamond.shopifypartner@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue transition-all">
                    <Mail className="w-5 h-5 text-brand-blue group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest block">Direct Email</span>
                    <span className="text-[13px] font-bold group-hover:text-brand-blue transition-colors">diamond.shopifypartner@gmail.com</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500 transition-all">
                    <MessageCircle className="w-5 h-5 text-green-500 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest block">WhatsApp Business</span>
                    <span className="text-[13px] font-bold group-hover:text-green-500 transition-colors">+1 234 567 890</span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Global HQ</h4>
              <div className="aspect-video rounded-3xl editorial-border overflow-hidden grayscale contrast-125 brightness-50 opacity-60">
                {/* Mock Map */}
                <div className="relative w-full h-full bg-[#121212] flex items-center justify-center">
                  <MapPin className="text-brand-blue w-8 h-8 animate-bounce" />
                  <div className="absolute inset-0 border-[20px] border-editorial-black/40 pointer-events-none" />
                  <div className="text-[10px] uppercase font-bold tracking-[4px] absolute bottom-6 text-white/20">Remote Expertise Center</div>
                </div>
              </div>
            </div>

            <div className="p-8 editorial-glass border border-brand-purple/20 rounded-2xl">
              <h4 className="text-brand-purple text-[10px] uppercase font-black tracking-[4px] mb-4 italic">High Priority?</h4>
              <p className="text-sm text-white/40 mb-6 font-light">Diamond Pro Verified clients on Fiverr receive priority intake. Visit our profile for instant orders.</p>
              <a 
                href="https://fiverr.com" 
                target="_blank" 
                className="flex items-center justify-between text-xs font-bold uppercase tracking-widest hover:text-brand-purple transition-all"
              >
                Go to Fiverr Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
