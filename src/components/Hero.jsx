import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F3EEEA] pt-20 pb-8 overflow-hidden">
      {/* WhatsApp Floating Button - Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-sm shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={24} fill="currentColor" />
        </a>
      </div>

      <div className="container-custom h-full relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Left Column - Arched Image & Call Info */}
          <div className="order-3 lg:order-1 lg:col-span-3 flex flex-col items-center mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-[45%] left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 w-[55%] sm:w-[40%] lg:w-full aspect-[3/4] rounded-t-full overflow-hidden border-[6px] lg:border-[16px] border-white/80 lg:border-white/50 mb-0 lg:mb-8 z-10 shadow-2xl lg:shadow-none"
            >
              <img 
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80" 
                alt="Radiant Skin" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center mt-8 lg:mt-0 relative z-20">
              <span className="text-[#3E3232] font-serif text-2xl italic block mb-4">Call Us:</span>
              <a 
                href="tel:+919000235537"
                className="inline-block px-6 py-3 bg-[#1A1A1A] text-white font-mono text-sm tracking-widest border-2 border-[#D4C1A5] shadow-[4px_4px_0px_0px_#D4C1A5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                +91 9000235537
              </a>
            </div>
          </div>

          {/* Center Column - Headline & Description */}
          <div className="absolute top-[15%] sm:top-[20%] left-1/2 -translate-x-1/2 w-[90%] z-10 lg:static lg:translate-x-0 lg:w-auto order-2 lg:col-span-5 text-center lg:text-left mt-0 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6 lg:mb-8 text-white lg:text-[#3E3232] drop-shadow-md lg:drop-shadow-none">
                <span className="text-brand-gold lg:gold-gradient-text">Healthy</span> Skin,<br />
                <span className="italic text-white lg:text-inherit"><span className="text-brand-gold lg:gold-gradient-text">Confident</span> You</span>
              </h1>
              <p className="hidden lg:block text-white/90 lg:text-[#3E3232]/70 text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 drop-shadow-md lg:drop-shadow-none">
                Experience the perfect blend of advanced dermatology and personalized treatments, 
                designed to enhance your natural beauty and ensure long-lasting skin health. 
                Because your skin deserves nothing but the best.
              </p>
              <button className="px-10 py-4 mt-2 lg:mt-0 bg-brand-gold lg:bg-[#2D2424] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#1A1A1A] transition-colors shadow-lg lg:shadow-none">
                Book A Visit
              </button>
            </motion.div>
          </div>

          {/* Right Column - Large Arched Image */}
          <div className="order-1 lg:order-3 lg:col-span-4 relative w-[100vw] left-1/2 -translate-x-1/2 lg:w-auto lg:left-auto lg:translate-x-0 mt-0 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative w-full h-[85vh] lg:h-auto lg:aspect-[4/5] bg-[#2D2424] rounded-none lg:rounded-t-full overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80" 
                alt="Luxury Treatment" 
                className="w-full h-full object-cover opacity-90 lg:opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 lg:hidden pointer-events-none"></div>
              
              {/* Overlapping Line Art Illustration (Simulated with a div or SVG) */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-40 translate-y-1/4 -translate-x-1/4">
                <svg viewBox="0 0 200 200" className="w-full h-full text-white/50 stroke-current fill-none">
                  <path d="M40,160 Q80,40 160,160 T280,160" strokeWidth="0.5" />
                  <circle cx="100" cy="80" r="40" strokeWidth="0.5" />
                  <path d="M100,120 Q100,180 140,180" strokeWidth="0.5" />
                </svg>
              </div>
            </motion.div>
            
            {/* Small floating element */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#F3EEEA] rounded-full border border-[#D4C1A5] flex items-center justify-center animate-spin-slow overflow-hidden">
               <div className="w-12 h-12 rounded-full border-t border-brand-gold/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;