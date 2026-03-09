"use client";

import React, { useEffect } from "react";
import { Lightbulb, Users, ArrowRight, LockKeyhole, HousePlus, ShieldHalf, CalendarCheck, ClockCheck} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const chooseUsData = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies including AI, cloud & automation to build future-ready digital solutions.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: LockKeyhole,
    title: "Security First",
    description: "Every solution adheres to industry-leading security standards, keeping your data fully protected.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HousePlus,
    title: "Scalable Architecture",
    description: "Systems built to grow with your business — from startups to large-scale enterprises.",
    color: "from-emerald-500 to-teal-400",
  },

    {
    icon: Users,
    title: "Expert Team",
    description: "A team of certified professionals with deep expertise across web, mobile, AI, cloud & cybersecurity.",
    color: "from-emerald-500 to-teal-400",
  },
    {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    description: "Agile methodology & strict project timelines ensure your product is delivered on time, every time.",
    color: "from-emerald-500 to-teal-400",
  },

  {
    icon: ClockCheck,
    title: "24/7 Support",
    description: "Round-the-clock technical support & AMC packages to keep your systems running without interruption.",
    color: "from-emerald-500 to-teal-400",
  },


];

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            Our Edge
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Why Choose Us
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            We dont just build software; we engineer growth. Our methodology combines 
            cutting-edge tech with human-centric design to scale your vision.
          </p>

          <button className="group mt-10 relative px-8 py-3.5 font-semibold text-white transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-2xl">
            <span className="flex items-center gap-2">
              Get Started 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {chooseUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative p-px rounded-3xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Border Gradient Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Main Card Content */}
                <div className="relative h-full bg-[#0f172a]/40 backdrop-blur-2xl border border-white/5 p-8 rounded-[calc(1.5rem-1px)] flex flex-col items-start overflow-hidden">
                  
                  {/* Hover Shimmer */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer" />

                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-blue-500/10`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-8">
                    
                    <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 group/btn">
                      Explore Tech Stack
                      <div className="h-px w-0 group-hover/btn:w-8 bg-blue-400 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;