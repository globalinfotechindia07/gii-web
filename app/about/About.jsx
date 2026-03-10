"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Target, ShieldCheck } from "lucide-react";

function About() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const GlassCard = ({ icon, title, text }) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 "
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-5 sm:mb-6">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {text}
      </p>
    </motion.div>
  );

  return (
    <div className="bg-[#020617] text-gray-300 min-h-screen py-10 sm:py-10 lg:py-10">

      {/* HERO SECTION */}
      <section className="relative px-6 sm:px-10 lg:px-16 mb-16 sm:mb-20 lg:mb-24">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[500px] lg:h-[650px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >

            <div className="inline-block border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.3em] px-5 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 uppercase">
              The Architecture of Growth
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight pt-10">
              About <span className="text-blue-500">Global Infotech</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-20 lg:px-60">
              We bridge the gap between complex digital challenges and seamless,
              scalable reality.
            </p>

          </motion.div>

        </div>
      </section>


      {/* GLASS CARDS */}
      <section className="px-6 sm:px-10 lg:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >

          <GlassCard
            icon={<BrainCircuit size={24} />}
            title="Strategic Vision"
            text="We architect systems that are not just functional, but future-proof."
          />

          <GlassCard
            icon={<Target size={24} />}
            title="Precision Execution"
            text="Clean, performant code delivered with rigorous attention to detail."
          />

          <GlassCard
            icon={<ShieldCheck size={24} />}
            title="Secure by Design"
            text="Security is not an afterthought; it is baked into every layer."
          />

        </motion.div>

      </section>


      {/* MISSION STRIP */}
      <section className="px-6 sm:px-10 lg:px-10 py-10 sm:py-24">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-600 p-6 sm:p-5 rounded-r-2xl"
        >

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Our Mission
          </h3>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            To empower institutions through proprietary technology that
            simplifies operations and accelerates growth. We believe that
            technology should feel invisible, silent, and incredibly powerful.
          </p>

        </motion.div>

      </section>

    </div>
  );
}

export default About;