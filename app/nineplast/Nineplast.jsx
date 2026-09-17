"use client";

import Link from "next/link";

import {
  Factory,
  MapPin,
  Search,
  Building2,
  ShieldCheck,
  Users,
  Globe2,
  Navigation,
  CalendarDays,
  Star,
  BadgeCheck,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  MousePointerClick,
  FileText,
  Recycle,
  Package,
  BriefcaseBusiness,
  Layers3,
  Settings,
  CheckCircle,
} from "lucide-react";

export default function NineplastDigitalMarketing() {
  return (
    <div className="bg-[#060B1F] text-gray-300 min-h-screen pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#080D23] border-b border-[#1c2147]">

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-block bg-blue-900/40 text-blue-400 px-4 py-1 rounded-full text-xs">
                DIGITAL MARKETING • PLASTICS & MANUFACTURING
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Nineplast
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Industrial Solutions. Better Visibility. Digital Growth.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A digital marketing project focused on strengthening the online
                presence of Nineplast and helping the brand connect with
                businesses searching for plastic products, manufacturing
                solutions, and industrial supply services.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                The marketing strategy focused on improving search visibility,
                strengthening brand awareness, targeting relevant B2B
                audiences, and creating a stronger digital presence within the
                plastics and manufacturing industry.
              </p>

              {/* BUTTON */}

              <div className="flex flex-wrap gap-4 mt-7">

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

                <Factory
                  size={62}
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
              title="SEO"
              label="Focused"
            />

            <Stat
              title="B2B"
              label="Audience"
            />

            <Stat
              title="Industrial"
              label="Market"
            />

            <Stat
              title="Digital"
              label="Growth"
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
              Nineplast
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Nineplast is a plastics and industrial-focused brand operating
            within the manufacturing and supply sector, serving customers
            looking for reliable plastic products and industrial solutions.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Our digital marketing work focused on strengthening the brand's
            online visibility and making Nineplast easier to discover by
            businesses and decision-makers searching for plastic products and
            manufacturing-related services.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The strategy combined SEO, keyword targeting, content optimization,
            B2B audience targeting, and digital brand development to create a
            stronger online foundation for long-term growth.
          </p>

        </div>


        {/* RIGHT INFO */}

        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Plastics & Manufacturing"
          />

          <InfoCard
            title="Project"
            value="Digital Marketing"
          />

          <InfoCard
            title="Marketing Focus"
            value="SEO & B2B Visibility"
          />

          <InfoCard
            title="Target Audience"
            value="Businesses & Industrial Buyers"
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
            <span className="text-blue-400">
              Strategy
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A focused digital marketing approach designed to improve Nineplast's
            online visibility and connect the brand with businesses searching
            for plastic and industrial solutions.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <FeatureCard
              icon={<Search />}
              title="SEO Strategy"
              desc="Focused on improving organic search visibility for plastic products, manufacturing solutions, and industry-related searches."
            />

            <FeatureCard
              icon={<Target />}
              title="Keyword Targeting"
              desc="Targeted relevant B2B and industrial search terms to connect Nineplast with businesses actively researching plastic products and suppliers."
            />

            <FeatureCard
              icon={<Globe2 />}
              title="B2B Digital Reach"
              desc="Built a stronger digital presence to help the brand reach businesses, distributors, manufacturers, and industrial buyers online."
            />

            <FeatureCard
              icon={<Factory />}
              title="Industry Visibility"
              desc="Focused on strengthening Nineplast's visibility across relevant plastics, manufacturing, and industrial search opportunities."
            />

            <FeatureCard
              icon={<FileText />}
              title="Content Optimization"
              desc="Optimized digital content to make product and industry information clearer, more useful, and easier to discover through search engines."
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="Organic Growth"
              desc="Developed a search-focused digital foundation designed to support long-term organic discovery and brand growth."
            />

            <FeatureCard
              icon={<MousePointerClick />}
              title="Conversion-Focused Pages"
              desc="Focused on clear product communication and user journeys that help potential buyers move from search discovery toward business inquiries."
            />

            <FeatureCard
              icon={<BarChart3 />}
              title="Performance Tracking"
              desc="Used digital performance insights to understand search visibility, audience behavior, and opportunities for continued marketing optimization."
            />

            <FeatureCard
              icon={<Megaphone />}
              title="Brand Visibility"
              desc="Strengthened Nineplast's online presence across relevant plastics, manufacturing, industrial, and B2B search opportunities."
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
            <span className="text-blue-400">
              Audience
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            The digital marketing strategy focused on reaching businesses,
            manufacturers, distributors, and buyers looking for reliable
            plastic and industrial solutions.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <AudienceCard
              icon={<Building2 />}
              title="Industrial Businesses"
              desc="Companies searching for plastic products, components, manufacturing solutions, and industrial supply partners."
            />

            <AudienceCard
              icon={<Package />}
              title="Product Buyers"
              desc="Procurement teams and business buyers researching plastic products and suppliers for their operational requirements."
            />

            <AudienceCard
              icon={<BriefcaseBusiness />}
              title="B2B Partners"
              desc="Distributors, manufacturers, wholesalers, and commercial partners looking for dependable plastics industry connections."
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
            <span className="text-blue-400">
              Customer Journey
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A search-driven journey designed to connect industrial buyers with
            Nineplast while they research plastic products and manufacturing
            solutions.
          </p>


          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            <ProcessCard
              number="01"
              icon={<Search />}
              title="Search"
              desc="Business buyer searches online for plastic products or industrial suppliers."
            />

            <ProcessCard
              number="02"
              icon={<Globe2 />}
              title="Discover"
              desc="Nineplast appears as a relevant digital option through search visibility."
            />

            <ProcessCard
              number="03"
              icon={<Package />}
              title="Explore"
              desc="Buyer explores products, capabilities, services, and relevant company information."
            />

            <ProcessCard
              number="04"
              icon={<ShieldCheck />}
              title="Trust"
              desc="Clear digital communication helps potential customers evaluate the business."
            />

            <ProcessCard
              number="05"
              icon={<MousePointerClick />}
              title="Enquire"
              desc="Interested buyers move toward an inquiry, product discussion, or business contact."
            />

            <ProcessCard
              number="06"
              icon={<HandshakeIcon />}
              title="Connect"
              desc="The potential customer enters a direct business conversation with the brand."
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
            <span className="text-blue-400">
              B2B Search Visibility
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A digital presence designed around how businesses and procurement
            teams search for plastic products, suppliers, and industrial
            manufacturing solutions.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<Search />}
              title="Search Discovery"
              desc="Improve the chances of businesses discovering Nineplast when searching for plastic products and industrial solutions."
            />

            <BenefitCard
              icon={<Layers3 />}
              title="Industry Relevance"
              desc="Build stronger relevance around plastics, manufacturing, industrial products, and B2B supply-related searches."
            />

            <BenefitCard
              icon={<TrendingUp />}
              title="Long-Term Visibility"
              desc="Develop an organic digital presence that can continue supporting brand discovery through search and useful content."
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
            <span className="text-blue-400">
              Online Presence
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            The goal was to create a digital marketing foundation that connects
            Nineplast, its industrial capabilities, and potential B2B customers
            through relevant search experiences.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<BadgeCheck />}
              title="Relevant Traffic"
              desc="Focus digital visibility on businesses actively searching for plastic products, manufacturing services, and industrial solutions."
            />

            <BenefitCard
              icon={<BarChart3 />}
              title="Measurable Marketing"
              desc="Use search and digital performance insights to identify opportunities and continuously improve the marketing strategy."
            />

            <BenefitCard
              icon={<Star />}
              title="Stronger Brand Presence"
              desc="Build greater awareness of Nineplast across relevant plastics, manufacturing, industrial, and B2B search opportunities."
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


/* =====================================================
   PROCESS CARD
===================================================== */

function ProcessCard({ number, icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-blue-500 transition duration-300">

      <div className="flex items-center justify-between mb-5">

        <div className="text-blue-400">
          {icon}
        </div>

        <span className="text-blue-500/40 text-2xl font-bold">
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
    <div className="border border-[#262b59] rounded-xl p-7 bg-[#0f1438] hover:border-blue-500 transition duration-300">

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
   HANDSHAKE ICON
===================================================== */

function HandshakeIcon() {
  return <CheckCircle size={24} />;
}
