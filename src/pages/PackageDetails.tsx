import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, Star, CheckCircle2, Calendar, Users, Plane, Shield } from 'lucide-react';
import { packages } from '../data/mockData';

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Package not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to Packages
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] overflow-hidden h-[400px] relative shadow-xl"
            >
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Star className="text-yellow-500 fill-yellow-500" size={18} />
                <span className="font-bold text-slate-900 dark:text-white">4.9</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">(128 reviews)</span>
              </div>
            </motion.div>

            {/* Title & Basic Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[#141414] rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-white/5"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium text-brand-600 dark:text-brand-400">
                <span className="flex items-center gap-1 bg-brand-50 dark:bg-brand-900/20 px-3 py-1 rounded-full">
                  <MapPin size={16} /> {pkg.title.split(' ')[0]}
                </span>
                <span className="flex items-center gap-1 bg-brand-50 dark:bg-brand-900/20 px-3 py-1 rounded-full">
                  <Clock size={16} /> {pkg.duration}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                {pkg.title}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Experience the ultimate getaway with our carefully curated {pkg.title} package. 
                Immerse yourself in the local culture, enjoy premium accommodations, and create 
                unforgettable memories. This comprehensive itinerary ensures you won't miss any 
                of the highlights while still having plenty of time to relax and explore at your own pace.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[#141414] rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-white/5"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Package Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">Daily Breakfast Included</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">Airport Transfers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">24/7 Local Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Booking Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 bg-white dark:bg-[#141414] rounded-[2rem] p-8 shadow-xl border border-slate-100 dark:border-white/5">
              <div className="flex items-end gap-2 mb-6 pb-6 border-b border-slate-100 dark:border-white/5">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{pkg.discountedPrice}</span>
                <span className="text-lg text-slate-400 dark:text-slate-500 line-through mb-1">{pkg.originalPrice}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 mb-1.5 ml-1">/ person</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Calendar size={20} className="text-brand-500" />
                    <span className="font-medium">Select Date</span>
                  </div>
                  <span className="text-brand-600 dark:text-brand-400 text-sm font-bold cursor-pointer">Change</span>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Users size={20} className="text-brand-500" />
                    <span className="font-medium">2 Travelers</span>
                  </div>
                  <span className="text-brand-600 dark:text-brand-400 text-sm font-bold cursor-pointer">Change</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 active:scale-[0.98] mb-4">
                Book Now
              </button>
              
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                <Shield size={14} /> No hidden fees. Secure booking.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
