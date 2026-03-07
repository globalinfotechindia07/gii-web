"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

const partners = [
  { name: "GIBC UK", color: "group-hover:text-blue-500", desc: "Global India Business Corridor" },
  { name: "Kanu Ventures", color: "group-hover:text-cyan-400", desc: "Powering the AI Economy" },
  { name: "Felix-ITs", color: "group-hover:text-red-500", desc: "Felix IT Systems" },
  { name: "Sarthi NGO", color: "group-hover:text-sky-500", desc: "Sarthi Bahuuddeshiya Sanstha, Wardha" }
];

const PartnersSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-expo",
    });
  }, []);

  return (
    <section className="relative py-40 bg-[#020617] text-white overflow-hidden">
      
      {/* Background Dots Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#1e293b 1.5px, transparent 1.5px)`, 
           backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading Section - Bold & Massive */}
        <div className="text-center mb-28" data-aos="fade-up">
          <div className="flex justify-center items-center gap-3 mb-6">
             <span className="h-[2px] w-12 bg-blue-500"></span>
             <p className="text-blue-400 font-black tracking-[0.4em] text-sm md:text-base uppercase">
               Global Networks
             </p>
             <span className="h-[2px] w-12 bg-blue-500"></span>
          </div>

          <h2 className="text-5xl md:text-5xl lg:text-6xl font-black mb-10 tracking-tighter leading-tight">
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Industry Giants
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-medium">
            We dont just use technology; we partner with the architects of the digital age to build your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative"
            >
              {/* Card Container */}
              <div className="
                relative overflow-hidden
                h-40 flex flex-col items-center justify-center
                rounded-[2.5rem] border border-white/10
                bg-white/[0.03] backdrop-blur-3xl
                transition-all duration-700
                hover:border-blue-500/50 hover:bg-white/[0.08]
                hover:-translate-y-4
                cursor-pointer
              ">
                
                {/* Shimmer Effect using Tailwind animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                </div>

                {/* Partner Name */}
                <span className={`text-3xl md:text-2x2 font-black tracking-tighter text-gray-400 transition-all duration-500 ${partner.color} group-hover:scale-110 mb-2`}>
                  {partner.name}
                </span>
                
                <p className="text-gray-500 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-center px-4">
                  {partner.desc}
                </p>

                {/* Corner Icon */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="text-blue-400" size={28} />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[2.8rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          ))}
        </div>

        {/* Massive Certification Badge */}
        <div className="mt-32 flex justify-center" data-aos="zoom-in">
           <div className="group flex flex-col md:flex-row items-center gap-6 px-8 md:px-12 py-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-500">
              <div className="p-4 bg-emerald-500/20 rounded-full animate-pulse">
                <ShieldCheck className="text-emerald-400" size={40} />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-2xl md:text-3xl font-black text-white">Certified Enterprise Partner</span>
                <span className="text-gray-500 text-lg font-medium tracking-wide">Authorized to deploy high-scale solutions worldwide</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;