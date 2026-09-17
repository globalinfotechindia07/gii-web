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
    image: "/images/Kshitij.png",
    tag: "LEGAL",
    title: "Kshitija Wadatkar",
    text: "A professional website for an advocate showcasing legal services.",
    link: "/kshitijawadatkar"
  },
  {
    image: "/images/Shubh-Labh Finance.png",
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
    image: "/images/Dental Clinic.png",
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
    image: "/images/gram-panchayat.png",
    tag: "E-GOV",
    title: "Gram Panchayat Tigaon",
    text: "An e-Gram Panchayat platform bringing digital governance to rural communities — certificates, schemes, grievances, and local administration online.",
    link: "/grampanchayat"
  },
  {
    image: "/images/kanhere.png",
    tag: "MARKETERS",
    title: "Kanhere Marketers",
    text: "Building powerful brands through creative marketing, innovative strategies, and meaningful customer connections.",
    link: "/kanhere"
  },
  {
    image: "/images/chitragupt.png",
    tag: "FINTECH",
    title: "Chitragupt",
    text: "An innovative platform designed to simplify and enhance financial management for individuals and businesses.",
    link: "/chitragupt"
  },
  {
    image: "/images/ticket-app.png",
    tag: "APP",
    title: "Ticket Booking App",
    text: "A seamless ticket booking system that streamlines event access and attendee management.",
    link: "/ticket-app"
  },
  {
    image: "/images/jp-insure.png",
    tag: "CRM",
    title: "JP Insurance CRM",
    text: "A comprehensive insurance CRM system designed to streamline client management, policy tracking, and business workflows.",
    link: "/jp-crm"
  },
  {
    image: "/images/housesoption.png",
    tag: "HOUSESOPTION",
    title: "Houses Option",
    text: "Houses Option is a premier property platform in Nagpur, offering a seamless and intuitive interface for house rentals, property searches, and real estate transactions.",
    link: "/housesoption"
  },

  {
    image: "/images/Pinak.png",
    tag: "APP",
    title: "Pinak",
    text: "Pinak is a financial management platform designed to simplify and enhance financial management for individuals and businesses.",
    link: "/pinak"
  },
  {
    image: "/images/mytransfer.png",
    tag: "DIGITAL MARKETING",
    title: "My Transfer Istanbul",
    text: "My Transfer Istanbul is a transfer company that offers airport transfer services to and from Istanbul Airport. We provide safe, reliable, and comfortable transportation for our customers.",
    link: "/istanbul"
  },
  {
    image: "/images/renewlight.png",
    tag: "DIGITAL MARKETING",
    title: "Renew Light Energy",
    text: "Renew Light Energy is a renewable energy company that offers solar energy solutions to residential and commercial customers.",
    link: "/renewlight"
  },
  {
    image: "/images/nineplast.png",
    tag: "DIGITAL MARKETING",
    title: "Nineplast",
    text: "Nineplast is a plastics and industrial-focused brand operating within the manufacturing and supply sector, serving customers looking for reliable plastic products and industrial solutions.",
    link: "/nineplast"
  },
    {
    image: "/images/astrology.png",
    tag: "DIGITAL MARKETING",
    title: "Astrology Starts",
    text: "Astrology Starts is a astrology-focused brand operating within the astrology and horoscope sector, serving customers looking for reliable astrology services and horoscope solutions.",
    link: "/astrology"
  },

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