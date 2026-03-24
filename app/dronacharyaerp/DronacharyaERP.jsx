"use client";

import React from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  CreditCard,
  BarChart3,
  ClipboardList,
  School,
  UserCog,
  User,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Admissions Management",
    desc: "Online application forms, document collection, merit-based selection, and automated offer letter generation.",
  },
  {
    icon: Users,
    title: "Attendance Tracking",
    desc: "Daily student and staff attendance with biometric integration and automated SMS alerts.",
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    desc: "Timetable scheduling, lesson planning, homework assignments, and internal exam management.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    desc: "Flexible fee structure setup, online payment integration, receipts, due tracking, and financial reports.",
  },
  {
    icon: User,
    title: "Parent Portal",
    desc: "Real-time access for parents to view attendance, grades, fee status, and school announcements.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Comprehensive dashboards with student performance analytics and operational insights.",
  },
];

export default function DronacharyaERP() {
  return (
    <div className="bg-[#020617] text-gray-300 min-h-screen">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <span className="inline-flex items-center gap-2 text-xs border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
          ERP
        </span>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-5xl font-bold text-white mb-6">
              Dronacharya ERP
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              A comprehensive school management platform streamlining every
              aspect of institutional operations.
            </p>

            <div className="flex flex-wrap gap-4">

              <a 
  href="https://dronacharyaerp.in/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition cursor-pointer">
    <ExternalLink size={18} />
    Visit Website
  </button>
</a>

                      <a 
  href="/portfolio" 
  target="_blank" 
  rel="noopener noreferrer"
>
              <button className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg hover:bg-white/5 transition cursor-pointer">
                <ArrowLeft size={18} />
                Back to Portfolio
              </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="flex justify-center">
            <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl w-64 h-64 flex items-center justify-center shadow-lg">
              <School size={80} className="text-blue-400" />
            </div>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="border-t border-white/10 border-b border-white/10">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center py-10">

          <div>
            <h3 className="text-3xl font-bold text-blue-400">10+</h3>
            <p className="text-sm text-gray-500 mt-1">MODULES</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-sm text-gray-500 mt-1">STUDENTS MANAGED</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">99.9%</h3>
            <p className="text-sm text-gray-500 mt-1">UPTIME</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-sm text-gray-500 mt-1">SUPPORT</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className=" mx-auto px-6 py-24">

       

        <h2 className="font-bold text-white mb-3 pl-10">
          Key Capabilities
        </h2>

        <p className="text-gray-400 mb-12 p-10">
          Every module is designed to work seamlessly together, giving
          educational institutions a single source of truth for all operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-10">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl p-6 bg-[#0f172a] hover:border-blue-500/40 transition"
              >
                <Icon className="text-blue-400 mb-4" size={26} />

                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* TARGET AUDIENCE */}

      <section className="ml-5 px-6 pb-24">


        <h2 className="text-3xl font-bold text-white m-3">
          Who Is It For?
        </h2>

        <p className="text-gray-400 mb-12 pl-10">
          Designed for educational institutions across India seeking a
          reliable, scalable digital backbone.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Schools */}

          <div className="bg-[#0f172a] border border-white/10 rounded-xl p-8 text-center hover:border-blue-500/40 transition">

            <GraduationCap className="mx-auto text-blue-400 mb-4" size={34} />

            <h3 className="text-white font-semibold mb-2">
              Schools & Colleges
            </h3>

            <p className="text-gray-400 text-sm">
              K-12 schools and degree colleges seeking to digitize their
              operations.
            </p>

          </div>

          {/* Admin */}

          <div className="bg-[#0f172a] border border-white/10 rounded-xl p-8 text-center hover:border-blue-500/40 transition p-10">

            <UserCog className="mx-auto text-blue-400 mb-4" size={34} />

            <h3 className="text-white font-semibold mb-2">
              Administrators
            </h3>

            <p className="text-gray-400 text-sm">
              Principals and management staff who need real-time operational
              control.
            </p>

          </div>

          {/* Parents */}

          <div className="bg-[#0f172a] border border-white/10 rounded-xl p-8 text-center hover:border-blue-500/40 transition">

            <Users className="mx-auto text-blue-400 mb-4" size={34} />

            <h3 className="text-white font-semibold mb-2">
              Parents & Students
            </h3>

            <p className="text-gray-400 text-sm">
              Families who want transparent access to academic progress and
              fee status.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
} 