import React from "react";
import {
  CheckCircle,
  Rocket,
  Handshake,
  Shield,
  Maximize,
  Users,
  Star
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-[#050816] text-gray-300">

      {/* HERO SECTION */}
      <section className="min-h-[420px] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-[#0b0f2a] via-[#1a1d45] to-[#2a1c54]">

        <div className="border border-blue-500 text-blue-400 text-xs tracking-widest px-5 py-2 rounded-full mb-6">
          WHO WE ARE
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Global Infotech India
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl text-sm md:text-base leading-relaxed">
          A passionate team of engineers and innovators building technology
          that transforms businesses.
        </p>

      </section>


      {/* DIGITAL INDIA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Building a{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Digital India
            </span>{" "}
            from Nagpur
          </h2>

          <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-400 leading-relaxed">
            <p>
              Global Infotech India Pvt. Ltd. is a Nagpur-based IT company
              delivering cutting-edge technology solutions to businesses,
              schools, and enterprises across India.
            </p>

            <p>
              Founded with a vision to make world-class technology accessible
              to every business, we've grown into a trusted partner for 500+
              clients.
            </p>

            <p>
              From custom web and mobile apps to full-scale SaaS platforms and
              ERP systems, we bring innovation, reliability, and expertise to
              every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">

            <div className="space-y-5">
              <Feature text="Innovation First" />
              <Feature text="Security Driven" />
              <Feature text="Scalable Solutions" />
            </div>

            <div className="space-y-5">
              <Feature text="Client-Centric" />
              <Feature text="On-Time Delivery" />
              <Feature text="24/7 Support" />
            </div>

          </div>

        </div>
      </section>


      {/* OUR VALUES SECTION */}
      <section className="py-24 px-6 bg-[#0b0f2a]">

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

    </div>
  );
};


/* FEATURE LIST ITEM */
const Feature = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle className="text-blue-500 w-5 h-5" />
      <span>{text}</span>
    </div>
  );
};


/* VALUE CARD */
const ValueCard = ({ icon, title, text }) => {
  return (
    <div className="bg-[#111633] border border-gray-800 rounded-xl p-8 text-left hover:border-blue-500 transition">

      <div className="w-12 h-12 flex items-center justify-center bg-[#1a1f45] rounded-lg text-blue-400 mb-5">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {text}
      </p>

    </div>
  );
};

export default AboutPage;