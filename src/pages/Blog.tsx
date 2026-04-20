import { motion } from 'motion/react';
import { Search, ChevronRight, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../constants';

const Blog = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[11px] uppercase font-bold tracking-[4px] text-brand-blue mb-4 block">Knowledge Hub</span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8">Digital Insights</h1>
          <div className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search guides, strategies, case studies..." 
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 px-8 text-sm focus:outline-none focus:border-brand-blue transition-all"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="editorial-glass border border-white/5 rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] group-hover:text-brand-blue transition-colors">
                    Read Full Case Study <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Callout */}
        <div className="mt-32 p-12 md:p-20 bg-brand-blue/[0.03] border border-brand-blue/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl font-display font-bold mb-4 italic">The Diamond Intelligence</h2>
            <p className="text-white/40 text-sm">Join 5,000+ e-commerce founders receiving bi-weekly automation strategies and GMC survival guides.</p>
          </div>
          <div className="flex-1 w-full max-w-sm flex gap-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-grow bg-white/[0.03] border border-white/10 rounded px-6 py-4 text-sm focus:outline-none focus:border-brand-blue"
            />
            <button className="px-8 py-4 bg-brand-blue text-white rounded font-bold text-[10px] uppercase tracking-[2px]">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
