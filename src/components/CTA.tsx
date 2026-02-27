import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-600 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-brand-600/20"
        >
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[150%] bg-white/10 rotate-12 transform origin-center"></div>
            <div className="absolute top-[-50%] right-[-10%] w-[40%] h-[150%] bg-white/5 -rotate-12 transform origin-center"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to start your next journey?
            </h2>
            <p className="text-lg text-brand-100 mb-10">
              Subscribe to our newsletter and get exclusive deals, travel tips, and early access to special packages.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:bg-white/20 transition-colors"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-2xl bg-white text-brand-600 font-bold hover:bg-brand-50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
