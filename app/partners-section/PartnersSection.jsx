"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ShieldCheck, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const partners = [
  { name: "GIBC UK", desc: "Global India Business Corridor" },
  { name: "Kanu Ventures", desc: "Powering the AI Economy" },
  { name: "Felix-ITs", desc: "Felix IT Systems" },
  { name: "Sarthi NGO", desc: "Sarthi Bahuuddeshiya Sanstha, Wardha" },
  { name: "GIBC UK", desc: "Global India Business Corridor" },
  { name: "Kanu Ventures", desc: "Powering the AI Economy" }
];

export default function PartnersSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className="relative py-10 bg-[#020617] text-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black">
          Trusted by the
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Industry Giants
          </span>
        </h2>
      </div>

      {/* Continuous Swiper */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false
        }}
        allowTouchMove={true}
      >

        {partners.map((partner, index) => (
          <SwiperSlide key={index} style={{ width: "260px" }}>

            <div className="group relative">

              {/* Glow */}
              <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* Card */}
              <div className="relative z-10 h-40 flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105 cursor-pointer">

                <span className="text-2xl font-black text-gray-400 group-hover:text-blue-400 transition">
                  {partner.name}
                </span>

                <p className="text-gray-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition">
                  {partner.desc}
                </p>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight size={22} className="text-blue-400" />
                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* Badge */}
      <div className="mt-24 flex justify-center">
        <div className="flex items-center gap-6 px-10 py-6 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">

          <div className="p-4 bg-emerald-500/20 rounded-full animate-pulse">
            <ShieldCheck className="text-emerald-400" size={35} />
          </div>

          <div>
            <p className="text-lg font-black">Certified Enterprise Partner</p>
            <p className="text-gray-400">
              Authorized to deploy high-scale solutions worldwide
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}