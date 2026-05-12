import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { treatments } from '../data/treatments';

const Treatments = () => {
  return (
    <section id="treatments" className="pt-8 md:pt-24 pb-4 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E3232] mb-4">
              Our <span className="italic gold-gradient-text">Treatments</span>
            </h2>
            <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6"></div>
            <p className="text-[#3E3232]/70 max-w-2xl mx-auto font-sans text-lg tracking-wide">
              Personalized skincare solutions for every skin type
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        {/* Mobile Swiper */}
        <div className="md:hidden pb-4 px-4 relative">
          <Swiper
            style={{
              '--swiper-pagination-color': '#C5A028',
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full pb-14 group"
          >
            {treatments.map((treatment, index) => (
              <SwiperSlide key={index} className="w-[85%] sm:w-[60%]">
                <Link to={`/treatment/${treatment.slug}`} className="block h-full">
                  <motion.div
                    className="group h-full relative bg-white p-6 rounded-3xl border border-gray-50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] overflow-hidden"
                  >
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${treatment.color} opacity-40 blur-2xl transition-transform duration-500`}></div>
                    <div className={`w-14 h-14 rounded-2xl ${treatment.color} flex items-center justify-center mb-8 transition-transform duration-300`}>
                      <treatment.icon className={`w-7 h-7 ${treatment.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif text-[#3E3232] mb-4 transition-colors duration-300">{treatment.name}</h3>
                    <p className="text-[#3E3232]/60 font-sans text-sm leading-relaxed mb-6">{treatment.description}</p>
                    <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold/40 transition-colors duration-300">
                      <span>View Details</span>
                      <div className="ml-2 w-4 h-[1px] bg-brand-gold/20 transition-all duration-300"></div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="custom-swiper-button-prev absolute left-0 top-[40%] -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-brand-gold/20 flex items-center justify-center text-brand-gold cursor-pointer hover:bg-brand-gold hover:text-white transition-all active:scale-95">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </div>
          <div className="custom-swiper-button-next absolute right-0 top-[40%] -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-brand-gold/20 flex items-center justify-center text-brand-gold cursor-pointer hover:bg-brand-gold hover:text-white transition-all active:scale-95">
            <ChevronRight size={20} strokeWidth={2.5} />
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 pb-8">
          {treatments.map((treatment, index) => (
            <Link to={`/treatment/${treatment.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group h-full relative bg-white p-6 rounded-3xl border border-gray-50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${treatment.color} opacity-40 blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`w-14 h-14 rounded-2xl ${treatment.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <treatment.icon className={`w-7 h-7 ${treatment.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-[#3E3232] mb-4 group-hover:text-brand-gold transition-colors duration-300">{treatment.name}</h3>
                <p className="text-[#3E3232]/60 font-sans text-sm leading-relaxed mb-6">{treatment.description}</p>
                <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300">
                  <span>View Details</span>
                  <div className="ml-2 w-4 h-[1px] bg-brand-gold/20 group-hover:w-8 group-hover:bg-brand-gold transition-all duration-300"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
