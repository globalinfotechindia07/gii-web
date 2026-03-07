"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Handshake } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    "Global Infotech India Pvt. Ltd.",
    "Kiran Ventures",
    "GBC UK",
    "Kanu Ventures",
    "Felix-ITS",
    "Satish NGO",
    "Shivam NGO",
    "Kshitij Wankhade",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Doubling the array for a seamless infinite scroll effect
  const scrollClients = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-32 bg-[#020617] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6">
            <Handshake size={18} className="text-blue-400" />
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Trusted Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Powering Industry Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From innovative NGOs to global tech ventures, we’ve helped diverse 
            organizations redefine their digital capabilities.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden py-10 mask-fade-edges">
          {/* First Row: Moving Left */}
          <div className="flex animate-marquee whitespace-nowrap gap-8">
            {scrollClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 py-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-blue-400 transition-colors tracking-tight">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Static Mobile Grid (Fallback/Secondary View) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:hidden">
            {clients.map((client, index) => (
                <div key={index} className="p-4 rounded-xl border border-white/5 bg-white/5 text-center text-xs font-medium text-gray-500 italic uppercase tracking-widest">
                    {client}
                </div>
            ))}
        </div>

      </div>

      {/* Adding Custom CSS for Marquee in the same file or Global CSS */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-fade-edges {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;