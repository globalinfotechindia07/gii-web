"use client";

import React, { useEffect } from "react";
import Head from "next/head"; // ✅ ADDED
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

function Connect() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <>
      {/* ✅ SEO META ONLY */}
      <Head>
        <title>Contact Global Infotech India | Start Your Digital Journey</title>

        <meta
          name="description"
          content="Contact Global Infotech India for web development, AI solutions, and custom software services. Get a free consultation and scale your business with smart, secure, and scalable technology."
        />

        <meta
          name="keywords"
          content="contact IT company India, web development services contact, hire software developers India, AI solutions company contact, custom software development services, digital transformation services India, global infotech contact"
        />
      </Head>

      <section className="relative py-15 px-6 bg-[#020617] text-white overflow-hidden">

        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">

          {/* Label Header */}
          <div className="mb-8 flex justify-center" data-aos="fade-up">
            <span className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-black tracking-[0.3em] uppercase">
              Start Your Journey
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-5 tracking-tighter leading-[0.9]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
              Ready to Scale Up?
            </span>
          </h2>

          {/* Sub Heading */}
          <p
            className="text-xl text-gray-400 mb-10 mx-auto font-medium leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let’s build something extraordinary together —
            <span className="text-white"> Smart, Secure, and Scalable.</span>
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-11"
            data-aos="zoom-in"
            data-aos-delay="300"
          >

            {/* Get In Touch Button */}
            <a
              href="mailto:info@globalinfotechindia.com"
              className="
                group
                w-full md:w-auto
                px-12 py-6
                text-xl font-black
                rounded-2xl
                bg-blue-500
                hover:bg-blue-600
                transition-all duration-500
                flex items-center justify-center gap-3
                shadow-[0_0_40px_rgba(37,99,235,0.3)]
                hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]
                hover:-translate-y-2
              "
            >
              Get In Touch
              <Mail size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>

            {/* Explore Services Button */}
            <Link
              href="/services"
              className="
                group
                w-full md:w-auto
                px-12 py-6
                text-xl font-black
                rounded-2xl
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                hover:border-white/30
                hover:bg-white/10
                transition-all duration-500
                flex items-center justify-center gap-3
                hover:-translate-y-2
              "
            >
              Explore Services
              <ArrowRight
                size={22}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>

          </div>

          {/* Bottom Text */}
          <p className="mt-12 text-gray-600 font-bold uppercase tracking-[0.2em] text-xs" data-aos="fade-in">
            Free Consultation • 24/7 Priority Support • Expert Team
          </p>

        </div>
      </section>
    </>
  );
}

export default Connect;