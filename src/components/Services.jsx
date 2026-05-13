import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Acne Marks",
    category: "Dermatology",
    image: "https://shlokdermatology.com/wp-content/uploads/2025/11/Acne-Marks.webp",
  },
  {
    title: "Pigmentation Treatment",
    category: "Dermatology",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
  },
  {
    title: "Chemical Peel",
    category: "Dermatology",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
  },
  {
    title: "Hydra Facial",
    category: "Aesthetics",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
  },
  {
    title: "Laser Hair Removal",
    category: "Dermatology",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
  },
  {
    title: "Hair PRP Therapy",
    category: "Clinical",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBjjQ72tsTMTI04NY4HOAhPl7-_8HShwPVg&s",
  }
];

const Services = () => {
  return (
    <section id="services" className="pt-8 pb-6 bg-[#F3EEEA]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3E3232]/50 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Treatment Menu
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3E3232]">
              Our <span className="italic gold-gradient-text">Services</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0 pb-8 snap-x snap-mandatory hide-scrollbar">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center group relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden cursor-pointer rounded-lg"
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>
              <div className="absolute top-6 left-6 md:top-8 md:left-8 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] font-light mb-2 block opacity-80">{service.category}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-tight max-w-[180px] md:max-w-[200px] drop-shadow-md">{service.title}</h3>
              </div>
              <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-white/20 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
