import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-[#141414] pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-brand-600 text-white">
                <Plane size={24} className="transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                TravelTix
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
              Your trusted partner for seamless travel experiences. Book flights, trains, buses, and hotels all in one place.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-brand-50 dark:hover:bg-[#2a2a2a] hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-white/10 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Safety Information', 'Cancellation Options', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} TravelTix Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>English (US)</span>
            <span>USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
