import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: "Data Collection Protocol",
      icon: <Eye className="w-5 h-5 text-brand-blue" />,
      content: "We collect strictly necessary data to perform deep-audits of Shopify storefronts and Google Ads accounts. This includes store performance metrics, campaign historical data, and authorized user credentials provided during the intake process."
    },
    {
      title: "Utilization of Intelligence",
      icon: <FileText className="w-5 h-5 text-brand-purple" />,
      content: "Information captured is utilized exclusively for generating strategic blueprints and optimizing automated execution engines. We do not sell user data to third-party brokers. All data analysis is handled by our internal proprietary AI models."
    },
    {
      title: "Encryption & Security",
      icon: <Lock className="w-5 h-5 text-brand-diamond" />,
      content: "The Diamond Standard mandates 256-bit encryption for all data at rest and in transit. Access to client data is strictly limited to authorized Diamond Team specialists using multi-factor authentication protocols."
    },
    {
      title: "Compliance Shield",
      icon: <Shield className="w-5 h-5 text-brand-blue" />,
      content: "We adhere strictly to GDPR, CCPA, and regional digital export laws. Clients maintain the right to request full data purging from our optimization clusters upon partnership termination."
    }
  ];

  return (
    <div className="min-h-screen bg-editorial-black py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] uppercase font-mono font-bold tracking-[4px] text-brand-blue mb-4 block underline decoration-brand-blue/30 underline-offset-8">
            Digital Governance v2.0
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 text-white">
            Privacy <span className="text-brand-blue">Policy</span>
          </h1>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Our commitment to the Diamond Standard extends to the absolute security and ethical handling of every data point we process.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-12 editorial-glass border border-white/5 rounded-3xl relative overflow-hidden active:border-brand-blue/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-blue/50 transition-all">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    {section.title}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue" />
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {section.content}
                  </p>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-[10px] uppercase font-mono font-bold tracking-[3px] text-white/20">
            Last Updated: April 21, 2026 // Authorized Diamond Access Only
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
