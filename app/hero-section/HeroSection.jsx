"use client";
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto text-center">
        <p className="text-blue-400 font-semibold mb-4 tracking-wider">SMART · SECURE · SCALABLE</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Innovative IT Solutions <br className="hidden sm:block" />
          for a Digital Future
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transforming ideas into technology — empowering schools, businesses & enterprises across India with Web, Mobile, AI, Cloud & More.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Our Services
          </Link>
          <Link href="#contact" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;