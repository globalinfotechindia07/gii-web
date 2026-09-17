"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Search,
  FileText,
  CreditCard,
  CalendarDays,
  Smartphone,
  CheckCircle,
  Building2,
  UserCheck,
  BarChart3,
  RefreshCw,
  ClipboardCheck,
  Database,
} from "lucide-react";

export default function JPInsuranceCRM() {
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
                INSURANCE CRM PLATFORM
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                J P Insurance CRM
              </h1>

              <p className="text-blue-400 text-lg md:text-xl font-semibold mt-3">
                Smarter Insurance. Better Customer Management.
              </p>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                A centralized insurance CRM platform designed to simplify
                customer management, policy tracking, renewals, and daily
                insurance operations.
              </p>

              <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                Manage customers, policies, agents, renewals, claims, and
                business information through a streamlined digital platform
                built for efficient insurance operations.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-7">

                <Link
                  href="https://jpinsurancebrokers.co.in/"
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
              title="Centralized"
              label="CRM"
            />

            <Stat
              title="Digital"
              label="Policies"
            />

            <Stat
              title="Smart"
              label="Renewals"
            />

            <Stat
              title="Secure"
              label="Data"
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
              J P Insurance CRM
            </span>
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            J P Insurance CRM is a digital customer relationship management
            platform created to help insurance businesses organize and manage
            their customers, policies, agents, and day-to-day operations.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The platform brings customer information, policy records, renewal
            tracking, claims, and business insights into one centralized
            system, helping teams reduce manual work and maintain better
            visibility over their operations.
          </p>

        </div>


        {/* RIGHT INFO */}
        <div className="space-y-4">

          <InfoCard
            title="Industry"
            value="Insurance / Financial Services"
          />

          <InfoCard
            title="Focus"
            value="Insurance CRM"
          />

          <InfoCard
            title="Type"
            value="Web Application"
          />

          <InfoCard
            title="Platform"
            value="Customer & Policy Management"
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
            A centralized insurance management system designed to simplify
            customer relationships, policy administration, and business
            operations.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* CARD 1 */}
            <FeatureCard
              icon={<Users />}
              title="Customer Management"
              desc="Maintain organized customer profiles, contact details, insurance information, and communication history in one place."
            />

            {/* CARD 2 */}
            <FeatureCard
              icon={<FileText />}
              title="Policy Management"
              desc="Create, manage, and track insurance policy information with centralized access to important policy details."
            />

            {/* CARD 3 */}
            <FeatureCard
              icon={<RefreshCw />}
              title="Renewal Management"
              desc="Track upcoming policy renewals and help teams stay on top of important renewal dates and customer follow-ups."
            />

            {/* CARD 4 */}
            <FeatureCard
              icon={<ClipboardCheck />}
              title="Claims Management"
              desc="Organize claim-related information and simplify the process of tracking customer claims and their current status."
            />

            {/* CARD 5 */}
            <FeatureCard
              icon={<UserCheck />}
              title="Agent Management"
              desc="Manage insurance agents, their customer relationships, assigned policies, and operational activities."
            />

            {/* CARD 6 */}
            <FeatureCard
              icon={<BarChart3 />}
              title="Reports & Analytics"
              desc="Access useful business insights and reports to monitor policies, customers, renewals, and overall insurance operations."
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
            Designed for insurance professionals and teams looking for a
            centralized system to manage customers, policies, and operations.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* INSURANCE AGENCIES */}
            <AudienceCard
              icon={<Building2 />}
              title="Insurance Agencies"
              desc="Insurance agencies looking to organize customer data, policies, renewals, and daily business operations."
            />

            {/* AGENTS */}
            <AudienceCard
              icon={<UserCheck />}
              title="Insurance Agents"
              desc="Agents who need quick access to customer information, policy details, renewals, and follow-up activities."
            />

            {/* MANAGEMENT */}
            <AudienceCard
              icon={<BarChart3 />}
              title="Management Teams"
              desc="Business teams looking for better visibility into customers, policies, claims, renewals, and overall performance."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CRM WORKFLOW
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
            Simple{" "}
            <span className="text-blue-400">
              Insurance Workflow
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            A streamlined workflow that helps insurance teams manage the
            customer journey from onboarding to policy renewal.
          </p>


          <div className="grid md:grid-cols-4 gap-6 mt-14">

            <ProcessCard
              number="01"
              icon={<Users />}
              title="Add Customer"
              desc="Create and maintain complete customer profiles and insurance information."
            />

            <ProcessCard
              number="02"
              icon={<FileText />}
              title="Manage Policy"
              desc="Add and organize policy details, documents, and important dates."
            />

            <ProcessCard
              number="03"
              icon={<CalendarDays />}
              title="Track Renewal"
              desc="Monitor upcoming renewals and follow up with customers on time."
            />

            <ProcessCard
              number="04"
              icon={<BarChart3 />}
              title="Monitor Business"
              desc="Review reports and insights to understand overall insurance operations."
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
              Better Insurance Management
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Bringing essential insurance operations together in a structured
            and easy-to-manage digital environment.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <BenefitCard
              icon={<Database />}
              title="Centralized Data"
              desc="Keep customer, policy, claim, and renewal information organized in one centralized system."
            />

            <BenefitCard
              icon={<ShieldCheck />}
              title="Secure Management"
              desc="Designed to provide controlled access to important customer and insurance information."
            />

            <BenefitCard
              icon={<Smartphone />}
              title="Digital Access"
              desc="Access important insurance information through a modern and responsive digital interface."
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