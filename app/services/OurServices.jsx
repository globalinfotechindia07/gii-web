"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, ShieldCheck, Settings, Megaphone } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "High-performance, fully responsive websites and web applications built with cutting-edge frameworks tailored for your business goals.",
      features: ["Custom Website & Web App Development", "Responsive Design for All Devices", "E-Commerce & Payment Integration", "CMS & Admin Panel Development", "SEO-Friendly Architecture"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using Flutter & React Native — fast, beautiful, and reliable.",
      features: ["iOS & Android Development", "Flutter & React Native", "UI/UX Design & Prototyping", "App Store Deployment", "Post-Launch Support"]
    },
    {
      icon: <Cloud size={24} />,
      title: "SaaS & ERP Solutions",
      description: "Scalable cloud-based SaaS platforms and ERP systems that digitize and automate your entire business operations.",
      features: ["Custom ERP Development", "School Management Systems", "Multi-Module SaaS Platforms", "Cloud Hosting & Deployment", "Role-Based Access & Dashboards"]
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Cybersecurity & Networking",
      description: "Enterprise-grade cybersecurity solutions with penetration testing, audits, and robust defenses to keep your data safe 24/7.",
      features: ["Penetration Testing & VAPT", "Firewall & Network Setup", "Security Audit & Compliance", "Data Encryption & Protection", "24/7 Security Monitoring"]
    },
    {
      icon: <Settings size={24} />,
      title: "IT Consulting & Automation",
      description: "Strategic IT consulting and workflow automation to align your technology infrastructure with your business objectives.",
      features: ["Digital Transformation Strategy", "Workflow & Process Automation", "IT Infrastructure Planning", "Technology Stack Advisory", "Cost Optimization & ROI Planning"]
    },
    {
      icon: <Megaphone size={24} />,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies across search engines and social media to generate quality leads and grow revenue.",
      features: ["Search Engine Optimization (SEO)", "Google Ads & PPC Campaigns", "Social Media Management", "Content Marketing & Branding", "Analytics & Performance Reports"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-[0.3em] px-6 py-2 rounded-full mb-6 uppercase">
            WHAT WE DO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Comprehensive IT solutions crafted for every business — from startups to large enterprises across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b1026] border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600/10 text-blue-400 rounded-2xl mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{s.description}</p>
              
              <ul className="space-y-3">
                {s.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 text-[10px]">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}