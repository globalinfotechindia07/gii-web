import React from "react";
import { Rocket, Handshake, Shield, Maximize, Users, Star } from "lucide-react";

function Value() {
  return (
    <section className="py-24 px-6 bg-[#0b0f2a] text-gray-300">

      <div className="max-w-6xl mx-auto text-center">

        <div className="border border-blue-500 text-blue-400 text-xs tracking-widest px-5 py-2 rounded-full inline-block mb-6">
          OUR VALUES
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Drives Us
          </span>
        </h2>

        <p className="text-gray-400 mb-16">
          Core principles that guide every decision and every line of code we write.
        </p>

        {/* VALUES GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          <ValueCard
          
            icon={<Rocket size={22} />}
            title="Innovation"
            text="We constantly explore new technologies and approaches to build solutions that are ahead of the curve."
          />

          <ValueCard
            icon={<Handshake size={22} />}
            title="Integrity"
            text="Transparent communication, honest timelines, and no hidden charges — always."
          />

          <ValueCard
            icon={<Shield size={22} />}
            title="Security"
            text="Every product we build follows industry-leading security standards from day one."
          />

          <ValueCard
            icon={<Maximize size={22} />}
            title="Scalability"
            text="Our architectures are designed to grow seamlessly from startup to enterprise scale."
          />

          <ValueCard
            icon={<Users size={22} />}
            title="Collaboration"
            text="We work as an extension of your team — deeply invested in your success."
          />

          <ValueCard
            icon={<Star size={22} />}
            title="Excellence"
            text="We don't just deliver projects — we craft experiences that make a lasting impact."
          />

        </div>

      </div>

    </section>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <div className="bg-[#11163a] p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition">
      
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-lg mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {text}
      </p>

    </div>
  );
}

export default Value;