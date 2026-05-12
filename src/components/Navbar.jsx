import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/#contact' },
  ];



  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-2 md:py-4 border-b border-brand-gold/10' : 'bg-transparent py-4 md:py-8'
        }`}
    >
      {/* <div className="container-custom flex justify-between items-center"> */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center  gap-2 md:gap-4 group cursor-pointer shrink-0">
          <div className="w-10 h-10 md:w-14 md:h-14 relative overflow-hidden rounded-full border border-brand-gold/20 p-1 bg-white/50 backdrop-blur-sm group-hover:border-brand-gold/50 transition-all duration-500 shrink-0">
            <img
              src="/logo.png"
              alt="Ever Glow Logo"
              className="w-full h-full object-contain mix-blend-multiply"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML += '<span class="text-brand-gold font-serif font-bold text-xl">EG</span>';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-base sm:text-xl md:text-2xl tracking-[0.1em] md:tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-brand-charcoal' : 'text-brand-charcoal'} whitespace-nowrap`}>
              EVER GLOW
            </span>
            <span className="text-[6px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-gold font-bold whitespace-nowrap">Derma Clinic</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <button className="px-8 py-3 bg-brand-gold text-white text-[11px] font-bold uppercase tracking-widest hover:bg-brand-gold-dark transition-all duration-500 shadow-lg shadow-brand-gold/20">
            Book Now
          </button>
        </div>


        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-4 shrink-0">
          <button className="p-2 text-brand-gold">
            <Phone size={20} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-charcoal"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
