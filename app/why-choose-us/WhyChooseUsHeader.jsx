"use client";

import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUsHeader() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <section className="relative py-16 bg-[#020617] text-white overflow-hidden">

      {/* Blue Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[700px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div
        className="relative z-10 text-center mx-auto px-4"
        data-aos="fade-up"
      >

        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
          OUR EDGE
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Why Choose Us
        </h2>

        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
          We dont just build software; we engineer growth. Our methodology
          combines cutting-edge tech with human-centric design to scale your
          vision.
        </p>

        {/* ✅ Fixed Button */}
        <Link
          href="/contact-section"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 font-semibold text-white transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-xl group"
        >
          Get Started
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

      </div>
    </section>
  );
}

export default WhyChooseUsHeader;