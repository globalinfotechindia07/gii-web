"use client";

import Link from "next/link";
import {
  Landmark,
  FileText,
  Database,
  Megaphone,
  BadgeCheck,
  MessageSquare,
  Users,
  Building2,
  Smartphone
} from "lucide-react";

export default function Grampanchayat() {
  return (
    <div className="bg-[#060B1F] text-gray-300 min-h-screen pt-3 mt-10">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0b0f2a] via-[#1a2158] to-[#0b0f2a] border-b border-[#1c2147]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <span className="bg-blue-900/40 text-blue-400 px-4 py-1 rounded-full text-xs">
              E-GOV
            </span>

            <h1 className="text-5xl font-bold text-white mt-4">
              Gram Panchayat Tigaon
            </h1>

            <p className="text-gray-400 mt-4 max-w-lg">
              Bringing digital governance to rural communities across India.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8 cursor-pointer">

              <Link
                href="https://grampanchayattigaon.org/"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
              >
                Visit Website
              </Link>

              <Link
                href="/portfolio"
                className="border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-500 hover:text-white transition"
              >
                Back To Portfolio
              </Link>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-2xl bg-[#10173a] border border-[#263070] flex items-center justify-center">
              <Landmark size={60} className="text-green-400" />
            </div>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center border-t border-[#1c2147]">
          <Stat title="15+" label="Services Online" />
          <Stat title="Digital" label="Records" />
          <Stat title="24/7" label="Access" />
          <Stat title="Paperless" label="Workflow" />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-blue-400">Gram Panchayat</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Gram Panchayat Tigaon is an e-governance portal that digitizes the
            administrative system of rural local bodies. Citizens can apply
            for certificates, track government schemes, submit grievances,
            and access panchayat records online.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard title="Industry" value="E-Governance" />
          <InfoCard title="Location" value="Tigaon, Maharashtra" />
          <InfoCard title="Type" value="Web Application" />
          <InfoCard title="Status" value="Live & Active" />
        </div>

      </section>

      {/* KEY CAPABILITIES */}
      <section id="features" className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-white">
            Key <span className="text-blue-400">Capabilities</span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Built to empower rural governance with simple digital tools
            accessible to every citizen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <FeatureCard
              icon={<BadgeCheck />}
              title="Certificate Services"
              desc="Apply for birth, death, residence and income certificates online."
            />

            <FeatureCard
              icon={<FileText />}
              title="Scheme Information"
              desc="Access details of Central and State government schemes."
            />

            <FeatureCard
              icon={<MessageSquare />}
              title="Grievance Portal"
              desc="File complaints and track resolution progress online."
            />

            <FeatureCard
              icon={<Megaphone />}
              title="Village Announcements"
              desc="Public notices, tenders and circulars published digitally."
            />

            <FeatureCard
              icon={<Database />}
              title="Digital Records"
              desc="Secure storage of panchayat and land related records."
            />

            <FeatureCard
              icon={<Smartphone />}
              title="Mobile Friendly"
              desc="Fully responsive portal usable on smartphones."
            />

          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section id="audience" className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-white">
            Who Is It For?
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Designed for rural governance stakeholders across Maharashtra.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <AudienceCard
              icon={<Users />}
              title="Villagers & Citizens"
              desc="Residents accessing government services digitally."
            />

            <AudienceCard
              icon={<Building2 />}
              title="Panchayat Officials"
              desc="Officials managing administrative records and services."
            />

            <AudienceCard
              icon={<Smartphone />}
              title="Village Entrepreneurs"
              desc="Local operators helping citizens access online services."
            />

          </div>

        </div>
      </section>

    </div>
  );
}


/* COMPONENTS */

function Stat({ title, label }) {
  return (
    <div className="py-8 border-r last:border-none border-[#1c2147]">
      <h3 className="text-blue-400 text-xl font-bold">{title}</h3>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-5 bg-[#0f1438]">
      <div className="flex justify-between">
        <p className="text-gray-400">{title}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-6 bg-[#0f1438] hover:border-blue-500 transition">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </div>
  );
}

function AudienceCard({ icon, title, desc }) {
  return (
    <div className="border border-[#262b59] rounded-xl p-8 text-center bg-[#0f1438]">
      <div className="text-blue-400 flex justify-center mb-4">{icon}</div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </div>
  );
}