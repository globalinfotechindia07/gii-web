"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Handshake, Shield, Maximize, Users, Star } from "lucide-react";

function Value() {

  const values = [
    { icon: <Rocket size={24} />, title: "Innovation", text: "We constantly explore new technologies to build solutions ahead of the curve." },
    { icon: <Handshake size={24} />, title: "Integrity", text: "Transparent communication, honest timelines, and no hidden charges — always." },
    { icon: <Shield size={24} />, title: "Security", text: "Every product follows industry-leading security standards from day one." },
    { icon: <Maximize size={24} />, title: "Scalability", text: "Architectures designed to grow seamlessly from startup to enterprise scale." },
    { icon: <Users size={24} />, title: "Collaboration", text: "We work as an extension of your team — deeply invested in your success." },
    { icon: <Star size={24} />, title: "Excellence", text: "We don't just deliver projects — we craft experiences that make a lasting impact." },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-10 px-6 bg-[#020617] text-white overflow-hidden">

      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-[0.3em] px-6 py-2 rounded-full mb-8 uppercase"
        >
          Our Values
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What <span className="text-blue-500">Drives Us</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-20 lg:px-60 mb-16"
        >
          Core principles that guide every decision and every line of code we write.
        </motion.p>

        {/* VALUES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((v, i) => (
            <motion.div key={i} variants={item}>
              <ValueCard {...v} />
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group bg-white/[0.03] border border-white/10 p-8 rounded-3xl text-left hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md relative overflow-hidden"
    >

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl" />

      {/* Icon */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-12 h-12 flex items-center justify-center bg-blue-600/10 text-blue-400 rounded-2xl mb-6"
      >
        {icon}
      </motion.div>

      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>

    </motion.div>
  );
}

export default Value;