import { motion } from 'motion/react';
import { Mail, ShieldCheck, Zap, BarChart3, Send, ChevronRight, Star, Target, Cpu } from 'lucide-react';
import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';

const GrowthVisual = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 bg-editorial-black">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        <linearGradient id="growth-grad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#0070FF" stopOpacity="0.5" />
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

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '',
    revenue: '',
    challenge: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value) error = 'Full name is required';
        else if (value.length < 3) error = 'Name must be at least 3 characters';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      case 'projectType':
        if (!value) error = 'Please select a service';
        break;
      case 'revenue':
        if (!value) error = 'Please select your revenue range';
        break;
      case 'challenge':
        if (!value) error = 'Please describe your challenge';
        else if (value.length < 10) error = 'Please provide more detail (min 10 characters)';
        break;
    }
    return error;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  const benefits = [
    {
      title: 'Tailored Strategy',
      desc: 'We don\'t use templates. Your brand gets a bespoke diamond blueprint focused on your specific units economics.',
      icon: <Target className="w-5 h-5 text-brand-blue" />
    },
    {
      title: '24/7 AI Support',
      desc: 'Our proprietary agents monitor your campaigns and customer interactions around the clock, ensuring zero lead drop-off.',
      icon: <Cpu className="w-5 h-5 text-brand-diamond" />
    },
    {
      title: 'Proven Results',
      desc: 'We optimize for cold-hard revenue and ROAS. If it doesn\'t move the needle, we don\'t do it.',
      icon: <BarChart3 className="w-5 h-5 text-brand-purple" />
    }
  ];

  return (
    <div className="min-h-screen bg-editorial-black py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <GrowthVisual />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          
          {/* Left Side: Why Work With Us */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase font-mono font-bold tracking-[4px] text-brand-blue mb-6 block">Intake Protocol</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 text-strong leading-none">
              Strategic <br /> <span className="text-brand-blue">Application</span>
            </h1>
            <p className="text-white/40 text-lg font-light mb-12 max-w-lg">
              We exclusively partner with brands poised for exponential growth. Complete the application below to initiate our deep-audit process.
            </p>

            <div className="space-y-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-blue/50 transition-all duration-500">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-brand-blue transition-colors">{b.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed max-w-md">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Anchor */}
            <div className="mt-12 rounded-3xl overflow-hidden aspect-video border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                alt="Strategic Planning"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Side: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-editorial-gray p-8 md:p-12 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden">
              {status === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-brand-diamond/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <Send className="w-10 h-10 text-brand-diamond" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Application Transmitted</h3>
                  <p className="text-white/40 text-sm">Our audit team will review your data and respond within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-[2px] hover:bg-white/10 transition-all"
                  >
                    Send another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-[2px] text-white/30 ml-1">Full Name</label>
                    <input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white/[0.03] border ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl p-5 text-sm focus:outline-none focus:border-brand-blue transition-all`}
                      placeholder="e.g. John Diamond"
                    />
                    {errors.fullName && touched.fullName && (
                      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-1">{errors.fullName}</motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-[2px] text-white/30 ml-1">Email Address</label>
                    <input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white/[0.03] border ${errors.email && touched.email ? 'border-red-500' : 'border-white/10'} rounded-xl p-5 text-sm focus:outline-none focus:border-brand-blue transition-all`}
                      placeholder="e.g. john@brand.com"
                    />
                    {errors.email && touched.email && (
                      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-1">{errors.email}</motion.p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono font-bold tracking-[2px] text-white/30 ml-1">Project Type</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-editorial-black border ${errors.projectType && touched.projectType ? 'border-red-500' : 'border-white/10'} rounded-xl p-5 text-sm focus:outline-none focus:border-brand-blue transition-all appearance-none text-white shadow-inner`}
                      >
                        <option value="">Select Service...</option>
                        <option>Shopify Scale</option>
                        <option>Ads Management</option>
                        <option>AI Automation</option>
                        <option>GMC Fixing</option>
                      </select>
                      {errors.projectType && touched.projectType && (
                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-1">{errors.projectType}</motion.p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono font-bold tracking-[2px] text-white/30 ml-1">Monthly Revenue</label>
                      <select 
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-editorial-black border ${errors.revenue && touched.revenue ? 'border-red-500' : 'border-white/10'} rounded-xl p-5 text-sm focus:outline-none focus:border-brand-blue transition-all appearance-none text-white shadow-inner`}
                      >
                        <option value="">Select Range...</option>
                        <option>$0 - $10k</option>
                        <option>$10k - $50k</option>
                        <option>$50k - $250k</option>
                        <option>$250k+</option>
                      </select>
                      {errors.revenue && touched.revenue && (
                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-1">{errors.revenue}</motion.p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-[2px] text-white/30 ml-1">Biggest Challenge</label>
                    <textarea 
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={`w-full bg-white/[0.03] border ${errors.challenge && touched.challenge ? 'border-red-500' : 'border-white/10'} rounded-xl p-5 text-sm focus:outline-none focus:border-brand-blue transition-all resize-none`}
                      placeholder="Tell us what is holding you back..."
                    />
                    {errors.challenge && touched.challenge && (
                      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-1">{errors.challenge}</motion.p>
                    )}
                  </div>

                  <motion.button 
                    disabled={status === 'submitting'}
                    whileHover={{ y: -4, shadow: "0 0 40px rgba(0,163,255,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 bg-brand-blue text-white rounded-xl font-black text-xs uppercase tracking-[3px] hover:shadow-[0_0_40px_rgba(0,112,255,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {status === 'submitting' ? 'Transmitting Data...' : 'Submit Application'}
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                  </motion.button>

                  {/* Trust Bar */}
                  <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-[9px] uppercase font-bold tracking-[3px] text-white/20 mb-6 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-3 h-3" /> Trusted by 50+ Global Brands
                    </p>
                    <div className="flex justify-center items-center gap-8 opacity-20 grayscale filter brightness-200">
                      <Star className="w-5 h-5" />
                      <Star className="w-5 h-5" />
                      <Star className="w-5 h-5 rotate-45" />
                      <Star className="w-5 h-5" />
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-2 border-b-2 border-brand-blue opacity-50" />
            <div className="absolute -top-6 -right-6 w-12 h-12 border-r-2 border-t-2 border-brand-purple opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
