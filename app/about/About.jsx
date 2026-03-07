"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Target, ShieldCheck } from "lucide-react";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const GlassCard = ({ icon, title, text }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );

  return (
    <div className="bg-[#020617] text-gray-300 min-h-screen py-24">
      
      {/* HERO SECTION */}
      <section className="relative px-6 mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-block border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-[0.3em] px-6 py-2 rounded-full mb-8 uppercase">
              The Architecture of Growth
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              About <span className="text-blue-500">Global Infotech</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We bridge the gap between complex digital challenges and seamless, scalable reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GLASSY CARDS SECTION */}
      <section className="px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
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
      <section className="px-6 py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-600 p-10 rounded-r-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed">
            To empower institutions through proprietary technology that simplifies 
            operations and accelerates growth. We believe that technology should 
            feel invisible, silent, and incredibly powerful.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;