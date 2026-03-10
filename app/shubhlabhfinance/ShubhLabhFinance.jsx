import {
  DollarSign,
  CreditCard,
  Users,
  ShieldCheck,
  Phone,
  Bell,
  Smartphone,
  ArrowLeft
} from "lucide-react";

export default function ShubhLabhFinance() {

  const features = [
    {
      icon: <CreditCard size={22} />,
      title: "Product Catalogue",
      desc: "Clear pages for savings accounts, FDs, RDs, personal loans, and home loans with current rates."
    },
    {
      icon: <Users size={22} />,
      title: "Membership Info",
      desc: "Eligibility requirements, documentation checklist, and step-by-step membership registration."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Regulatory Credentials",
      desc: "Prominently displayed registration numbers, RBI/state approvals, and audit certifications."
    },
    {
      icon: <Phone size={22} />,
      title: "Branch & Contact",
      desc: "Branch location with Google Maps integration, contact numbers, email, and working hours."
    },
    {
      icon: <Bell size={22} />,
      title: "Notices & Updates",
      desc: "AGM notices, interest rate updates, dividend announcements, and other communications."
    },
    {
      icon: <Smartphone size={22} />,
      title: "Mobile Responsive",
      desc: "Accessible on all devices so members can check financial information from anywhere."
    }
  ];


  const audience = [
    {
      icon: "🧑‍💼",
      title: "Prospective Members",
      desc: "Individuals comparing savings and loan options across co-operative societies."
    },
    {
      icon: "💼",
      title: "Existing Members",
      desc: "Society members checking account information, rate updates, and announcements."
    },
    {
      icon: "🏠",
      title: "Local Community",
      desc: "Residents seeking trusted local banking services."
    }
  ];


  return (
    <div className="bg-[#0b1023] text-white min-h-screen mt-10">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-blue-900 text-xs px-3 py-1 rounded-full">
            BANKING
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Shubh Labh Finance
          </h1>

          <p className="text-gray-400 mt-4">
            A professional digital identity for Shubh Labh Patsanstha
            co-operative banking services.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <a
              href="https://shubhlabhpatsanstha.org/"
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

          <div className="bg-[#141a3c] p-12 rounded-2xl shadow-lg">
            <DollarSign size={70} className="text-blue-400"/>
          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="border-y border-gray-800 py-8">

        <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

          <div>
            <h3 className="font-bold text-lg">10+</h3>
            <p className="text-gray-400 text-sm">Products Listed</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">RBI</h3>
            <p className="text-gray-400 text-sm">Compliant</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Trusted</h3>
            <p className="text-gray-400 text-sm">Since Years</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Secure</h3>
            <p className="text-gray-400 text-sm">Platform</p>
          </div>

        </div>

      </section>



      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            About Shubh Labh Finance
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Shubh Labh Patsanstha’s website provides a professional online
            presence for the co-operative society, clearly communicating the
            range of savings and loan products available to members.
          </p>

        </div>



        <div className="space-y-4">

          <InfoCard title="Industry" value="Co-operative Banking" />
          <InfoCard title="Location" value="Maharashtra, India" />
          <InfoCard title="Type" value="Information Website" />
          <InfoCard title="Status" value="Live & Active" />

        </div>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-bold mb-2">
          Key Capabilities
        </h2>

        <p className="text-gray-400 mb-10">
          A digital presence that builds member confidence with clear,
          compliant, and accessible financial information.
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, i) => (

            <div
              key={i}
              className="bg-[#121735] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >

              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>

              <h3 className="font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* TARGET AUDIENCE */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-bold mb-3">
          Who Is It For?
        </h2>

        <p className="text-gray-400 mb-10">
          Serving the local community and society members who trust Shubh Labh
          for their savings and credit needs.
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          {audience.map((item, i) => (

            <div
              key={i}
              className="bg-[#121735] p-6 rounded-xl border border-gray-800 text-center"
            >

              <div className="text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

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