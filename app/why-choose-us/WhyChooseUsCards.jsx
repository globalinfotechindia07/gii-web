"use client";

import React, { useEffect } from "react";
import {
  Lightbulb,
  Users,
  LockKeyhole,
  HousePlus,
  CalendarCheck,
  ClockCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const chooseUsData = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies including AI, cloud & automation to build future-ready digital solutions.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: LockKeyhole,
    title: "Security First",
    description:
      "Every solution adheres to industry-leading security standards, keeping your data fully protected.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HousePlus,
    title: "Scalable Architecture",
    description:
      "Systems built to grow with your business — from startups to large-scale enterprises.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A team of certified professionals with deep expertise across web, mobile, AI, cloud & cybersecurity.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    description:
      "Agile methodology & strict project timelines ensure your product is delivered on time, every time.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: ClockCheck,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support & AMC packages to keep your systems running without interruption.",
    color: "from-emerald-500 to-teal-400",
  },
];

function WhyChooseUsCards() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <section className="bg-[#020617] py-16">

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-10">

        {chooseUsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative p-px rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            >

              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative h-full bg-[#0f172a]/40 backdrop-blur-2xl border border-white/5 p-8 rounded-[calc(1.5rem-1px)] flex flex-col items-start overflow-hidden">

                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-blue-500/10`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}

export default WhyChooseUsCards;