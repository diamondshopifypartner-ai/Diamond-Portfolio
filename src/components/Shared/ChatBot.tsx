import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Welcome to the Diamond Standard. How can we help automate your growth today?' }
  ]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="editorial-glass border border-brand-blue/30 w-[320px] mb-6 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-brand-blue p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">Diamond Support Agent</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="h-[300px] bg-editorial-black p-4 overflow-y-auto space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-[11px] leading-relaxed ${m.role === 'ai' ? 'bg-white/5 text-white/60' : 'bg-brand-blue text-white'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-editorial-charcoal/50 border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-white/5 rounded-lg px-4 py-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-brand-blue/50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const val = (e.target as HTMLInputElement).value;
                    if (!val) return;
                    setMessages(prev => [...prev, { role: 'user', content: val }]);
                    (e.target as HTMLInputElement).value = '';
                    setTimeout(() => {
                      setMessages(prev => [...prev, { role: 'ai', content: 'Our team has been notified. We will reach out for deeper inquiry soon.' }]);
                    }, 1000);
                  }
                }}
              />
              <button className="p-2 bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="editorial-glass border border-brand-blue h-12 shadow-xl shadow-brand-blue/30 relative px-6 rounded-full flex items-center justify-center gap-3 active:scale-95 group overflow-hidden"
      >
        <div className="w-2 h-2 bg-[#00FF00] rounded-full shadow-[0_0_10px_#00FF00]" />
        <span className="text-[12px] font-bold tracking-[0.5px]">Ask Diamond Team AI</span>
        
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    </div>
  );
};

export default ChatBot;
