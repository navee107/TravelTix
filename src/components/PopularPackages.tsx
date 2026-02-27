import { motion } from 'motion/react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { packages } from '../data/mockData';

export default function PopularPackages() {
  const navigate = useNavigate();

  return (
    <section id="packages" className="py-24 bg-slate-50 dark:bg-[#141414] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Exclusive Offers</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Curated Travel Packages</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Handpicked itineraries with the best hotels, flights, and experiences included.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-white/5 flex flex-col group transition-colors"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-2xl font-bold text-white mb-1">{pkg.title}</h4>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.discountedPrice}</span>
                  <span className="text-lg text-slate-400 dark:text-slate-500 line-through mb-1">{pkg.originalPrice}</span>
                </div>
                
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => navigate(`/package/${pkg.id}`)}
                  className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:border-brand-600 dark:hover:border-brand-500 hover:bg-brand-600 dark:hover:bg-brand-500 hover:text-white transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
