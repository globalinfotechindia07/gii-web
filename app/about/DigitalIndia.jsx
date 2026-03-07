"use client";

import { CheckCircle, Zap, ShieldCheck, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const points = [
    { text: "Innovation First", icon: <Zap size={18} /> },
    { text: "Security Driven", icon: <ShieldCheck size={18} /> },
    { text: "Scalable Solutions", icon: <Target size={18} /> },
    { text: "Client-Centric", icon: <CheckCircle size={18} /> },
    { text: "On-Time Delivery", icon: <CheckCircle size={18} /> },
    { text: "24/7 Support", icon: <CheckCircle size={18} /> },
  ];

  return (
    <section className="bg-[#020617] text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Building a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Digital India
            </span>{" "}
            from Nagpur
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p className="text-white font-medium">
              Global Infotech India Pvt. Ltd. is a premier IT powerhouse delivering cutting-edge technology to enterprises across India.
            </p>
            <p>
              Founded with a vision to make world-class technology accessible to every business, we've grown into a trusted partner for over 500+ clients.
            </p>
            <p>
              From custom web apps to full-scale SaaS ERP systems, we bring innovation and reliability to every project we undertake.
            </p>
          </motion.div>

          {/* Grid of Values */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            {points.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl flex items-center gap-3 hover:bg-white/[0.06] transition-colors"
              >
                <div className="text-blue-500">{item.icon}</div>
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}