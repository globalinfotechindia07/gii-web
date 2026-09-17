"use client";

import Link from "next/link";
import {
  Ticket,
  CalendarDays,
  Search,
  CreditCard,
  Users,
  MapPin,
  Smartphone,
  ShieldCheck,
  Clock,
  CheckCircle,
  Building2,
  UserCheck,
  Database,
} from "lucide-react";

export default function TicketBooking() {
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
                TICKET BOOKING PLATFORM
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Ticket Booking
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Book Faster. Travel Smarter.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A modern digital ticket booking platform designed to make
                searching, booking, and managing tickets simple and convenient.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                Users can explore available options, select their preferred
                seats, complete secure payments, and manage their bookings
                through a streamlined digital experience.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="https://ticket-frontend-u39f.onrender.com/"
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

                <Ticket
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
              title="Online"
              label="Booking"
            />

            <Stat
              title="Easy"
              label="Search"
            />

            <Stat
              title="Secure"
              label="Payments"
            />

            <Stat
              title="Digital"
              label="Tickets"
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
              Ticket Booking
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            This ticket booking platform provides users with a convenient
            digital experience for discovering available tickets and making
            bookings online.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The platform simplifies the complete booking journey — from
            searching available options and selecting seats to completing
            payments and managing booking details.
          </p>

        </div>


        {/* RIGHT INFO */}
        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Travel / Ticketing"
          />

          <InfoCard
            title="Focus"
            value="Online Ticket Booking"
          />

          <InfoCard
            title="Type"
            value="Web Application"
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
            A streamlined ticketing experience designed to make searching,
            booking, and managing tickets easier for users.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CARD 1 */}
            <FeatureCard
              icon={<Search />}
              title="Ticket Search"
              desc="Search and explore available tickets based on routes, dates, destinations, and other booking requirements."
            />

            {/* CARD 2 */}
            <FeatureCard
              icon={<CalendarDays />}
              title="Easy Booking"
              desc="A simple booking flow that allows users to select their preferred date, ticket, and available options."
            />

            {/* CARD 3 */}
            <FeatureCard
              icon={<CreditCard />}
              title="Online Payments"
              desc="Integrated digital payment workflow designed to provide a convenient and secure checkout experience."
            />

            {/* CARD 4 */}
            <FeatureCard
              icon={<CheckCircle />}
              title="Booking Confirmation"
              desc="Users receive clear booking confirmation and access to their ticket details after completing a reservation."
            />

            {/* CARD 5 */}
            <FeatureCard
              icon={<Clock />}
              title="Booking Management"
              desc="Users can keep track of their booking information and manage their ticket details through the platform."
            />

            {/* CARD 6 */}
            <FeatureCard
              icon={<Smartphone />}
              title="Responsive Experience"
              desc="A responsive interface designed to provide a smooth booking experience across desktop, tablet, and mobile devices."
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
            Designed for users and businesses looking for a simple and
            efficient digital ticket booking experience.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* TRAVELERS */}
            <AudienceCard
              icon={<Users />}
              title="Travelers & Customers"
              desc="Users looking for a convenient way to search, book, and manage their tickets online."
            />

            {/* BOOKING USERS */}
            <AudienceCard
              icon={<UserCheck />}
              title="Regular Bookers"
              desc="Customers who frequently make bookings and need quick access to their ticket and booking information."
            />

            {/* OPERATORS */}
            <AudienceCard
              icon={<Building2 />}
              title="Service Providers"
              desc="Businesses and service providers looking to manage ticket availability and digital bookings."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING FLOW
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Simple{" "}
            <span className="text-blue-400">
              Booking Process
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A straightforward journey from searching for a ticket to
            completing the booking.
          </p>


          <div className="grid md:grid-cols-4 gap-6 mt-14">

            <ProcessCard
              number="01"
              icon={<Search />}
              title="Search"
              desc="Find available tickets based on your travel requirements."
            />

            <ProcessCard
              number="02"
              icon={<Ticket />}
              title="Select"
              desc="Choose the preferred ticket and available booking option."
            />

            <ProcessCard
              number="03"
              icon={<CreditCard />}
              title="Pay"
              desc="Complete the booking through the available payment method."
            />

            <ProcessCard
              number="04"
              icon={<CheckCircle />}
              title="Confirm"
              desc="Receive your booking confirmation and ticket details."
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