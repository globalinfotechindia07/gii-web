"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".hero-bg", { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
      .from(".hero-pill", { y: 20, opacity: 0, duration: 0.8 }, "-=1.2")
      .from(".hero-title", { y: 60, opacity: 0, duration: 1, skewY: 7 }, "-=0.6")
      .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .to(".mouse-indicator", { y: 10, repeat: -1, yoyo: true, duration: 1 });
  }, []);

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-24 px-6 text-white overflow-hidden bg-black">
      
      {/* Background Video with Enhanced Overlays */}
      <div className="hero-bg absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Deep Vignette & Mesh Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#020617]"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Glass Pill */}
        <div className="hero-pill inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <Sparkles size={16} className="text-blue-400" />
          <p className="text-xs sm:text-sm text-blue-100 tracking-[0.2em] font-bold uppercase">
            Leading India's Digital Evolution
          </p>
        </div>

        {/* Dynamic Title */}
        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
          Architecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Next-Gen</span>
          <br /> Digital Experiences
        </h1>

        {/* Refined Description */}
        <p className="hero-desc text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We transform bold ideas into enterprise-grade reality. Empowering 
          businesses with elite Web, AI, and Cloud architecture.
        </p>

        {/* Buttons with Glassmorphism */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="#services"
            className="hero-btn group relative px-10 py-4 rounded-2xl font-bold transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 transition-transform group-hover:scale-110"></div>
            <span className="relative flex items-center gap-2">
              Explore Our Tech <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="#contact"
            className="hero-btn group px-10 py-4 rounded-2xl font-bold backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl"
          >
            Work With Us
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <div className="mouse-indicator w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full"></div>
           </div>
           <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        </div>
      </div>

      {/* Side Decorative Element */}
      <div className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 rotate-90">
        <span className="text-white/5 text-9xl font-black tracking-tighter select-none">INNOVATION</span>
      </div>
    </section>
  );
};

export default HeroSection;