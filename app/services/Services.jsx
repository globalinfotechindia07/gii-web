"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Database, BarChart3, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Code />, title: "Web Development", text: "Custom, responsive web applications built for speed and conversion." },
    { icon: <Smartphone />, title: "Mobile Apps", text: "Native and cross-platform apps designed for seamless user experiences." },
    { icon: <Cloud />, title: "Cloud Solutions", text: "Scalable cloud architecture to power your enterprise operations." },
    { icon: <Database />, title: "ERP Systems", text: "Streamlined resource planning tools for total business control." },
    { icon: <BarChart3 />, title: "Data Analytics", text: "Transforming raw data into actionable business intelligence." },
    { icon: <ShieldCheck />, title: "Cybersecurity", text: "Robust defense protocols to protect your digital assets." },
  ];

  return (
    <section className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-block border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-[0.3em] px-6 py-2 rounded-full mb-8 uppercase">
            What We Do
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Services</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Comprehensive IT solutions crafted for every business — from startups to large enterprises across India.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}