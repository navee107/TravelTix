import { motion } from 'motion/react';
import { Star, MapPin, CalendarDays, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/mockData';

export default function FeaturedDestinations() {
  const navigate = useNavigate();

  return (
    <section id="destinations" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Top Destinations</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">Popular Places to Visit</h3>
          </div>
          <button className="mt-6 md:mt-0 text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-800 dark:hover:text-brand-300 transition-colors flex items-center gap-1">
            View all destinations &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-slate-50 dark:bg-[#141414] cursor-pointer border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 z-10">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  {dest.rating}
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/70 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white z-10">
                  {dest.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 dark:bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center gap-3">
                    <div className="flex items-center gap-4 text-white/90 text-sm font-medium mb-2">
                      <span className="flex items-center gap-1"><CalendarDays size={16} /> 5 Days</span>
                      <span className="flex items-center gap-1"><Users size={16} /> Family</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Navigate to package details (using id 1 as fallback if destination id doesn't match a package)
                        navigate(`/package/${dest.id > 3 ? 1 : dest.id}`);
                      }}
                      className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/30"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-2">
                  <MapPin size={14} />
                  <span>{dest.name.split(',')[1]?.trim() || 'Global'}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{dest.name.split(',')[0]}</h4>
                <div className="mt-auto flex justify-between items-center pt-3 border-t border-slate-200 dark:border-white/5">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Starting from</span>
                  <span className="text-lg font-bold text-brand-600 dark:text-brand-400">{dest.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
