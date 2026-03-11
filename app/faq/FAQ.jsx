"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We offer a wide range of IT solutions including Web Development, Mobile App Development, SaaS Platforms, ERP Systems, Cybersecurity, IT Consulting and Digital Marketing.",
  },
  {
    question: "Do you develop custom software for businesses?",
    answer:
      "Yes. We specialize in building custom software tailored to your business needs, helping automate workflows and improve operational efficiency.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with schools, financial institutions, startups, enterprises and many other industries that require reliable digital solutions.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. We provide continuous support, updates, and maintenance to ensure your software runs smoothly and securely.",
  },
  {
    question: "How long does it take to build a software product?",
    answer:
      "Project timelines depend on complexity. Simple websites may take a few weeks, while enterprise platforms or ERP systems may take several months.",
  },
  {
    question: "Can your solutions scale as my business grows?",
    answer:
      "Yes. All our solutions are designed with scalability in mind so they can grow along with your business needs.",
  },
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-xl"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-white/[0.05] transition"
      >
        <span className="text-lg font-semibold">{faq.question}</span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="faq"
      className="relative bg-[#020617] text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Support
          </h2>

          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services and solutions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;