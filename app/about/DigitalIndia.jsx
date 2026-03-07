"use client";

import { CheckCircle } from "lucide-react";
import "./about.css";

export default function AboutSection() {
  const leftPoints = [
    "Innovation First",
    "Security Driven",
    "Scalable Solutions",
  ];

  const rightPoints = [
    "Client-Centric",
    "On-Time Delivery",
    "24/7 Support",
  ];

  return (
    <section className="bg-[#050816] text-white py-20 px-6">
      <div className="mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Building a{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Digital India
          </span>{" "}
          from Nagpur
        </h2>

        {/* Description */}
        <div className="py-5 md:mx-17 sm:mx-6 text-gray-400 text-sm md:text-lg leading-relaxed space-y-2 text-justify">
          <p>
            Global Infotech India Pvt. Ltd. is a Nagpur-based IT company delivering
            cutting-edge technology solutions to businesses, schools, and
            enterprises across India.
          </p>

          <p>
            Founded with a vision to make world-class technology accessible to
            every business, we've grown into a trusted partner for 500+ clients.
          </p>

          <p>
            From custom web and mobile apps to full-scale SaaS platforms and ERP
            systems, we bring innovation, reliability, and expertise to every
            project we undertake.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-14 md:ml-17">

  {/* Left */}
  <div className="space-y-6 flex flex-col font-center">
    {leftPoints.map((item, index) => (
      <div key={index} className="flex items-center gap-3 whitespace-nowrap">
        <CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
        <span className="text-gray-300 text-sm md:text-base">
          {item}
        </span>
      </div>
    ))}
  </div>

  {/* Right */}
  <div className="space-y-6 flex flex-col font-center md:mx-25">
    {rightPoints.map((item, index) => (
      <div key={index} className="flex items-center gap-3 whitespace-nowrap">
        <CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
        <span className="text-gray-300 text-sm md:text-base">
          {item}
        </span>
      </div>
    ))}
  </div>

</div>

      </div>
    </section>
  );
}