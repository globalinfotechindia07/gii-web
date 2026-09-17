"use client";

import Link from "next/link";
import {
  Home,
  Search,
  Building2,
  MapPin,
  ShieldCheck,
  Users,
  FileText,
  CreditCard,
  CalendarDays,
  Smartphone,
  CheckCircle,
  BadgeCheck,
  KeyRound,
  Handshake,
  Video,
  Scale,
  Compass,
  BarChart3,
} from "lucide-react";

export default function HousesOption() {
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

              <span className="inline-block bg-blue-900/40 text-blue-400 px-4 py-1 rounded-full text-xs">
                REAL ESTATE PLATFORM
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                HousesOption
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Buy. Sell. Stay. Move.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A modern real estate platform designed to simplify the
                property journey with verified listings, transparent
                processes, and personalized support.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                Explore properties for sale, rent, resale, and short stays,
                while accessing property visits, home-loan assistance, legal
                support, and other real estate services through one platform.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="https://www.housesoption.com/"
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

                <Home
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
              title="3300+"
              label="Properties"
            />

            <Stat
              title="7800+"
              label="Happy Customers"
            />

            <Stat
              title="Verified"
              label="Properties"
            />

            <Stat
              title="Zero"
              label="Brokerage Focus"
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
              HousesOption
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            HousesOption is a residential real estate platform built to make
            buying, selling, renting, and exploring properties easier and more
            transparent.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The platform connects property seekers with verified residential
            opportunities while providing additional support such as property
            visits, home-loan assistance, legal services, Vastu consultation,
            and personalized guidance.
          </p>

        </div>


        {/* RIGHT INFO */}

        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Real Estate / PropTech"
          />

          <InfoCard
            title="Focus"
            value="Residential Properties"
          />

          <InfoCard
            title="Services"
            value="Buy / Sell / Rent / Resale"
          />

          <InfoCard
            title="Market"
            value="India & UAE"
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
            A complete digital real estate experience designed to simplify
            property discovery, comparison, visits, and transactions.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CARD 1 */}

            <FeatureCard
              icon={<Search />}
              title="Property Search"
              desc="Explore residential properties using location, property type, pricing, and other relevant search preferences."
            />


            {/* CARD 2 */}

            <FeatureCard
              icon={<ShieldCheck />}
              title="Verified Properties"
              desc="Discover verified property listings designed to provide greater confidence and transparency during property discovery."
            />


            {/* CARD 3 */}

            <FeatureCard
              icon={<Building2 />}
              title="Buy & Sell Properties"
              desc="Connect property buyers and sellers through a digital platform built to simplify the property transaction journey."
            />


            {/* CARD 4 */}

            <FeatureCard
              icon={<KeyRound />}
              title="Rental Properties"
              desc="Explore rental opportunities and discover homes suitable for different lifestyle and location requirements."
            />


            {/* CARD 5 */}

            <FeatureCard
              icon={<CalendarDays />}
              title="Property Visits"
              desc="Schedule guided property visits and explore shortlisted homes before making a final decision."
            />


            {/* CARD 6 */}

            <FeatureCard
              icon={<Video />}
              title="Virtual Site Tours"
              desc="Explore selected properties remotely through digital walkthroughs and virtual property experiences."
            />


            {/* CARD 7 */}

            <FeatureCard
              icon={<CreditCard />}
              title="Home Loan Assistance"
              desc="Access home-loan guidance and assistance to help buyers understand financing options for their property purchase."
            />


            {/* CARD 8 */}

            <FeatureCard
              icon={<Scale />}
              title="Legal Assistance"
              desc="Get access to property-related legal support and document assistance during the real estate process."
            />


            {/* CARD 9 */}

            <FeatureCard
              icon={<Compass />}
              title="Vastu Consultation"
              desc="Access Vastu consultation and property-related guidance for buyers looking for personalized home insights."
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
            Built for people and businesses looking for a simpler and more
            connected real estate experience.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* BUYERS */}

            <AudienceCard
              icon={<Home />}
              title="Property Buyers"
              desc="Homebuyers looking for verified residential properties, project information, visits, and professional assistance."
            />


            {/* SELLERS */}

            <AudienceCard
              icon={<Users />}
              title="Property Sellers"
              desc="Property owners looking to list their homes, increase visibility, and connect with potential buyers or renters."
            />


            {/* INVESTORS */}

            <AudienceCard
              icon={<BarChart3 />}
              title="Investors"
              desc="Property investors exploring residential opportunities, market information, and potential investment options."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROPERTY JOURNEY
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Simple{" "}
            <span className="text-blue-400">
              Property Journey
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            From discovering a property to receiving the keys, HousesOption
            brings essential steps together in one digital experience.
          </p>


          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            <ProcessCard
              number="01"
              icon={<Search />}
              title="Search"
              desc="Explore properties based on your requirements."
            />

            <ProcessCard
              number="02"
              icon={<CheckCircle />}
              title="Discover"
              desc="Compare properties, pricing, amenities, and details."
            />

            <ProcessCard
              number="03"
              icon={<CalendarDays />}
              title="Visit"
              desc="Schedule property visits or virtual tours."
            />

            <ProcessCard
              number="04"
              icon={<Handshake />}
              title="Decide"
              desc="Get guidance and insights before finalizing."
            />

            <ProcessCard
              number="05"
              icon={<FileText />}
              title="Documents"
              desc="Receive support for documentation and processes."
            />

            <ProcessCard
              number="06"
              icon={<KeyRound />}
              title="Get Keys"
              desc="Complete your journey toward your new property."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL BENEFITS
      ===================================================== */}

      <section className="py-20 md:py-24 bg-[#04081A] border-t border-[#151b3d]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Built for{" "}
            <span className="text-blue-400">
              Better Property Decisions
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Bringing property discovery, professional assistance, and
            real estate services together in one convenient platform.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<ShieldCheck />}
              title="Verified Listings"
              desc="Discover property opportunities with an emphasis on verification and reliable listing information."
            />

            <BenefitCard
              icon={<Handshake />}
              title="Personalized Support"
              desc="Get assistance throughout the property journey, from initial search to visits and documentation."
            />

            <BenefitCard
              icon={<Smartphone />}
              title="Digital Experience"
              desc="Access property discovery and supporting services through a modern, user-friendly digital platform."
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