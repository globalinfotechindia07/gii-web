"use client";

import React from "react";
import { motion } from "framer-motion";

const ExpertTeam = () => {

  const experts = [
    { initials: "DT", name: "Dinesh Tawade", role: "TEAM LEAD", bio: "Leads the development team with expertise in building end-to-end web applications using modern frontend and backend technologies." },
    { initials: "MS", name: "Mansi Sharma", role: "FULL STACK DEVELOPER", bio: "Skilled in React, Node.js and database design, delivering robust and scalable web solutions." },
    { initials: "RI", name: "Rohan Itenkar", role: "FULL STACK DEVELOPER", bio: "Passionate developer with hands-on experience across the full software development lifecycle." },
    { initials: "JS", name: "Jayesh Sharma", role: "PERFORMANCE MARKETER", bio: "Data-driven marketer specializing in Google Ads, Meta campaigns and ROI-focused digital strategies." },
    { initials: "RN", name: "Riddhi Nahate", role: "FLUTTER DEVELOPER", bio: "Specializes in building beautiful cross-platform mobile applications using Flutter for iOS and Android." },
    { initials: "GD", name: "Gayatri Dadore", role: "HR", bio: "Manages talent acquisition, employee relations and company culture to build a thriving team at GII." },
    { initials: "JK", name: "Jay Karangale", role: "BUSINESS DEVELOPMENT ASSOCIATE", bio: "Identifies new business opportunities and nurtures client relationships to drive GII's growth." }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="relative bg-[#0b0f2a] py-24 px-6 md:px-20 text-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block border border-blue-500/30 text-blue-400 text-xs tracking-widest px-6 py-2 rounded-full mb-6 uppercase"
      >
        Experts
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-16"
      >
        Meet Our Expert Team
      </motion.h2>

      {/* TEAM GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >

        {experts.map((expert, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -12, scale: 1.03 }}
            className="group relative bg-[#111633] p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition duration-300 overflow-hidden"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-xl" />

            {/* Avatar */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white"
            >
              {expert.initials}
            </motion.div>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mb-1">
              {expert.name}
            </h3>

            {/* Role */}
            <p className="text-blue-400 text-[11px] font-bold mb-4 tracking-wider">
              {expert.role}
            </p>

            {/* Bio */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {expert.bio}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
};

export default ExpertTeam;