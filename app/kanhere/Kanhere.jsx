"use client";

import Link from "next/link";
import {
  Megaphone,
  Target,
  BarChart3,
  Users,
  Palette,
  Globe,
  Smartphone,
  BriefcaseBusiness,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export default function KanhereMarketers() {
  return (
    <div className="bg-[#060B1F] text-gray-300 min-h-screen pt-15">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-[#080D23] border-b border-[#1c2147]">

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <span className="inline-block bg-blue-900/40 text-blue-400 px-4 py-1 rounded-full text-xs">
                MARKETING AGENCY
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Kanhere Marketers
              </h1>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                Building powerful brands through creative marketing,
                innovative strategies, and meaningful customer connections.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                Helping businesses strengthen their digital presence, reach
                the right audience, and achieve sustainable long-term growth.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="https://www.kanheremarketers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
                >
                  Visit Website
                </Link>

                <Link
                  href="/portfolio"
                  className="border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-500 hover:text-white transition"
                >
                  ← Back to Portfolio
                </Link>

              </div>

            </div>


            {/* RIGHT ICON */}
            <div className="flex justify-center md:justify-end">

              <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-[#10173a] border border-[#263070] flex items-center justify-center">

                <Megaphone
                  size={60}
                  strokeWidth={1.7}
                  className="text-blue-400"
                />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="border-t border-[#1c2147]">

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">

            <Stat
              title="360°"
              label="Marketing"
            />

            <Stat
              title="Digital"
              label="Presence"
            />

            <Stat
              title="Data"
              label="Driven"
            />

            <Stat
              title="Growth"
              label="Focused"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12"
      >

        {/* LEFT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About{" "}
            <span className="text-blue-400">
              Kanhere Marketers
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Kanhere Marketers is a marketing-focused digital platform designed
            to help businesses strengthen their brand presence and connect
            with their target audience.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            From digital campaigns and social media marketing to strategic
            brand communication, the platform focuses on creating engaging
            and growth-oriented marketing experiences.
          </p>

        </div>


        {/* RIGHT INFO */}
        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Marketing / Advertising"
          />

          <InfoCard
            title="Focus"
            value="Digital Marketing"
          />

          <InfoCard
            title="Type"
            value="Marketing Website"
          />

          <InfoCard
            title="Status"
            value="Live & Active"
          />

        </div>

      </section>


      {/* =====================================================
          KEY CAPABILITIES
      ===================================================== */}

      <section
        id="features"
        className="py-20 md:py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Key{" "}
            <span className="text-blue-400">
              Capabilities
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A digital marketing presence designed to build visibility,
            increase engagement, and support business growth.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <FeatureCard
              icon={<Globe />}
              title="Digital Marketing"
              desc="Strategic digital campaigns designed to increase online visibility and connect brands with relevant audiences."
            />

            <FeatureCard
              icon={<Smartphone />}
              title="Social Media Marketing"
              desc="Engaging social media strategies that help businesses build communities and maintain a consistent digital presence."
            />

            <FeatureCard
              icon={<Target />}
              title="Lead Generation"
              desc="Targeted campaigns focused on reaching potential customers and creating meaningful business opportunities."
            />

            <FeatureCard
              icon={<Palette />}
              title="Brand Promotion"
              desc="Creative marketing initiatives that strengthen brand identity and improve recognition across digital channels."
            />

            <FeatureCard
              icon={<BarChart3 />}
              title="Campaign Analytics"
              desc="Data-driven insights to monitor campaign performance, audience behavior, and marketing outcomes."
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="Business Growth"
              desc="Marketing strategies focused on building customer relationships and supporting long-term business development."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO IS IT FOR
      ===================================================== */}

      <section
        id="audience"
        className="py-20 md:py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Who Is It For?
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Helping businesses and brands build visibility, engagement,
            and stronger customer relationships.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* BUSINESS */}
            <AudienceCard
              icon={<BriefcaseBusiness />}
              title="Businesses & Startups"
              desc="Businesses looking to establish or strengthen their digital presence and reach new customers."
            />

            {/* BRANDS */}
            <AudienceCard
              icon={<BadgeCheck />}
              title="Growing Brands"
              desc="Brands seeking better audience reach, engagement, recognition, and market visibility."
            />

            {/* ENTREPRENEURS */}
            <AudienceCard
              icon={<Users />}
              title="Entrepreneurs"
              desc="Entrepreneurs looking for strategic marketing support to promote their products and services."
            />

          </div>

        </div>

      </section>

    </div>
  );
}


/* =====================================================
   STAT COMPONENT
===================================================== */

function Stat({ title, label }) {
  return (
    <div className="py-7 md:py-8 border-r last:border-r-0 border-[#1c2147]">

      <h3 className="text-blue-400 text-xl md:text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-500 text-xs md:text-sm mt-1">
        {label}
      </p>

    </div>
  );
}


/* =====================================================
   INFO CARD
===================================================== */

function InfoCard({ title, value }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-5 bg-[#0f1438] hover:border-blue-500/60 transition">

      <div className="flex justify-between items-center gap-4">

        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <p className="text-white font-semibold text-sm text-right">
          {value}
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   FEATURE CARD
===================================================== */

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-blue-500 transition duration-300">

      <div className="text-blue-400 mb-4">
        {icon}
      </div>

      <h3 className="text-white font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}


/* =====================================================
   AUDIENCE CARD
===================================================== */

function AudienceCard({ icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-8 text-center bg-[#0f1438] hover:border-blue-500 transition duration-300">

      <div className="text-blue-400 flex justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-white font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}