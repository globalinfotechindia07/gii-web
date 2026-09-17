"use client";

import Link from "next/link";
import {
  Search,
  ShieldCheck,
  Users,
  Smartphone,
  CheckCircle,
  Building2,
  Globe2,
  Navigation,
  CalendarDays,
  Star,
  Route,
  BadgeCheck,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  MousePointerClick,
  FileText,
  Lightbulb,
  Zap,
  Leaf,
  Sun,
  LineChart,
  BriefcaseBusiness,
} from "lucide-react";

export default function LightEnergyDigitalMarketing() {
  return (
    <div className="bg-[#060B1F] text-gray-300 min-h-screen">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#080D23] border-b border-[#1c2147]">

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-block bg-emerald-900/40 text-emerald-400 px-4 py-1 rounded-full text-xs">
                DIGITAL MARKETING • RENEWABLE ENERGY
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Light Energy
              </h1>

              <p className="text-emerald-400 text-lg md:text-xl font-semibold mt-3">
                Clean Energy. Better Visibility. Digital Growth.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A digital marketing project focused on strengthening the online
                presence of Light Energy and helping the brand reach audiences
                interested in renewable energy, solar solutions, and
                sustainable power.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                The marketing strategy focused on improving search visibility,
                creating a stronger digital presence, reaching relevant
                audiences, and communicating the value of clean energy
                solutions through digital channels.
              </p>

              {/* BUTTON */}

              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="/portfolio"
                  className="border border-gray-600 px-6 py-3 rounded-lg hover:border-emerald-500 hover:text-white transition"
                >
                  ← Back to Portfolio
                </Link>

              </div>

            </div>


            {/* RIGHT ICON */}

            <div className="flex justify-center md:justify-end">

              <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-[#10173a] border border-[#263070] flex items-center justify-center">

                <Lightbulb
                  size={62}
                  strokeWidth={1.7}
                  className="text-emerald-400"
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
              title="SEO"
              label="Focused"
            />

            <Stat
              title="Clean Energy"
              label="Industry"
            />

            <Stat
              title="Digital"
              label="Visibility"
            />

            <Stat
              title="Growth"
              label="Marketing"
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
            <span className="text-emerald-400">
              Light Energy
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Light Energy is a clean energy-focused brand working within the
            renewable energy space, with a digital presence aimed at connecting
            customers with modern and sustainable energy solutions.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Our digital marketing work focused on improving the brand's online
            visibility and making its energy-related services easier for
            potential customers to discover through search engines and digital
            channels.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The strategy combined SEO, content optimization, keyword
            targeting, audience-focused marketing, and performance tracking to
            create a stronger digital foundation for long-term growth.
          </p>

        </div>


        {/* RIGHT INFO */}

        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Renewable Energy"
          />

          <InfoCard
            title="Project"
            value="Digital Marketing"
          />

          <InfoCard
            title="Marketing Focus"
            value="SEO & Online Visibility"
          />

          <InfoCard
            title="Target Audience"
            value="Energy-Conscious Customers"
          />

        </div>

      </section>


      {/* =====================================================
          DIGITAL MARKETING STRATEGY
      ===================================================== */}

      <section
        id="features"
        className="py-20 md:py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Digital Marketing{" "}
            <span className="text-emerald-400">
              Strategy
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A focused digital marketing approach designed to improve Light
            Energy's online visibility and connect the brand with audiences
            interested in renewable and sustainable energy solutions.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <FeatureCard
              icon={<Search />}
              title="SEO Strategy"
              desc="Focused on improving organic search visibility for renewable energy, solar power, clean energy, and sustainability-related searches."
            />

            <FeatureCard
              icon={<Target />}
              title="Keyword Targeting"
              desc="Targeted relevant energy and sustainability search terms to connect the brand with users actively researching clean energy solutions."
            />

            <FeatureCard
              icon={<Globe2 />}
              title="Digital Reach"
              desc="Built a stronger online presence to help Light Energy reach customers researching renewable energy and modern power solutions."
            />

            <FeatureCard
              icon={<Leaf />}
              title="Sustainability Marketing"
              desc="Communicated the environmental and long-term value of clean energy through relevant digital content and search-focused messaging."
            />

            <FeatureCard
              icon={<FileText />}
              title="Content Optimization"
              desc="Optimized digital content to make energy-related information clearer, more useful, and easier for search engines and users to discover."
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="Organic Growth"
              desc="Developed a search-focused digital foundation designed to support long-term organic discovery and brand growth."
            />

            <FeatureCard
              icon={<MousePointerClick />}
              title="Conversion-Focused Content"
              desc="Focused on clear communication and user journeys that help potential customers understand energy solutions and take the next step."
            />

            <FeatureCard
              icon={<BarChart3 />}
              title="Performance Tracking"
              desc="Used digital performance insights to understand search visibility, audience behavior, and opportunities for continued marketing improvement."
            />

            <FeatureCard
              icon={<Megaphone />}
              title="Brand Awareness"
              desc="Strengthened Light Energy's digital brand presence across relevant renewable energy and sustainability-related search opportunities."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          TARGET AUDIENCE
      ===================================================== */}

      <section
        id="audience"
        className="py-20 md:py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Target{" "}
            <span className="text-emerald-400">
              Audience
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            The digital marketing strategy focused on reaching people and
            organizations interested in sustainable energy, renewable power,
            and energy-efficient solutions.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <AudienceCard
              icon={<Sun />}
              title="Solar Energy Customers"
              desc="People researching solar and renewable energy solutions for homes, properties, and long-term energy needs."
            />

            <AudienceCard
              icon={<Building2 />}
              title="Businesses"
              desc="Businesses exploring sustainable energy solutions, energy efficiency, and cleaner alternatives for their operations."
            />

            <AudienceCard
              icon={<Leaf />}
              title="Eco-Conscious Customers"
              desc="Customers interested in sustainability, clean energy, environmental responsibility, and reducing their dependence on traditional energy sources."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL CUSTOMER JOURNEY
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Digital{" "}
            <span className="text-emerald-400">
              Customer Journey
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A search-driven journey designed to connect potential customers
            with Light Energy while they research renewable and sustainable
            energy solutions.
          </p>


          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            <ProcessCard
              number="01"
              icon={<Search />}
              title="Search"
              desc="Customer searches online for renewable energy or clean energy solutions."
            />

            <ProcessCard
              number="02"
              icon={<Globe2 />}
              title="Discover"
              desc="Light Energy appears as a relevant digital option through search and online content."
            />

            <ProcessCard
              number="03"
              icon={<FileText />}
              title="Explore"
              desc="Customer explores energy solutions, services, benefits, and relevant information."
            />

            <ProcessCard
              number="04"
              icon={<ShieldCheck />}
              title="Trust"
              desc="Clear content and strong digital communication help establish brand credibility."
            />

            <ProcessCard
              number="05"
              icon={<MousePointerClick />}
              title="Engage"
              desc="Customer interacts with the brand and moves toward an inquiry or service discussion."
            />

            <ProcessCard
              number="06"
              icon={<Zap />}
              title="Convert"
              desc="Interested users move forward with a renewable energy solution or business conversation."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          MARKETING FOCUS
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Built for{" "}
            <span className="text-emerald-400">
              Digital Visibility
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A digital presence designed around how customers research
            renewable energy, solar power, sustainability, and modern energy
            solutions online.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<Search />}
              title="Search Discovery"
              desc="Improve the chances of potential customers discovering Light Energy while searching for renewable and sustainable energy solutions."
            />

            <BenefitCard
              icon={<MapPin />}
              title="Market Relevance"
              desc="Build stronger relevance around energy services, renewable solutions, customer needs, and sustainability-focused searches."
            />

            <BenefitCard
              icon={<TrendingUp />}
              title="Long-Term Visibility"
              desc="Develop an organic digital presence that can continue supporting brand discovery through search and valuable content."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL GROWTH
      ===================================================== */}

      <section className="py-20 md:py-24 bg-[#04081A] border-t border-[#151b3d]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            More Than{" "}
            <span className="text-emerald-400">
              Online Presence
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            The goal was to create a digital marketing foundation that connects
            Light Energy, its clean energy solutions, and potential customers
            through relevant online experiences.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<BadgeCheck />}
              title="Relevant Traffic"
              desc="Focus digital visibility on audiences actively searching for renewable energy, solar power, and sustainable solutions."
            />

            <BenefitCard
              icon={<BarChart3 />}
              title="Measurable Marketing"
              desc="Use search and website performance insights to identify opportunities and continuously improve the digital strategy."
            />

            <BenefitCard
              icon={<Star />}
              title="Stronger Brand Presence"
              desc="Build greater awareness of Light Energy across relevant online energy, sustainability, and renewable power searches."
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

      <h3 className="text-emerald-400 text-xl md:text-2xl font-bold">
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
    <div className="border border-[#262b59] rounded-xl p-5 bg-[#0f1438] hover:border-emerald-500/60 transition">

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
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-emerald-500 transition duration-300">

      <div className="text-emerald-400 mb-4">
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
    <div className="border border-[#262b59] rounded-xl p-8 text-center bg-[#0f1438] hover:border-emerald-500 transition duration-300">

      <div className="text-emerald-400 flex justify-center mb-4">
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
   PROCESS CARD
===================================================== */

function ProcessCard({ number, icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-emerald-500 transition duration-300">

      <div className="flex items-center justify-between mb-5">

        <div className="text-emerald-400">
          {icon}
        </div>

        <span className="text-emerald-500/40 text-2xl font-bold">
          {number}
        </span>

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
   BENEFIT CARD
===================================================== */

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-7 bg-[#0f1438] hover:border-emerald-500 transition duration-300">

      <div className="text-emerald-400 mb-4">
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
