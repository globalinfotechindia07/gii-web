"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        btnRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-24 px-6 text-white overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-950" />

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg">
          <Sparkles size={16} className="text-blue-400" />

          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-blue-100">
            Leading India Digital Evolution
          </p>
        </div>

        {/* Heading */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8"
        >
          Architecting{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Next-Gen
          </span>
          <br />
          Digital Experiences
        </h1>

        {/* Description */}
        <p
          ref={textRef}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We transform bold ideas into enterprise-grade reality. Empowering
          businesses with elite Web, AI, and Cloud architecture.
        </p>

        {/* Buttons */}
        <div
          ref={btnRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#services"
            className="group relative px-10 py-4 rounded-2xl font-bold overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 group-hover:scale-110 transition-transform duration-500" />

            <span className="relative flex items-center gap-2">
              Explore Our Tech

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>

          <Link
            href="#contact"
            className="px-10 py-4 rounded-2xl font-bold backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Work With Us
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>

          <span className="text-[10px] uppercase tracking-widest font-bold">
            Scroll
          </span>
        </div>
      </div>

      {/* Side Text */}
      <div className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 rotate-90">
        <span className="text-white/5 text-9xl font-black tracking-tight select-none">
          INNOVATION
        </span>
      </div>
    </section>
  );
}