"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, ShieldCheck, Settings, Megaphone, Cpu, Server } from "lucide-react";

export const metadata = {
  title: "Global Infotech India | Web Development, App Development & SEO Company in India",
  description:
    "Global Infotech India offers professional web development, mobile app development, SEO, and digital marketing services. Grow your business with expert IT solutions.",
  keywords: [
    "Global Infotech India",
    "web development company in India",
    "IT company in Nagpur",
    "mobile app development services",
    "SEO company India",
    "digital marketing agency Nagpur",
    "software development company",
    "Next.js development services",
    "affordable IT services India",
    "best web design company Nagpur"
  ],
};

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
    // {
    //   icon: <ShieldCheck size={24} />,
    //   title: "Cybersecurity & Networking",
    //   description: "Enterprise-grade cybersecurity solutions with penetration testing, audits, and robust defenses to keep your data safe 24/7.",
    //   features: ["Penetration Testing & VAPT", "Firewall & Network Setup", "Security Audit & Compliance", "Data Encryption & Protection", "24/7 Security Monitoring"]
    // },
    {
      icon: <Settings size={24} />,
      title: "IT Consulting & Automation",
      description: "Strategic IT consulting and workflow automation to align your technology infrastructure with your business objectives.",
      features: ["Digital Transformation Strategy", "Workflow & Process Automation", "IT Infrastructure Planning", "Technology Stack Advisory", "Cost Optimization & ROI Planning"]
    },
    // {
    //   icon: <Megaphone size={24} />,
    //   title: "Digital Marketing",
    //   description: "Data-driven digital marketing strategies across search engines and social media to generate quality leads and grow revenue.",
    //   features: ["Search Engine Optimization (SEO)", "Google Ads & PPC Campaigns", "Social Media Management", "Content Marketing & Branding", "Analytics & Performance Reports"]
    // },

    // 🔥 AI/ML Highlighted Card
    {
      icon: <Cpu size={24} />,
      title: "AI & Machine Learning",
      description: "Advanced AI-powered solutions to automate processes, analyze data, and drive smarter business decisions with intelligent systems.",
      features: [
        "Custom AI Model Development",
        "Machine Learning Integration",
        "Chatbots & Virtual Assistants",
        "Predictive Analytics & Forecasting",
        "Computer Vision & NLP Solutions"
      ],
    },
    {
  icon: <Server size={24} />,
  title: "Cloud & DevOps",
  description: "Reliable cloud infrastructure and DevOps practices to ensure scalable, secure, and high-performance deployment of your applications.",
  features: [
    "AWS, Azure & Google Cloud Deployment",
    "CI/CD Pipeline Setup",
    "Docker & Kubernetes Containerization",
    "Server Monitoring & Optimization",
    "Backup, Scaling & Disaster Recovery"
  ]
}
  ];

  return (
    <section className="relative pt-40 pb-24 px-5 bg-[#020617] text-white overflow-hidden">

      {/* 🔵 Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-[0.3em] px-6 py-2 rounded-full mb-6 uppercase">
            WHAT WE DO
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions crafted for every business — from startups to large enterprises across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500
                ${s.highlight 
                  ? "bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)]" 
                  : "bg-[#0b1026] border-white/10 hover:border-blue-500/50"
                }`}
            >

              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>

              {/* Icon */}
              <div className={`relative w-12 h-12 flex items-center justify-center rounded-2xl mb-6 text-blue-400
                ${s.highlight ? "bg-blue-500/20" : "bg-blue-600/10"}
              `}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {s.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {s.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 text-[10px]">●</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ⭐ Badge */}
              {s.highlight && (
                <span className="absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  NEW
                </span>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}