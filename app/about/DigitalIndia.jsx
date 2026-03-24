"use client";

import Head from "next/head"; // ✅ ADD THIS
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
    <>
      {/* ✅ SEO META KEYWORDS */}
      <Head>
        <meta
          name="keywords"
          content="global IT services company, web development company India, AI software development, SaaS development services, mobile app development, custom software development, digital transformation company, IT outsourcing services, software company Nagpur, Next.js development company"
        />
      </Head>

      <section className="bg-[#020617] text-white py-10 px-6 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >

            <div className="inline-block px-4 mb-1 text-xs tracking-widest uppercase border border-blue-500/30 rounded-full text-blue-400 bg-blue-500/5">
              About Global Infotech
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Building a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Digital India
              </span>{" "}
              from Nagpur
            </h2>

            <p className="pt-6 mx-auto text-gray-400 text-lg leading-relaxed">
              Global Infotech India Pvt. Ltd. delivers cutting-edge technology
              solutions for businesses across India. With a mission to make
              world-class digital innovation accessible to every enterprise, we
              have become a trusted partner for 500+ clients — from custom web
              applications to powerful SaaS ERP platforms.
            </p>
          </motion.div>

          {/* Value Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {points.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:border-blue-500/40 hover:bg-blue-500/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-400 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-white">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}