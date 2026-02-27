import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, HeadphonesIcon, Globe2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Globe2,
      title: "Global Coverage",
      description: "Access to over 100,000 destinations and millions of routes worldwide.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Secure Booking",
      description: "Your payments and personal data are protected with bank-level security.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: CreditCard,
      title: "Best Price Guarantee",
      description: "We match prices if you find a cheaper identical itinerary elsewhere.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our travel experts are always ready to help you, anytime, anywhere.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Why TravelTix</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              We Make Your Travel Experience Seamless
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              From finding the perfect flight to booking a cozy hotel, we handle the complexities so you can focus on making memories.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.color} dark:bg-opacity-20`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://picsum.photos/seed/traveler/800/1000" 
                alt="Happy traveler" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 glass dark:bg-[#141414]/80 dark:border-white/10 rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">10M+</span>
                </div>
                <div>
                  <h5 className="text-slate-900 dark:text-white font-bold text-lg">Happy Travelers</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Booked their dream vacations with us.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
