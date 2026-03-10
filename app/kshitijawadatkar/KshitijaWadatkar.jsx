import {
  Scale,
  CalendarCheck,
  Trophy,
  Search,
  Smartphone,
  Star,
  User,
  Building2,
  MapPin,
  ArrowLeft
} from "lucide-react";

export default function KshitijaWadatkar() {

  const features = [
    {
      icon: <Scale size={22} />,
      title: "Practice Area Showcase",
      desc: "Detailed pages for each area of law — civil, criminal, family, property, corporate — with clear explanations."
    },
    {
      icon: <CalendarCheck size={22} />,
      title: "Consultation Booking",
      desc: "Simple contact and appointment booking form allowing clients to schedule consultations directly."
    },
    {
      icon: <Trophy size={22} />,
      title: "Case Experience",
      desc: "Highlighted notable cases and achievements that build trust and credibility with clients."
    },
    {
      icon: <Search size={22} />,
      title: "SEO Optimisation",
      desc: "Location-based and practice-area keyword optimisation for better client discovery."
    },
    {
      icon: <Smartphone size={22} />,
      title: "Mobile Responsive",
      desc: "Fully optimised for mobile so potential clients can reach the advocate anywhere."
    },
    {
      icon: <Star size={22} />,
      title: "Client Testimonials",
      desc: "Featured client reviews that reinforce credibility and help new clients make decisions."
    }
  ];

  const audience = [
    {
      icon: <User size={28} />,
      title: "Individual Clients",
      desc: "Individuals seeking legal advice for property, family, or criminal matters."
    },
    {
      icon: <Building2 size={28} />,
      title: "Corporate Clients",
      desc: "Businesses needing legal counsel for contracts, disputes, and compliance."
    },
    {
      icon: <MapPin size={28} />,
      title: "Local Nagpur Residents",
      desc: "Residents seeking trusted legal representation in Nagpur."
    }
  ];


  return (
    <div className="bg-[#0b1023] text-white min-h-screen mt-10">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-blue-900 text-xs px-3 py-1 rounded-full">
            LEGAL
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Kshitija Wadatkar
          </h1>

          <p className="text-gray-400 mt-4">
            A professional digital presence for a practising advocate,
            building trust with every visit.
          </p>


          <div className="flex flex-wrap gap-4 mt-6">

            <a
              href="http://kshitijawadatkar.com/"
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
            <Scale size={70} className="text-blue-400" />
          </div>
        </div>

      </section>


      {/* STATS BAR */}

      <section className="border-y border-gray-800 py-8">

        <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

          <div>
            <h3 className="font-bold text-lg">10+</h3>
            <p className="text-gray-400 text-sm">Practice Areas</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Online</h3>
            <p className="text-gray-400 text-sm">Consultation</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">SEO</h3>
            <p className="text-gray-400 text-sm">Optimised</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Mobile</h3>
            <p className="text-gray-400 text-sm">First</p>
          </div>

        </div>

      </section>



      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            About Kshitija Wadatkar
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Kshitija Wadatkar’s website is a professionally designed legal
            services portal that establishes credibility and makes it easy for
            potential clients to understand the advocate’s practice areas,
            qualifications, and case experience.
          </p>

        </div>


        <div className="space-y-4">

          <InfoCard title="Industry" value="Legal Services" />
          <InfoCard title="Location" value="Nagpur, Maharashtra" />
          <InfoCard title="Type" value="Professional Website" />
          <InfoCard title="Status" value="Live & Active" />

        </div>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-bold mb-2">
          Key Capabilities
        </h2>

        <p className="text-gray-400 mb-10">
          A professional online presence that works as the advocate's digital calling card.
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
          Serving individuals and businesses in Nagpur who need trustworthy legal representation.
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