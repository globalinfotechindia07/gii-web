"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  {
    image: "/images/ERP.jpeg",
    tag: "ERP",
    title: "Dronacharya ERP",
    text: "A comprehensive school ERP system streamlining admissions, attendance, timetables, fees, and academic management.",
    link: "/dronacharyaerp"
  },
  {
    image: "/images/CCRMS.jpeg",
    tag: "FINTECH",
    title: "CCRMS",
    text: "A Co-operative Credit Risk Management System designed to monitor and manage credit risk.",
    link: "/ccrm"
  },
  {
    image: "/images/Kshitij.jpeg",
    tag: "LEGAL",
    title: "Kshitija Wadaskar",
    text: "A professional website for an advocate showcasing legal services.",
    link: "/kshitijawadatkar"
  },
  {
    image: "/images/Shubh-Labh Finance.jpeg",
    tag: "FINANCE",
    title: "Shubh Labh Finance",
    text: "A banking platform offering information on savings, loans and services.",
    link: "/shubhlabhfinance"
  },
  {
    image: "/images/sarthi-logo.png",
    tag: "NGO",
    title: "Sarthi NGO",
    text: "A website highlighting volunteer opportunities and social initiatives.",
    link: "/sarthingo"
  },
  {
    image: "/images/Dental Clinic.jpeg",
    tag: "HEALTHTECH",
    title: "Dental Clinic Software",
    text: "A dental clinic management system for patient records and appointments.",
    link: "/dentalclinicmanagement"
  },
  {
    image: "/images/replete.png",
    tag: "GOVTECH",
    title: "Replete",
    text: "A digital property tax application enabling citizens to view, calculate, and pay property taxes seamlessly.",
    link: "/replete"
  },
    {
    image: "/images/gram-panchayat.jpg",
    tag: "E-GOV",
    title: "Gram Panchayat Tigaon",
    text: "An e-Gram Panchayat platform bringing digital governance to rural communities — certificates, schemes, grievances, and local administration online.",
    link: "/grampanchayat"
  }
];

const ValueCard = ({ image, tag, title, text, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-[#0B0F2A] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition duration-300 h-full"
    >

      <div className="flex justify-end">
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">
          {tag}
        </span>
      </div>

      <div className="flex justify-center my-6">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain rounded-full border-2 border-blue-500"
        />
      </div>

      <h3 className="text-white font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {text}
      </p>

      {/* View Details Button */}
      <Link href={link}>
        <span className="text-blue-400 text-sm font-medium hover:underline cursor-pointer">
          View Details →
        </span>
      </Link>

    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#05081C]">

      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ValueCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export { ProjectsSection };