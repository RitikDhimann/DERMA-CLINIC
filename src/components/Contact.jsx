import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 pt-4 md:pt-8 pb-20 md:pb-20 bg-brand-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-xs">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 mb-6 md:mb-8">Begin Your <br /><span className="gold-text italic">Glow Journey</span></h2>
            
            <p className="text-gray-500 mb-12 leading-relaxed">
              Schedule your consultation today and take the first step towards 
              the skin you've always dreamed of.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-sm text-gray-400">123 Luxury Lane, Aesthetic District, City 45678</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-sm text-gray-400">+1 (234) 567-890</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-sm text-gray-400">hello@everglowclinic.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-charcoal text-white rounded-full text-sm font-medium hover:bg-black transition-colors w-full sm:w-auto">
                <InstagramIcon size={18} /> Instagram
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-10 md:p-12 rounded-[30px] md:rounded-[40px] shadow-2xl shadow-brand-gold/5 border border-gray-100"
          >
            <h3 className="text-2xl mb-8">Book an Appointment</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold/50 focus:bg-white outline-none transition-all focus:shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 234..." 
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold/50 focus:bg-white outline-none transition-all focus:shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold/50 focus:bg-white outline-none transition-all focus:shadow-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Message (Optional)</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about the treatment you're interested in..." 
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold/50 focus:bg-white outline-none transition-all focus:shadow-sm resize-none"
                ></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Send Request <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
