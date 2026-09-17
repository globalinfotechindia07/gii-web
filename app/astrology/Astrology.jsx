"use client";

import Link from "next/link";

import {
  Sparkles,
  Search,
  Globe2,
  Target,
  TrendingUp,
  MousePointerClick,
  BarChart3,
  Megaphone,
  MapPin,
  Users,
  UserCheck,
  CalendarDays,
  ShieldCheck,
  Star,
  BadgeCheck,
  FileText,
  Smartphone,
  MessageCircle,
  Compass,
  Moon,
  Sun,
  Heart,
  BriefcaseBusiness,
  Clock,
} from "lucide-react";

export default function AstrologyStartsDigitalMarketing() {
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

              <span className="inline-block bg-purple-900/40 text-purple-400 px-4 py-1 rounded-full text-xs">
                DIGITAL MARKETING • ASTROLOGY & SPIRITUAL SERVICES
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Astrology Starts
              </h1>

              <p className="text-purple-400 text-lg md:text-xl font-semibold mt-3">
                Better Visibility. Relevant Reach. Digital Growth.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A digital marketing project focused on strengthening the online
                presence of Astrology Starts and helping people discover
                astrology, horoscope, and spiritual guidance services through
                relevant digital channels.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                The marketing strategy focused on search visibility, audience
                targeting, content optimization, brand awareness, and creating
                a stronger digital presence for users interested in astrology
                and spiritual guidance.
              </p>

              {/* BUTTON */}

              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="/portfolio"
                  className="border border-gray-600 px-6 py-3 rounded-lg hover:border-purple-500 hover:text-white transition"
                >
                  ← Back to Portfolio
                </Link>

              </div>

            </div>


            {/* RIGHT ICON */}

            <div className="flex justify-center md:justify-end">

              <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-[#10173a] border border-[#263070] flex items-center justify-center">

                <Sparkles
                  size={62}
                  strokeWidth={1.7}
                  className="text-purple-400"
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
              title="Astrology"
              label="Audience"
            />

            <Stat
              title="Content"
              label="Marketing"
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
            <span className="text-purple-400">
              Astrology Starts
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Astrology Starts is a digital-focused astrology and spiritual
            guidance brand designed to connect audiences with astrology-related
            information, horoscope content, and personalized guidance.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Our digital marketing work focused on improving the brand's online
            visibility and helping people searching for astrology and horoscope
            information discover relevant content and services more easily.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The strategy combined SEO, content marketing, keyword targeting,
            audience-focused digital campaigns, and brand visibility efforts to
            build a stronger online presence around astrology-related searches.
          </p>

        </div>


        {/* RIGHT INFO */}

        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Astrology & Spiritual Services"
          />

          <InfoCard
            title="Project"
            value="Digital Marketing"
          />

          <InfoCard
            title="Marketing Focus"
            value="SEO & Content Marketing"
          />

          <InfoCard
            title="Target Audience"
            value="Astrology & Horoscope Seekers"
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
            <span className="text-purple-400">
              Strategy
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A focused digital marketing approach designed to improve
            Astrology Starts' online visibility and connect the brand with
            people interested in astrology and spiritual guidance.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <FeatureCard
              icon={<Search />}
              title="SEO Strategy"
              desc="Focused on improving organic search visibility for astrology, horoscope, zodiac, spiritual guidance, and related searches."
            />

            <FeatureCard
              icon={<Target />}
              title="Keyword Targeting"
              desc="Targeted relevant astrology and horoscope search terms to connect the brand with users actively looking for related information."
            />

            <FeatureCard
              icon={<Globe2 />}
              title="Digital Audience Reach"
              desc="Built a stronger online presence to reach users researching astrology, zodiac signs, horoscope information, and spiritual topics."
            />

            <FeatureCard
              icon={<Moon />}
              title="Astrology Content"
              desc="Focused on creating and optimizing content around astrology topics, horoscope searches, zodiac information, and user interests."
            />

            <FeatureCard
              icon={<FileText />}
              title="Content Optimization"
              desc="Optimized digital content to make astrology-related information clearer, useful, engaging, and easier to discover through search."
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="Organic Growth"
              desc="Developed a search-focused digital foundation designed to support long-term organic discovery and audience growth."
            />

            <FeatureCard
              icon={<MousePointerClick />}
              title="Conversion-Focused Pages"
              desc="Focused on clear content structure and user journeys that help visitors move from discovering astrology content toward relevant services."
            />

            <FeatureCard
              icon={<BarChart3 />}
              title="Performance Tracking"
              desc="Used digital performance insights to understand visibility, audience behavior, content engagement, and opportunities for continued optimization."
            />

            <FeatureCard
              icon={<Megaphone />}
              title="Brand Awareness"
              desc="Strengthened Astrology Starts' digital brand presence across relevant astrology, horoscope, zodiac, and spiritual search opportunities."
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
            <span className="text-purple-400">
              Audience
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            The digital marketing strategy focused on reaching people
            interested in astrology, horoscope content, zodiac information,
            and personal spiritual guidance.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <AudienceCard
              icon={<Sun />}
              title="Horoscope Seekers"
              desc="People searching for daily, weekly, monthly, or personalized horoscope information and zodiac insights."
            />

            <AudienceCard
              icon={<Moon />}
              title="Astrology Enthusiasts"
              desc="Users interested in astrology concepts, zodiac signs, birth charts, planetary influences, and related content."
            />

            <AudienceCard
              icon={<Users />}
              title="Guidance Seekers"
              desc="People exploring astrology and spiritual guidance as a way to better understand personal questions and life situations."
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
            <span className="text-purple-400">
              Audience Journey
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A search-driven journey designed to connect users with relevant
            astrology content and services while they are actively exploring
            their interests online.
          </p>


          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            <ProcessCard
              number="01"
              icon={<Search />}
              title="Search"
              desc="User searches online for astrology, horoscope, zodiac, or spiritual guidance."
            />

            <ProcessCard
              number="02"
              icon={<Globe2 />}
              title="Discover"
              desc="Astrology Starts appears as a relevant digital result or content resource."
            />

            <ProcessCard
              number="03"
              icon={<FileText />}
              title="Explore"
              desc="User explores astrology information, horoscope content, and available guidance."
            />

            <ProcessCard
              number="04"
              icon={<ShieldCheck />}
              title="Trust"
              desc="Useful and clearly presented content helps build familiarity and digital trust."
            />

            <ProcessCard
              number="05"
              icon={<MousePointerClick />}
              title="Engage"
              desc="User interacts with relevant content and explores related astrology services."
            />

            <ProcessCard
              number="06"
              icon={<MessageCircle />}
              title="Connect"
              desc="Interested users move toward an inquiry, consultation, or relevant service."
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
            <span className="text-purple-400">
              Search Visibility
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A digital presence designed around how users search for astrology,
            horoscope, zodiac, and spiritual guidance content online.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<Search />}
              title="Search Discovery"
              desc="Improve the chances of users discovering Astrology Starts when searching for relevant astrology and horoscope topics."
            />

            <BenefitCard
              icon={<Compass />}
              title="Topic Relevance"
              desc="Build stronger relevance around astrology, zodiac signs, horoscope content, spiritual topics, and user search intent."
            />

            <BenefitCard
              icon={<TrendingUp />}
              title="Long-Term Visibility"
              desc="Develop an organic digital presence that can continue supporting audience discovery through useful search-focused content."
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
            <span className="text-purple-400">
              Online Presence
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            The goal was to create a digital marketing foundation that connects
            Astrology Starts, its content, and its audience through relevant
            online search experiences.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<BadgeCheck />}
              title="Relevant Traffic"
              desc="Focus digital visibility on users actively searching for astrology, horoscope, zodiac, and spiritual guidance topics."
            />

            <BenefitCard
              icon={<BarChart3 />}
              title="Measurable Marketing"
              desc="Use search and content performance insights to identify opportunities and continuously improve the digital strategy."
            />

            <BenefitCard
              icon={<Star />}
              title="Stronger Brand Presence"
              desc="Build greater awareness of Astrology Starts across relevant astrology, horoscope, zodiac, and spiritual search opportunities."
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

      <h3 className="text-purple-400 text-xl md:text-2xl font-bold">
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
    <div className="border border-[#262b59] rounded-xl p-5 bg-[#0f1438] hover:border-purple-500/60 transition">

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
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-purple-500 transition duration-300">

      <div className="text-purple-400 mb-4">
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
    <div className="border border-[#262b59] rounded-xl p-8 text-center bg-[#0f1438] hover:border-purple-500 transition duration-300">

      <div className="text-purple-400 flex justify-center mb-4">
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
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-purple-500 transition duration-300">

      <div className="flex items-center justify-between mb-5">

        <div className="text-purple-400">
          {icon}
        </div>

        <span className="text-purple-500/40 text-2xl font-bold">
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
    <div className="border border-[#262b59] rounded-xl p-7 bg-[#0f1438] hover:border-purple-500 transition duration-300">

      <div className="text-purple-400 mb-4">
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
