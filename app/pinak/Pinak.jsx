"use client";

import Link from "next/link";
import {
  Store,
  MapPin,
  Search,
  Gift,
  CreditCard,
  Smartphone,
  Users,
  ShieldCheck,
  Star,
  ShoppingBag,
  Wallet,
  BadgeCheck,
  Building2,
  UserCheck,
  BarChart3,
  Navigation,
  Sparkles,
  Heart,
  Award,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function Pinak() {
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
                MERCHANT DISCOVERY & REWARDS
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Pinak
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Discover. Shop. Pay. Get Rewarded.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A next-generation local commerce platform designed to connect
                customers with nearby businesses, exclusive offers, and
                rewarding experiences.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                With location-based discovery, seamless UPI payments, digital
                offer redemption, and rewards, Pinak creates a unified
                ecosystem for customers and merchants.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                {/* COMING SOON */}
                <button
                  type="button"
                  disabled
                  className="bg-gradient-to-r from-blue-500/60 to-indigo-500/60 px-6 py-3 rounded-lg text-white font-medium cursor-not-allowed opacity-90"
                >
                  Coming Soon
                </button>

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

                <Store
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
              title="Local"
              label="Discovery"
            />

            <Stat
              title="Smart"
              label="Offers"
            />

            <Stat
              title="UPI"
              label="Payments"
            />

            <Stat
              title="Rewarding"
              label="Experiences"
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
              Pinak
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Pinak is a merchant discovery and rewards super-app designed to
            bring local customers and businesses together through a single
            digital commerce ecosystem.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Customers can discover nearby businesses, explore exclusive
            offers, make seamless UPI payments, redeem digital offers, and
            earn rewards while shopping locally.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            For merchants, Pinak provides a digital platform to showcase their
            business, reach nearby customers, promote offers, and build
            stronger customer relationships.
          </p>

        </div>


        {/* RIGHT INFO */}

        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Local Commerce / FinTech"
          />

          <InfoCard
            title="Focus"
            value="Merchant Discovery & Rewards"
          />

          <InfoCard
            title="Platform"
            value="Super-App"
          />

          <InfoCard
            title="Core Experience"
            value="Discover / Pay / Redeem / Reward"
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
            A connected local commerce experience that helps customers
            discover businesses, access offers, make payments, and earn
            rewards.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CARD 1 */}

            <FeatureCard
              icon={<MapPin />}
              title="Location-Based Discovery"
              desc="Discover nearby businesses, stores, services, and local experiences based on the customer's location."
            />


            {/* CARD 2 */}

            <FeatureCard
              icon={<Search />}
              title="Smart Business Discovery"
              desc="Search and explore local businesses using categories, locations, offers, and customer preferences."
            />


            {/* CARD 3 */}

            <FeatureCard
              icon={<Gift />}
              title="Exclusive Offers"
              desc="Explore special deals, discounts, and merchant offers designed to create more value for local customers."
            />


            {/* CARD 4 */}

            <FeatureCard
              icon={<CreditCard />}
              title="UPI Payments"
              desc="Enable seamless digital payments through UPI for a convenient and connected local shopping experience."
            />


            {/* CARD 5 */}

            <FeatureCard
              icon={<BadgeCheck />}
              title="Digital Offer Redemption"
              desc="Customers can digitally redeem eligible offers and benefits while completing purchases at participating businesses."
            />


            {/* CARD 6 */}

            <FeatureCard
              icon={<Award />}
              title="Rewards & Loyalty"
              desc="Earn rewards through eligible transactions and interactions, encouraging customers to engage with local businesses."
            />


            {/* CARD 7 */}

            <FeatureCard
              icon={<Store />}
              title="Merchant Profiles"
              desc="Businesses can showcase their services, products, offers, location, and other important information through digital profiles."
            />


            {/* CARD 8 */}

            <FeatureCard
              icon={<BarChart3 />}
              title="Merchant Growth"
              desc="Help merchants improve local visibility, attract nearby customers, promote offers, and build repeat engagement."
            />


            {/* CARD 9 */}

            <FeatureCard
              icon={<Smartphone />}
              title="Unified Mobile Experience"
              desc="Bring discovery, offers, payments, redemption, and rewards together through a convenient digital experience."
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
            Pinak is designed to create value for both local customers and
            merchants through a connected digital commerce ecosystem.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CUSTOMERS */}

            <AudienceCard
              icon={<Users />}
              title="Local Customers"
              desc="Customers looking to discover nearby businesses, find exclusive offers, make digital payments, and earn rewards."
            />


            {/* MERCHANTS */}

            <AudienceCard
              icon={<Store />}
              title="Local Merchants"
              desc="Businesses looking to increase local visibility, attract customers, promote offers, and strengthen customer engagement."
            />


            {/* BUSINESS TEAMS */}

            <AudienceCard
              icon={<Building2 />}
              title="Growing Businesses"
              desc="Businesses seeking a digital commerce channel to connect with nearby customers and create rewarding shopping experiences."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOMER JOURNEY
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Simple{" "}
            <span className="text-blue-400">
              Customer Journey
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A simple digital journey connecting customers with local
            businesses, offers, payments, and rewards.
          </p>


          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            <ProcessCard
              number="01"
              icon={<Navigation />}
              title="Discover"
              desc="Find nearby businesses and local experiences."
            />

            <ProcessCard
              number="02"
              icon={<Search />}
              title="Explore"
              desc="Browse businesses, products, services, and offers."
            />

            <ProcessCard
              number="03"
              icon={<Gift />}
              title="Choose Offer"
              desc="Select an available deal or exclusive merchant offer."
            />

            <ProcessCard
              number="04"
              icon={<CreditCard />}
              title="Pay"
              desc="Complete the purchase using a convenient UPI payment."
            />

            <ProcessCard
              number="05"
              icon={<CheckCircle />}
              title="Redeem"
              desc="Redeem eligible digital offers during the transaction."
            />

            <ProcessCard
              number="06"
              icon={<Award />}
              title="Get Rewarded"
              desc="Earn rewards through eligible purchases and activities."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          MERCHANT ECOSYSTEM
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Built for{" "}
            <span className="text-blue-400">
              Local Commerce
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Connecting merchants and customers through discovery, digital
            engagement, offers, payments, and rewards.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<MapPin />}
              title="Local Discovery"
              desc="Help customers discover relevant businesses and offers around them through location-based experiences."
            />

            <BenefitCard
              icon={<Sparkles />}
              title="Engaging Offers"
              desc="Give merchants a digital channel to promote exclusive offers and create meaningful customer interactions."
            />

            <BenefitCard
              icon={<Zap />}
              title="Seamless Transactions"
              desc="Connect discovery, UPI payments, offer redemption, and rewards into one streamlined customer journey."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          REWARDS EXPERIENCE
      ===================================================== */}

      <section className="py-20 md:py-24 bg-[#04081A] border-t border-[#151b3d]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            More Than{" "}
            <span className="text-blue-400">
              Shopping
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Pinak combines local discovery, commerce, and rewards to create
            a more connected experience for customers and merchants.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<Heart />}
              title="Better Local Connections"
              desc="Create stronger connections between customers and the businesses they discover and support."
            />

            <BenefitCard
              icon={<Wallet />}
              title="Value-Driven Shopping"
              desc="Help customers discover offers and rewards that add value to their everyday local purchases."
            />

            <BenefitCard
              icon={<Star />}
              title="Rewarding Experiences"
              desc="Turn eligible purchases and interactions into rewarding experiences that encourage continued engagement."
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