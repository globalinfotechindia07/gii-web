"use client";

import Link from "next/link";
import {
  Car,
  MapPin,
  Search,
  Plane,
  ShieldCheck,
  Users,
  Clock,
  Smartphone,
  CheckCircle,
  Building2,
  UserCheck,
  Globe2,
  Navigation,
  CalendarDays,
  CreditCard,
  Star,
  Headphones,
  Route,
  BadgeCheck,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  MousePointerClick,
  FileText,
} from "lucide-react";

export default function MyTransferIstanbul() {
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
                DIGITAL MARKETING • TRAVEL & TRANSFERS
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                My Transfer Istanbul
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Airport Transfers. Better Visibility. More Bookings.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A digital marketing project focused on strengthening the online
                presence of My Transfer Istanbul and connecting travelers with
                reliable private airport transfer services in Istanbul.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                The marketing strategy focused on improving search visibility,
                increasing relevant website traffic, strengthening brand
                presence, and helping travelers discover Istanbul airport
                transfer services online.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="https://www.mytransferistanbul.com/"
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

                <Car
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
              title="Travel"
              label="Audience"
            />

            <Stat
              title="IST & SAW"
              label="Airport Transfers"
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
              My Transfer Istanbul
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            My Transfer Istanbul is an airport transfer service focused on
            providing private transportation solutions for travelers arriving
            in or departing from Istanbul.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Our digital marketing work focused on improving the brand's
            visibility across search engines and digital channels so travelers
            searching for Istanbul airport transfers could discover the
            business more easily.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The strategy combined search-focused content, website optimization,
            relevant keyword targeting, and audience-focused digital marketing
            to build a stronger online presence around Istanbul transfer
            services.
          </p>

        </div>


        {/* RIGHT INFO */}

        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Travel & Transportation"
          />

          <InfoCard
            title="Service"
            value="Airport Transfer"
          />

          <InfoCard
            title="Marketing Focus"
            value="SEO & Digital Marketing"
          />

          <InfoCard
            title="Target Audience"
            value="International Travelers"
          />

        </div>

      </section>


      {/* =====================================================
          DIGITAL MARKETING CAPABILITIES
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
            A focused digital marketing approach designed to improve online
            visibility and connect My Transfer Istanbul with travelers
            searching for airport transfer services.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CARD 1 */}

            <FeatureCard
              icon={<Search />}
              title="SEO Strategy"
              desc="Focused on improving organic search visibility for relevant Istanbul airport transfer and transportation-related searches."
            />


            {/* CARD 2 */}

            <FeatureCard
              icon={<Target />}
              title="Keyword Targeting"
              desc="Targeted relevant travel and airport transfer search terms to connect the business with users actively looking for transportation services."
            />


            {/* CARD 3 */}

            <FeatureCard
              icon={<Globe2 />}
              title="International Audience"
              desc="Digital marketing efforts were structured around travelers and international visitors searching for airport transportation in Istanbul."
            />


            {/* CARD 4 */}

            <FeatureCard
              icon={<MapPin />}
              title="Local Search Visibility"
              desc="Focused on improving visibility for location-based searches related to Istanbul, airports, and private transfer services."
            />


            {/* CARD 5 */}

            <FeatureCard
              icon={<FileText />}
              title="Content Optimization"
              desc="Optimized website content to make service information more relevant, useful, and discoverable through search engines."
            />


            {/* CARD 6 */}

            <FeatureCard
              icon={<TrendingUp />}
              title="Organic Growth"
              desc="Built a search-focused digital presence aimed at increasing qualified organic discovery and long-term website visibility."
            />


            {/* CARD 7 */}

            <FeatureCard
              icon={<MousePointerClick />}
              title="Conversion-Focused Pages"
              desc="Focused on clear service communication and user journeys that help travelers move from search discovery toward transfer inquiries and bookings."
            />


            {/* CARD 8 */}

            <FeatureCard
              icon={<BarChart3 />}
              title="Performance Tracking"
              desc="Used digital performance insights to understand visibility, audience behavior, and opportunities for continued marketing optimization."
            />


            {/* CARD 9 */}

            <FeatureCard
              icon={<Megaphone />}
              title="Brand Visibility"
              desc="Strengthened the online presence of My Transfer Istanbul across relevant travel and transportation search opportunities."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES / AUDIENCE
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
            The digital marketing strategy focused on reaching travelers and
            customers looking for convenient transportation solutions in
            Istanbul.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* TOURISTS */}

            <AudienceCard
              icon={<Plane />}
              title="International Travelers"
              desc="Visitors arriving in Istanbul who need convenient airport transportation to hotels, destinations, or other locations."
            />


            {/* AIRPORT USERS */}

            <AudienceCard
              icon={<Navigation />}
              title="Airport Passengers"
              desc="Travelers looking for private transfer services to or from Istanbul airports, including IST and SAW."
            />


            {/* BUSINESS TRAVELERS */}

            <AudienceCard
              icon={<Building2 />}
              title="Business Travelers"
              desc="Business visitors looking for reliable and convenient private transportation during their Istanbul trips."
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
            A search-driven journey designed to connect travelers with the
            right airport transfer service at the moment they are looking for
            it.
          </p>


          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            <ProcessCard
              number="01"
              icon={<Search />}
              title="Search"
              desc="Traveler searches online for Istanbul airport transfer services."
            />

            <ProcessCard
              number="02"
              icon={<Globe2 />}
              title="Discover"
              desc="My Transfer Istanbul appears as a relevant digital option."
            />

            <ProcessCard
              number="03"
              icon={<MapPin />}
              title="Explore"
              desc="Traveler reviews transfer services, destinations, and information."
            />

            <ProcessCard
              number="04"
              icon={<ShieldCheck />}
              title="Trust"
              desc="Clear service information helps users evaluate the transfer option."
            />

            <ProcessCard
              number="05"
              icon={<CalendarDays />}
              title="Book"
              desc="Traveler proceeds toward arranging the required transfer service."
            />

            <ProcessCard
              number="06"
              icon={<Car />}
              title="Transfer"
              desc="Customer uses the selected airport transfer service in Istanbul."
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
              Search Visibility
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A digital presence designed around how travelers search for
            Istanbul airport transportation before and during their trip.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<Search />}
              title="Search Discovery"
              desc="Improve the chances of travelers discovering the brand when searching for Istanbul airport transfer services."
            />

            <BenefitCard
              icon={<MapPin />}
              title="Location Relevance"
              desc="Build stronger relevance around Istanbul, airport locations, destinations, and transfer-related searches."
            />

            <BenefitCard
              icon={<TrendingUp />}
              title="Long-Term Visibility"
              desc="Develop an organic digital presence that can continue supporting brand discovery through search."
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
            the brand, its services, and travelers through relevant search
            experiences.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<BadgeCheck />}
              title="Relevant Traffic"
              desc="Focus digital visibility on audiences actively searching for Istanbul transportation and airport transfer services."
            />

            <BenefitCard
              icon={<BarChart3 />}
              title="Measurable Marketing"
              desc="Use search and website performance data to identify opportunities and continuously improve the digital strategy."
            />

            <BenefitCard
              icon={<Star />}
              title="Stronger Brand Presence"
              desc="Build greater awareness of My Transfer Istanbul across relevant online travel and transportation searches."
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