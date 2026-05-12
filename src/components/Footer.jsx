import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-12 md:pt-20 pb-8 md:pb-10 px-6 md:px-12 lg:px-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 mb-12 md:mb-20">
          
          <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center font-serif font-bold text-white shrink-0">
                EG
              </div>
              <span className="font-serif text-xl tracking-widest">EVER GLOW</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Providing premium dermatology and aesthetic treatments with a focus on 
              luxury, safety, and exceptional results.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base sm:text-lg mb-4 sm:mb-8 text-brand-gold">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-0.5">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors block py-0.5">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors block py-0.5">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base sm:text-lg mb-4 sm:mb-8 text-brand-gold">Treatments</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Hydra Facial</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Laser Hair Removal</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Anti-Aging</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Chemical Peels</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Skin Brightening</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 pt-2 sm:pt-0">
            <h4 className="font-serif text-base sm:text-lg mb-3 sm:mb-8 text-brand-gold">Newsletter</h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed">Subscribe to receive skincare tips and exclusive offers.</p>
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 border-none rounded-full py-3 pl-5 pr-24 text-xs sm:text-sm outline-none focus:ring-1 focus:ring-brand-gold transition-all text-white"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 sm:px-6 bg-brand-gold rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-dark transition-colors text-white">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 sm:pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-500 font-bold">
          <p className="text-center leading-relaxed">© 2024 Ever Glow Derma Clinic. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
