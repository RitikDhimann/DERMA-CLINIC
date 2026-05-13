import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Cpu, Heart, ShieldCheck, Award, Star } from 'lucide-react';

const reasons = [
  {
    title: "Experienced Specialists",
    description: "Our team of board-certified dermatologists and aesthetic experts ensure precision in every procedure.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "Modern Technology",
    description: "We use the latest FDA-approved equipment and innovative techniques for superior clinical outcomes.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Personalized Care",
    description: "Every treatment plan is customized to your specific skin needs and long-term aesthetic goals.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Safe & Hygienic",
    description: "We maintain international standards of hygiene and safety protocols for a worry-free experience.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-4 md:pt-8 pb-4 md:pb-8 bg-brand-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-xs">Why Ever Glow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 mb-6 md:mb-8 leading-tight">
              The Gold Standard in <br className="hidden sm:block" />
              <span className="gold-text italic">Aesthetic Medicine</span>
            </h2>
            <p className="text-gray-500 mb-8 md:mb-10 leading-relaxed max-w-lg text-sm sm:text-base">
              We combine artistic vision with medical precision to help you reveal your 
              most confident self. Our commitment to excellence has made us the 
              preferred choice for premium skincare.
            </p>
            
            <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-3xl border border-brand-gold/10 shadow-xl shadow-brand-gold/5 max-w-md">
              <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <div className="flex gap-1 text-brand-gold mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="sm:w-[14px] sm:h-[14px]" fill="#D4AF37" />)}
                </div>
                <p className="font-bold text-xs sm:text-sm">Voted Best Aesthetic Clinic 2023</p>
                <p className="text-[10px] sm:text-xs text-gray-400">By International Beauty Council</p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-brand-gold/20 transition-all duration-300"
              >
                <div className="text-brand-gold mb-3 md:mb-4">{reason.icon}</div>
                <h4 className="text-base md:text-lg mb-2 md:mb-3">{reason.title}</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
