"use client";

import React, { useEffect } from "react";
import Head from "next/head"; // ✅ ADDED
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

import {
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Brain,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom responsive websites & web apps built with the latest technologies for every screen size.",
    gradient: "from-blue-500/20 to-cyan-500/0",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native & cross-platform mobile apps for iOS and Android using Flutter & React Native.",
    gradient: "from-purple-500/20 to-pink-500/0",
  },
  {
    icon: Cloud,
    title: "SaaS & ERP Solutions",
    description: "Scalable cloud-based SaaS platforms and ERP systems for schools, businesses & enterprises.",
    gradient: "from-emerald-500/20 to-teal-500/0",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Penetration testing, security audits, firewall setup & enterprise-grade network architecture.",
    gradient: "from-red-500/20 to-orange-500/0",
  },
  {
    icon: Brain,
    title: "IT Consulting",
    description: "Strategic IT consulting & workflow automation to align technology with your business goals.",
    gradient: "from-indigo-500/20 to-blue-500/0",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, Google Ads & social media campaigns that drive real traffic and business growth.",
    gradient: "from-yellow-500/20 to-amber-500/0",
  },
];

const ServiceCard = ({ service, delay }) => {
  const Icon = service.icon;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative h-full p-px rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 group-hover:from-blue-500/50 transition-colors duration-500" />

      <div className="relative h-full bg-[#0f172a]/80 backdrop-blur-2xl p-8 rounded-[calc(1.5rem-1px)] flex flex-col">

        <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            <Icon size={30} className="text-blue-400 group-hover:text-white transition-colors" />
          </div>

          <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-300 transition-colors">
            {service.title}
          </h3>

          <p className="text-gray-400 text-base leading-relaxed">
            {service.description}
          </p>
        </div>

      </div>
    </div>
  );
};

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      {/* ✅ SEO META ONLY */}
      <Head>
        <title>IT Services | Web Development, App Development & Digital Solutions</title>

        <meta
          name="description"
          content="Explore Global Infotech India's services including web development, mobile app development, SaaS solutions, cybersecurity, IT consulting, and digital marketing for scalable business growth."
        />

        <meta
          name="keywords"
          content="web development services, mobile app development, SaaS development, ERP solutions, cybersecurity services, IT consulting, digital marketing services, SEO services India, software development company"
        />
      </Head>

      <section id="services" className="relative bg-[#020617] text-white py-15 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)] pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-15 gap-6 ">
            <div className="max-w-2xl" data-aos="fade-right">
              <h2 className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase ">
                Our Expertise
              </h2>
              <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                Future-Ready <br /> Digital Solutions
              </h2>
            </div>
            <div className="max-w-sm" data-aos="fade-left">
              <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-blue-500/30 pl-6">
                We bridge the gap between complex ideas and seamless digital reality.
              </p>
            </div>
          </div>

          {/* MOBILE SLIDER */}
          <div className="lg:hidden" data-aos="zoom-in">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1.1}
              centeredSlides={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 4000 }}
              loop={true}
              className="pb-16"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard service={service} delay={0} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} delay={index * 100} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesSection;