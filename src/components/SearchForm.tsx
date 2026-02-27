import { useState } from 'react';
import { motion } from 'motion/react';
import { Plane, Train, Bus, MapPin, Calendar, Search } from 'lucide-react';

type TravelType = 'flight' | 'train' | 'bus';

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState<TravelType>('flight');

  const tabs = [
    { id: 'flight', label: 'Flights', icon: Plane },
    { id: 'train', label: 'Trains', icon: Train },
    { id: 'bus', label: 'Buses', icon: Bus },
  ];

  return (
    <div className="glass rounded-3xl p-2 md:p-4 shadow-2xl border border-white/40">
      {/* Tabs */}
      <div className="flex p-1 mb-4 bg-white/20 rounded-2xl w-fit mx-auto md:mx-0 backdrop-blur-md">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TravelType)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isActive ? 'text-slate-900' : 'text-white hover:text-white/80'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Form Fields */}
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-inner flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* From */}
          <div className="relative group">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">From</label>
            <div className="flex items-center border-b-2 border-slate-200 group-hover:border-brand-500 transition-colors pb-2">
              <MapPin size={20} className="text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="City or Airport" 
                className="w-full bg-transparent outline-none text-slate-900 font-medium placeholder:font-normal placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* To */}
          <div className="relative group">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">To</label>
            <div className="flex items-center border-b-2 border-slate-200 group-hover:border-brand-500 transition-colors pb-2">
              <MapPin size={20} className="text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full bg-transparent outline-none text-slate-900 font-medium placeholder:font-normal placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Date */}
          <div className="relative group">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Date</label>
            <div className="flex items-center border-b-2 border-slate-200 group-hover:border-brand-500 transition-colors pb-2">
              <Calendar size={20} className="text-slate-400 mr-2" />
              <input 
                type="date" 
                className="w-full bg-transparent outline-none text-slate-900 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto mt-4 md:mt-0 bg-brand-600 hover:bg-brand-700 text-white p-4 md:px-8 md:py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-brand-500/30 active:scale-95 shrink-0">
          <Search size={24} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}
