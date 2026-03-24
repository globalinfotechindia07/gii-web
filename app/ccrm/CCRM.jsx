import {
  Building2,
  ShieldCheck,
  Bell,
  Users,
  FileText,
  BarChart3,
  ArrowLeft
} from "lucide-react";

export const metadata = {
  title: "CCRMS | Credit Risk Management System for Co-operative Societies",
  description:
    "CCRMS is a fintech credit risk management system for co-operative societies and financial institutions. Manage loans, track repayments, ensure compliance, and monitor credit risk in real-time.",
  keywords: [
    "CCRMS software",
    "credit risk management system",
    "co-operative society software",
    "fintech software India",
    "loan management system",
    "credit risk analysis software",
    "banking software solutions",
    "RBI compliant software",
    "financial management system",
    "loan tracking software",
    "cooperative banking software",
    "risk management fintech platform"
  ],
};

export default function CCRMS() {
  const features = [
    {
      title: "Credit Risk Assessment",
      desc: "Automated member creditworthiness scoring based on repayment history, income, and collateral data.",
      icon: <BarChart3 size={22} />,
    },
    {
      title: "Loan Portfolio Tracking",
      desc: "Real-time overview of all active loans, disbursements, outstanding balances, and NPA classification.",
      icon: <FileText size={22} />,
    },
    {
      title: "Repayment Alerts",
      desc: "Automated reminders and escalation workflows for overdue EMIs, reducing default rates.",
      icon: <Bell size={22} />,
    },
    {
      title: "Compliance Reports",
      desc: "One-click generation of statutory reports required by regulatory bodies.",
      icon: <FileText size={22} />,
    },
    {
      title: "Member Management",
      desc: "Complete member profiles with KYC documents, transaction history, and relationship tools.",
      icon: <Users size={22} />,
    },
    {
      title: "Role-based Security",
      desc: "Granular access control for board members, managers, and auditors with audit logs.",
      icon: <ShieldCheck size={22} />,
    },
  ];

  const audience = [
    {
      title: "Co-operative Societies",
      desc: "Urban and rural credit co-operatives managing deposits and loans.",
      icon: <Building2 size={28} />,
    },
    {
      title: "Finance Managers",
      desc: "Credit officers and risk managers needing real-time portfolio visibility.",
      icon: <BarChart3 size={28} />,
    },
    {
      title: "Auditors & Regulators",
      desc: "Internal and external auditors requiring transparent reports.",
      icon: <ShieldCheck size={28} />,
    },
  ];

  return (
    <div className="bg-[#0b1023] text-white min-h-screen mt-10">

      {/* HERO */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="px-3 py-1 text-xs bg-blue-900 rounded-full ">
            FINTECH
          </span>

          <h1 className="text-4xl font-bold mt-4">CCRMS</h1>

          <p className="text-gray-400 mt-4">
            A Co-operative Credit Risk Management System for transparent
            financial oversight.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <a
              href="https://ccrms.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition cursor-pointer">
                Visit Website
              </button>
            </a>

            <a href="/portfolio">
              <button className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg hover:bg-white/5 transition cursor-pointer">
                <ArrowLeft size={18} />
                Back to Portfolio
              </button>
            </a>

          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#131a3b] p-10 rounded-2xl shadow-lg">
            <Building2 size={70} className="text-blue-400" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-b border-gray-800 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

          <div>
            <h3 className="text-xl font-bold">360°</h3>
            <p className="text-gray-400 text-sm">Risk View</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Real-time</h3>
            <p className="text-gray-400 text-sm">Monitoring</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">100%</h3>
            <p className="text-gray-400 text-sm">Compliant</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-gray-400 text-sm">Data Vault</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-2xl font-bold mb-4">About CCRMS</h2>

          <p className="text-gray-400 leading-relaxed">
            CCRMS (Co-operative Credit Risk Management System) is a specialized
            fintech platform built for co-operative societies and credit
            institutions. It provides end-to-end tools for monitoring loan
            portfolios, assessing member creditworthiness, tracking repayments,
            and generating regulatory compliance reports.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard title="Industry" value="Banking / FinTech" />
          <InfoCard title="Compliance" value="RBI Co-op Guidelines" />
          <InfoCard title="Type" value="Web Application" />
          <InfoCard title="Status" value="Live & Active" />
        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto py-5 px-6">

        <h2 className="text-2xl font-bold mb-2">Key Capabilities</h2>

        <p className="text-gray-400 mb-10">
          Built with co-operative societies in mind.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#121735] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >
              <div className="mb-4 text-blue-400">{f.icon}</div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* TARGET AUDIENCE */}
      <section className="max-w-6xl mx-auto py-5 px-6">

        <h2 className="text-2xl font-bold mb-6">Who Is It For?</h2>

        <p className="text-gray-400 mb-10">
          Purpose-built for India's co-operative financial sector.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {audience.map((item, i) => (
            <div
              key={i}
              className="bg-[#121735] p-6 rounded-xl border border-gray-800 text-center"
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-[#121735] p-4 rounded-lg border border-gray-800 flex justify-between">
      <span className="text-gray-400">{title}</span>
      <span>{value}</span>
    </div>
  );
}