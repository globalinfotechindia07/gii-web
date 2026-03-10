import {
  HeartHandshake,
  CreditCard,
  Users,
  Image,
  FileText,
  Share2,
  ArrowLeft
} from "lucide-react";

export default function SarthiNGO() {

  const features = [
    {
      icon: <HeartHandshake size={22} />,
      title: "Programme Showcase",
      desc: "Dedicated pages for each welfare initiative including education, healthcare, women empowerment and environment."
    },
    {
      icon: <CreditCard size={22} />,
      title: "Online Donations",
      desc: "Secure donation gateway with multiple payment options and automated donation receipt generation."
    },
    {
      icon: <Users size={22} />,
      title: "Volunteer Portal",
      desc: "Volunteer registration, event sign-ups and opportunities for community members to contribute."
    },
    {
      icon: <Image size={22} />,
      title: "Impact Gallery",
      desc: "Photos and videos documenting field activities, events and community transformation."
    },
    {
      icon: <FileText size={22} />,
      title: "Transparency Reports",
      desc: "Annual reports, fund utilisation statements and audit reports accessible to donors."
    },
    {
      icon: <Share2 size={22} />,
      title: "Social Integration",
      desc: "Integrated social media feeds and sharing capabilities to expand community engagement."
    }
  ];


  const audience = [
    {
      icon: "💖",
      title: "Donors & Supporters",
      desc: "Individuals and organisations looking to contribute to transparent social causes."
    },
    {
      icon: "🙋",
      title: "Volunteers",
      desc: "Community members who want to dedicate time and skills to meaningful social work."
    },
    {
      icon: "🏘️",
      title: "Beneficiary Communities",
      desc: "Rural and underserved communities benefiting from Sarthi’s programmes."
    }
  ];


  return (
    <div className="bg-[#0b1023] text-white min-h-screen mt-10">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-blue-900 text-xs px-3 py-1 rounded-full">
            NGO
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Sarthi NGO
          </h1>

          <p className="text-gray-400 mt-4">
            A compassionate digital home for Sarthi's social welfare mission
            across Maharashtra.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <a
              href="sarthingo.com"
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
            <HeartHandshake size={70} className="text-blue-400"/>
          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="border-y border-gray-800 py-8">

        <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

          <div>
            <h3 className="font-bold text-lg">10+</h3>
            <p className="text-gray-400 text-sm">Programmes</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Online</h3>
            <p className="text-gray-400 text-sm">Donations</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Impact</h3>
            <p className="text-gray-400 text-sm">Stories</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Transparent</h3>
            <p className="text-gray-400 text-sm">Reporting</p>
          </div>

        </div>

      </section>



      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            About Sarthi NGO
          </h2>

          <p className="text-gray-400 leading-relaxed">
            The Sarthi NGO website is a purpose-driven digital platform that
            amplifies the organisation’s social impact by making it easy for
            donors, volunteers and beneficiaries to engage.
          </p>

        </div>



        <div className="space-y-4">

          <InfoCard title="Industry" value="Non-Profit / Social" />
          <InfoCard title="Location" value="Wardha, Maharashtra" />
          <InfoCard title="Type" value="NGO Website" />
          <InfoCard title="Status" value="Live & Active" />

        </div>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-bold mb-2">
          Key Capabilities
        </h2>

        <p className="text-gray-400 mb-10">
          Every feature is designed to build trust, increase donor confidence
          and mobilise community support.
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
          Connecting compassionate donors and volunteers with communities in need.
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