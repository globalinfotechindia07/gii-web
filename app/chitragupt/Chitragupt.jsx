"use client";

import Link from "next/link";
import {
  ShieldCheck,
  FileCheck,
  BarChart3,
  Users,
  FileSignature,
  Stamp,
  Globe,
  Smartphone,
  Building2,
  BadgeCheck,
  CreditCard,
  Database,
} from "lucide-react";

export default function Chitragupt() {
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
                CREDIT RISK MANAGEMENT
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Chitragupt
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Smarter Credit. Faster Services.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A comprehensive digital services platform designed to
                streamline credit risk management and financial workflows
                for modern institutions.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                Access CIBIL reports, digital e-Sign, e-Stamp, e-Agreement
                generation, and CA certificate services through one
                centralized platform.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="http://chitraguptccrms.com/"
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

                <ShieldCheck
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
              title="Real-time"
              label="Processing"
            />

            <Stat
              title="Unified"
              label="Platform"
            />

            <Stat
              title="Secure"
              label="Infrastructure"
            />

            <Stat
              title="Digital"
              label="Workflow"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-10 md:py-15 grid md:grid-cols-2 gap-12"
      >

        {/* LEFT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About{" "}
            <span className="text-blue-400">
              Chitragupt
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Chitragupt is a comprehensive digital services platform built to
            simplify credit risk management and operational workflows for
            financial institutions.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The platform brings CIBIL reporting, digital signatures,
            e-Stamping, automated agreement generation, and CA certificate
            services together in one centralized digital ecosystem.
          </p>

        </div>


        {/* RIGHT INFO */}
        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="FinTech / Financial Services"
          />

          <InfoCard
            title="Focus"
            value="Credit Risk Management"
          />

          <InfoCard
            title="Type"
            value="Digital Services Platform"
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
            Digital financial services designed to simplify lending
            workflows, improve operational efficiency, and support
            compliant credit processes.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CARD 1 */}
            <FeatureCard
              icon={<CreditCard />}
              title="CIBIL Reports"
              desc="Instantly access and analyze borrower credit histories to support informed credit assessment and lending decisions."
            />

            {/* CARD 2 */}
            <FeatureCard
              icon={<FileSignature />}
              title="Digital e-Sign"
              desc="Digitally sign loan documents and agreements through secure electronic signature workflows."
            />

            {/* CARD 3 */}
            <FeatureCard
              icon={<Stamp />}
              title="e-Stamp Services"
              desc="Streamline digital stamp procurement for agreements while reducing manual paperwork and processing time."
            />

            {/* CARD 4 */}
            <FeatureCard
              icon={<FileCheck />}
              title="e-Agreement Generation"
              desc="Generate customized digital loan agreements based on approved terms and borrower information."
            />

            {/* CARD 5 */}
            <FeatureCard
              icon={<BadgeCheck />}
              title="CA Certificate"
              desc="Connect with certified Chartered Accountants for financial verification and certificate generation."
            />

            {/* CARD 6 */}
            <FeatureCard
              icon={<Database />}
              title="Unified Digital Workflow"
              desc="Manage multiple financial services through a centralized platform designed for streamlined operations."
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
            Designed to support financial institutions and teams managing
            credit, lending, verification, and digital documentation.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* FINANCIAL INSTITUTIONS */}
            <AudienceCard
              icon={<Building2 />}
              title="Financial Institutions"
              desc="Co-operative banks and financial institutions looking to digitize credit and lending workflows."
            />

            {/* CREDIT TEAMS */}
            <AudienceCard
              icon={<BarChart3 />}
              title="Credit & Lending Teams"
              desc="Teams that need quick access to borrower reports, verification tools, and digital documentation."
            />

            {/* OPERATIONS */}
            <AudienceCard
              icon={<Users />}
              title="Operations Teams"
              desc="Teams managing agreements, e-Stamping, e-Signatures, certificates, and financial documentation."
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