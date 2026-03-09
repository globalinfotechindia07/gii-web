"use client";

import React, { useEffect } from "react";
import { ExternalLink, Layers, ShieldCheck, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    title: "Dronacharya ERP",
    subtitle: "Innovating School Management",
    description:
      "A comprehensive School ERP system designed to digitize and streamline every aspect of school management — from admissions and attendance to fees, results and communication.",
    tags: ["School Management", "Cloud-Based", "Mobile Ready"],
    icon: <Layers className="text-blue-400" size={24} />,
    color: "from-blue-600 to-indigo-600",
    link: "https://dronacharyaerp.in/",
  },
  {
    title: "CCRMS",
    subtitle: "Co-operative Credit Risk Management",
    description:
      "An advanced system that helps financial institutions assess, monitor and manage credit risk efficiently with real-time data and automated analytics.",
    tags: ["Credit Risk", "Enterprise", "Analytics"],
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    color: "from-emerald-600 to-teal-600",
    link: "https://ccrms.co.in/",
  },
];

const ProductsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <section
      id="products"
      className="relative py-32 px-6 bg-[#020617] text-white overflow-hidden"
    >
      {/* Background Decorative Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-blue-500 fill-blue-500" />
              <span className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase">
                Proprietary Tech
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Flagship{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Products
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-500/30 px-6">
            Engineered to automate complexity and empower institutional growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${product.color} rounded-[2rem] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full flex flex-col bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {product.icon}
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={product.link}
                    className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {/* Content */}
                <div className="mb-auto">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>

                  <p
                    className={`text-sm font-semibold tracking-wide uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r ${product.color}`}
                  >
                    {product.subtitle}
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {product.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {product.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 font-bold tracking-wider hover:from-blue-600 hover:to-indigo-600 transition-all duration-500 active:scale-95"
                >
                  VISIT PRODUCT SITE
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;