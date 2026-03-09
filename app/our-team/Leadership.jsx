"use client";
import React from "react";
import { motion } from "framer-motion";

const Leadership = () => {
  const leaders = [
    {
      name: "Tarun Sharma",
      role: "CEO",
      image: "/images/Tarun Sharma.jpeg",
      bio: "Visionary leader driving GII's mission to transform businesses across India through cutting-edge technology."
    },
    {
      name: "Ajinkya Dev",
      role: "MARKETING & BUSINESS ADMINISTRATION",
      image: "/images/Ajinkya.jpeg",
      bio: "Leads GII's business development and marketing strategy, building strong client relationships across sectors."
    },
    {
      name: "Dhruv Munghate",
      role: "BUSINESS DEVELOPMENT ASSOCIATE",
      image: "/images/Dhruv.jpeg",
      bio: "Identifies new business opportunities and builds strong client partnerships to drive GII's growth across key markets."
    },
    {
      name: "Kalyani Badhey",
      role: "MARKETING & SALES HEAD",
      image: "/images/Kalyani.jpeg",
      bio: "Drives GII's sales pipeline and client acquisition with a sharp focus on growth and revenue targets."
    }
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-[#0b0f2a] py-24 px-6 text-center overflow-hidden">

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">
          Leadership
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Our Leadership
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {leaders.map((person, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -10 }}
            className="group bg-[#111633] p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300 relative overflow-hidden"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>

            {/* Image */}
            <div className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-6 border-2 border-blue-500">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mb-1">
              {person.name}
            </h3>

            {/* Role */}
            <p className="text-blue-400 text-xs font-bold mb-4 tracking-wider">
              {person.role}
            </p>

            {/* Bio */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {person.bio}
            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Leadership;