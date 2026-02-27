import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-900 dark:bg-[#141414] text-white overflow-hidden relative transition-colors">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-500 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Travelers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark dark:bg-[#1a1a1a]/80 dark:border-white/5 rounded-3xl p-8 relative"
            >
              <Quote size={40} className="text-brand-500/30 absolute top-6 right-6" />
              <p className="text-lg text-slate-300 mb-8 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-brand-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
