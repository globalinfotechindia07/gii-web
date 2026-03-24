"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Handshake } from "lucide-react";

const ClientsSection = () => {

  const clients = [
    { name: "Global Infotech India Pvt. Ltd.", image: "/images/Global Infotech.jpeg" },
    { name: "Kanu Ventures", image: "/images/kanu-logo.jpeg" },
    { name: "GIBC UK", image: "/images/gibc-logo.png" },
    { name: "Felix-ITS", image: "/images/felix-logo.png" },
    { name: "Sarthi", image: "/images/sarthi-logo.png" },
    { name: "Shubh-Labh Finance", image: "/images/Shubh-Labh Finance.jpeg" },
    { name: "Kshitij Wankhade", image: "/images/Kshitij.jpeg" },
  ];

  // useEffect(() => {
  //   AOS.init({
  //     duration: 0,
  //     once: true,
  //     easing: "ease-in-out",
  //   });
  // }, []);

  const scrollClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative py-15 bg-[#020617] text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className=" mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6">
            <Handshake size={18} className="text-blue-400" />
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-8">
            Powering Industry Leaders
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From innovative NGOs to global tech ventures, we’ve helped diverse
            organizations redefine their digital capabilities.
          </p>

        </div>

        {/* Infinite Scroll Logos */}
        <div className="relative flex overflow-hidden py-10 mask-fade-edges">

          <div className="flex animate-marquee gap-14">

            {scrollClients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center flex-shrink-0 w-[230px] h-[180px] rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg"
              >

                {/* Client Logo */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-[90px] object-contain opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300 rounded-[1rem]" 
                />

                {/* Client Name */}
                <p className="text-base font-semibold text-gray-300 mt-5 text-center px-3 group-hover:text-blue-400 transition">
                  {client.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Marquee Animation */}
      <style jsx>{`

        .animate-marquee {
          width: max-content;
          animation: marquee 35s linear infinite;
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