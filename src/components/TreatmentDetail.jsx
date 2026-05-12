import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, User, Sparkle, ShieldAlert, Zap, Clock, Calendar, MessageCircle, AlertCircle } from 'lucide-react';
import { treatments } from '../data/treatments';
import Navbar from './Navbar';
import Footer from './Footer';

const TreatmentDetail = () => {
  const { slug } = useParams();
  const treatment = treatments.find(t => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Treatment not found</h2>
          <Link to="/" className="btn-primary">Go Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF9]">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className={`${treatment.color} py-10 px-6 overflow-hidden relative`}>
          <div className="container-custom relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#3E3232]/60 hover:text-brand-gold transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">All Treatments</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/50 backdrop-blur-md text-brand-gold text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
                  <Sparkle className="w-3 h-3 mr-2" /> {treatment.tagline || 'Signature Treatment'}
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-[#3E3232] mb-2 leading-tight">
                  {treatment.name}
                </h1>
                <p className="text-sm md:text-base text-[#3E3232]/70 font-sans leading-relaxed max-w-md">
                  {treatment.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative">
                  {/* Decorative Gold Ring */}
                  <div className="absolute -inset-4 border border-brand-gold/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  
                  <div className="w-56 h-56 rounded-full p-2 border border-white/50 bg-white/30 backdrop-blur-md shadow-2xl overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-gold/10">
                      <img 
                        src={treatment.image} 
                        alt={treatment.name} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                  
                  {/* Small Floating Icon Badge */}
                  <div className={`absolute -bottom-2 -right-2 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-gray-100`}>
                    <treatment.icon className={`w-7 h-7 ${treatment.iconColor}`} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Details (8 cols) */}
              <div className="lg:col-span-8">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-brand-gold/5 aspect-[16/9]"
                >
                  <img src={treatment.image} alt={treatment.name} className="w-full h-full object-cover" />
                </motion.div>

                <div className="space-y-16">
                  {/* What is it? Section (NEW) */}
                  {treatment.whatIsIt && (
                    <div>
                      <h2 className="text-3xl font-serif text-[#3E3232] mb-8 flex items-center">
                        <AlertCircle className="w-6 h-6 mr-4 text-brand-gold" /> What is {treatment.name}?
                      </h2>
                      <p className="text-lg text-[#3E3232]/70 font-sans leading-relaxed mb-8">
                        {treatment.whatIsIt}
                      </p>
                      {treatment.causes && (
                        <div className="flex flex-wrap gap-4">
                          {treatment.causes.map((cause, i) => (
                            <span key={i} className="px-5 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-[#3E3232]/60">
                              {cause}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* About */}
                  <div>
                    <h2 className="text-3xl font-serif text-[#3E3232] mb-8 flex items-center">
                      <span className="w-10 h-[1px] bg-brand-gold mr-4"></span> Clinical Overview
                    </h2>
                    <p className="text-lg text-[#3E3232]/70 font-sans leading-relaxed">
                      {treatment.fullDescription}
                    </p>
                  </div>

                  {/* Duration & Results Section (NEW) */}
                  {(treatment.duration || treatment.results) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 bg-white rounded-3xl border border-gray-100 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Duration</p>
                          <p className="text-lg font-serif text-[#3E3232]">{treatment.duration}</p>
                        </div>
                      </div>
                      <div className="p-8 bg-white rounded-3xl border border-gray-100 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Results</p>
                          <p className="text-lg font-serif text-[#3E3232]">{treatment.results}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* The Process */}
                  <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <h2 className="text-3xl font-serif text-[#3E3232] mb-10 flex items-center">
                      <Zap className="w-6 h-6 mr-4 text-brand-gold" /> Treatment Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {treatment.theProcess.map((step, index) => (
                        <div key={index} className="flex gap-4 group">
                          <span className="text-brand-gold font-serif text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                            0{index + 1}
                          </span>
                          <p className="text-[#3E3232]/80 font-medium pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precautions Section (NEW) */}
                  {treatment.precautions && (
                    <div className="p-10 bg-red-50/30 border border-red-100 rounded-[2.5rem]">
                      <h3 className="flex items-center text-red-400 font-bold uppercase tracking-widest text-[11px] mb-8">
                        <ShieldAlert className="w-5 h-5 mr-3" /> Precautions & Pre-care
                      </h3>
                      <div className="space-y-4">
                        {treatment.precautions.map((pre, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-[#3E3232]/70 text-sm leading-relaxed">{pre}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Before & After Gallery (NEW) */}
                  {treatment.beforeAfterGallery && (
                    <div>
                      <h2 className="text-3xl font-serif text-[#3E3232] mb-10 flex items-center">
                        <span className="w-10 h-[1px] bg-brand-gold mr-4"></span> Real Results
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {treatment.beforeAfterGallery.map((img, i) => (
                          <div key={i} className="rounded-3xl overflow-hidden aspect-[4/5] border border-gray-100 shadow-lg">
                             <img src={img} alt={`Before and After ${i}`} className="w-full h-full object-cover" />
                           
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Who it's for & Aftercare */}
                  {!treatment.precautions && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-10 bg-brand-gold/5 rounded-[2.5rem]">
                        <h3 className="flex items-center text-brand-gold font-bold uppercase tracking-widest text-[11px] mb-6">
                          <User className="w-4 h-4 mr-2" /> Who is it for?
                        </h3>
                        <p className="text-[#3E3232]/80 leading-relaxed italic">
                          {treatment.whoIsItFor}
                        </p>
                      </div>
                      <div className="p-10 bg-[#3E3232]/5 rounded-[2.5rem]">
                        <h3 className="flex items-center text-[#3E3232]/60 font-bold uppercase tracking-widest text-[11px] mb-6">
                          <ShieldAlert className="w-4 h-4 mr-2" /> Aftercare Tips
                        </h3>
                        <p className="text-[#3E3232]/80 text-sm leading-relaxed">
                          {treatment.aftercare}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Sticky Booking (4 cols) */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50 text-center">
                    <h3 className="text-2xl font-serif text-[#3E3232] mb-6">Book {treatment.name} Consultation</h3>
                    <div className="space-y-4 mb-8 text-left">
                      {treatment.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-[#3E3232]/60 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <button className="btn-primary w-full py-4 text-base tracking-widest">
                        Book Online Now
                      </button>
                      <button className="w-full py-4 px-6 border-2 border-green-500/20 text-green-600 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center justify-center hover:bg-green-50 transition-colors">
                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Specialist
                      </button>
                    </div>
                    <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-semibold">
                      Fastest Response on WhatsApp
                    </p>
                  </div>

                  <div className="glass-morphism p-8 rounded-[2rem] text-center">
                    <p className="text-[#3E3232]/50 text-sm italic mb-4">"Our expert dermatologists ensure that every treatment is tailored to your unique skin profile."</p>
                    <p className="text-brand-gold font-bold text-[10px] uppercase tracking-widest">Expert Consultation Included</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TreatmentDetail;
