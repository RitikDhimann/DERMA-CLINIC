import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ShieldCheck, Sparkles, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const stats = [
  { icon: Users, label: "1000+ Happy Clients", value: "Trust" },
  { icon: ShieldCheck, label: "5000+ Treatments", value: "Expertise" },
  { icon: Star, label: "5★ Client Reviews", value: "Excellence" }
];

const transformations = [
  {
    title: "Acne Treatment",
    description: "Clear acne & reduced marks after 6 sessions.",
    before: "https://shlokdermatology.com/wp-content/uploads/2025/11/Acne-Marks.webp",
    after: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
  },
  {
    title: "Hydra Facial",
    description: "Instant glow and deep hydration for a rejuvenated look.",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80",
  },
  {
    title: "Laser Hair Removal",
    description: "Smooth, hair-free skin with advanced laser technology.",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
  },
  {
    title: "Skin Brightening",
    description: "Effective pigmentation reduction and even skin tone.",
    before: "https://images.unsplash.com/photo-1512290902241-11885b59744c?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
  },


];

const testimonials = [
  {
    category: "Skin Brightening Journey",
    quote: "I was struggling with dull skin for years. After visiting Ever Glow, the difference is night and day. My skin feels alive again!",
    name: "Priya Sharma",
    role: "Digital Creator",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  },
  {
    category: "Laser Hair Removal Experience",
    quote: "The personalized care and advanced laser technology gave me completely smooth, hair-free skin. Absolutely painless and premium service!",
    name: "Ananya Desai",
    role: "Fashion Model",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"
  },
  {
    category: "Hydra Facial Glow",
    quote: "Instant deep hydration and an incredible visible glow right before my wedding. The best aesthetic decision I've ever made.",
    name: "Meera Kapoor",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-4 pb-4 md:pb-24 bg-white relative">
      <div className="container-custom">



        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Real Client Transformations
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3E3232] mb-6">
              Portfolio
            </h2>
            <p className="text-[#3E3232]/60 text-base md:text-lg leading-relaxed font-light">
              “See visible skin, hair & aesthetic treatment results achieved with expert care at Ever Glow Derma Clinic.”
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-6 md:gap-y-12 px-4 md:px-0 pb-8 snap-x snap-mandatory hide-scrollbar">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="group shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center"
            >
              <div className="relative mb-6 bg-[#F3EEEA] rounded-[1.5rem] p-2 shadow-sm hover:shadow-xl transition-all duration-700">
                <div className="grid grid-cols-2 gap-2">
                  {/* Before */}
                  <div className="relative aspect-[3/4] rounded-[1.2rem] overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                    <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[7px] px-2 py-0.5 uppercase tracking-widest backdrop-blur-md rounded-full font-bold">Before</div>
                  </div>
                  {/* After */}
                  <div className="relative aspect-[3/4] rounded-[1.2rem] overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 shadow-xl">
                    <img src={item.after} alt="After" className="w-full h-full object-cover transition-all duration-1000" />
                    <div className="absolute top-2 right-2 bg-brand-gold text-white text-[7px] px-2 py-0.5 uppercase tracking-widest rounded-full font-bold shadow-lg">After</div>
                  </div>
                </div>

                {/* Floating "Real Results" Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#D4C1A5]/20 flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles size={10} className="text-brand-gold" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#3E3232]">Visible Results</span>
                </div>
              </div>

              <div className="px-2 text-center">
                <h3 className="text-lg font-serif text-[#3E3232] mb-2">{item.title}</h3>
                <p className="text-[10px] text-[#3E3232]/50 font-light max-w-xs mx-auto mb-3 italic leading-tight">
                  ✨ {item.description}
                </p>
                <div className="w-8 h-[1px] bg-[#D4C1A5]/30 mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-10 mb-16 px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Authentic Stories</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E3232] uppercase tracking-tighter"><span className="italic">Testimonials</span></h2>
            <div className="w-12 h-[1px] bg-[#D4C1A5] mx-auto mt-6"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Swiper
              style={{
                '--swiper-pagination-color': '#C5A028',
              }}
              spaceBetween={30}
              grabCursor={true}
              slidesPerView={1}
              navigation={{
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              modules={[Pagination, Navigation, Autoplay]}
              className="w-full pb-14"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group bg-white rounded-3xl md:rounded-[3rem] overflow-hidden shadow-xl shadow-black/5 border border-[#D4C1A5]/10 mx-auto">
                    <div className="flex flex-col md:flex-row items-stretch">
                      {/* Video/Image Side */}
                      <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden bg-brand-charcoal min-h-[220px] sm:min-h-[280px] md:min-h-[400px]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-lg">
                            <Play fill="white" className="text-white ml-0.5 sm:ml-1 w-4 h-4 sm:w-6 sm:h-6" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                          <span className="text-[8px] sm:text-[9px] text-white tracking-widest uppercase font-medium">Verified Client Story</span>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white">
                        <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[9px] mb-2 sm:mb-3 block">{item.category}</span>
                        <p className="text-base sm:text-lg md:text-2xl font-serif italic text-[#3E3232] leading-relaxed mb-6 md:mb-8">
                          "{item.quote}"
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4 border-t border-[#D4C1A5]/10 pt-4 sm:pt-6 mt-auto">
                          <img src={item.avatar} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-[#D4C1A5]/30 shadow-sm shrink-0" />
                          <div>
                            <h4 className="font-bold text-[#3E3232] uppercase tracking-widest text-xs">{item.name}</h4>
                            <span className="text-[8px] sm:text-[10px] text-[#D4C1A5] uppercase tracking-widest">{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="testimonial-button-prev absolute left-0 md:-left-5 top-[35%] md:top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-brand-gold/20 flex items-center justify-center text-brand-gold cursor-pointer hover:bg-brand-gold hover:text-white transition-all active:scale-95">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </div>
            <div className="testimonial-button-next absolute right-0 md:-right-5 top-[35%] md:top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-brand-gold/20 flex items-center justify-center text-brand-gold cursor-pointer hover:bg-brand-gold hover:text-white transition-all active:scale-95">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Instagram Feed Integration */}
        <div className="mt-32 mb-16">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Social Media</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E3232] uppercase tracking-tighter">Insta <span className="italic">Moments</span></h2>
            <div className="w-12 h-[1px] bg-[#D4C1A5] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-7xl mx-auto">
            {[
              { id: 1, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80", label: "Clinical Expertise" },
              { id: 2, img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80", label: "Skin Problems" },
              { id: 3, img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80", label: "Treatment Care" },
              { id: 4, img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80", label: "Aesthetic Results" },
              { id: 5, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80", label: "Medical Derm" },
              { id: 6, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80", label: "Skin Success" },
            ].map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
              >
                <img 
                  src={post.img} 
                  alt={post.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <div className="flex gap-4 mb-2">
                    <span className="flex items-center gap-1 text-[10px]"><Star size={12} fill="white" /> 124</span>
                    <span className="flex items-center gap-1 text-[10px]"><Sparkles size={12} fill="white" /> 12</span>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest font-bold opacity-80 text-center">{post.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.instagram.com/everglowdermaclinic?igsh=Y3p3YTFyd3N0OG01" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-[#D4C1A5] text-[#3E3232] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-white transition-all"
            >
              Follow @EverGlowClinic
            </a>
          </div>
        </div>



        {/* Trust Stats Section - Moved to bottom */}
        <div className="mt-16 grid grid-cols-3 gap-2 md:gap-8 border-y border-[#D4C1A5]/10 py-8 px-2 md:px-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group flex flex-col items-center justify-start"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-gold mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <h4 className="text-[11px] sm:text-sm md:text-xl font-serif italic text-[#3E3232] leading-tight mb-1">{stat.label}</h4>
              <span className="text-[6px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#D4C1A5]">{stat.value}</span>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Portfolio;
