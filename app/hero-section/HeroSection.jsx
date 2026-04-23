"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title children
    if (titleRef.current && titleRef.current.children) {
      tl.from(titleRef.current.children, {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        force3D: true
      });
    }

    // Animate text
    if (textRef.current) {
      tl.from(textRef.current, {
        y: 30,
        duration: 0.8,
        force3D: true
      }, "-=0.4");
    }

    // Animate button
    if (btnRef.current) {
      tl.from(btnRef.current, {
        scale: 0.9,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");
    }

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* TITLE */}
        <h1
          ref={titleRef}
          className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          <div className="will-change-transform">Build</div>
          <div className="text-gradient will-change-transform">Next-Gen</div>
          <div className="will-change-transform">Digital Experiences</div>
        </h1>

        {/* SUBTEXT */}
        <p
          ref={textRef}
          className="text-gray-200 text-lg md:text-xl mb-8"
        >
          We create modern websites and digital solutions that help
          businesses grow faster.
        </p>

        {/* BUTTON */}
        <div ref={btnRef}>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}