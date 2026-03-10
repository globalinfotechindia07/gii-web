import {
  Home,
  Calculator,
  CreditCard,
  FileText,
  BarChart3,
  Smartphone,
  Building2,
  ClipboardList,
  ArrowLeft
} from "lucide-react";

export default function Replete() {

  const features = [
    {
      title: "Property Lookup",
      desc: "Citizens search and view property details, historical assessment records, and outstanding dues instantly.",
      icon: <Home size={22}/>
    },
    {
      title: "Tax Calculator",
      desc: "Automatic tax computation based on property type, area, usage, and applicable rules.",
      icon: <Calculator size={22}/>
    },
    {
      title: "Online Payment",
      desc: "Secure payment gateway integration for one-time and installment-based property tax payments.",
      icon: <CreditCard size={22}/>
    },
    {
      title: "Digital Receipts",
      desc: "Instant downloadable and printable payment receipts with official municipality seal.",
      icon: <FileText size={22}/>
    },
    {
      title: "Revenue Dashboard",
      desc: "Municipal officers get ward-wise collection analytics, defaulter lists, and revenue insights.",
      icon: <BarChart3 size={22}/>
    },
    {
      title: "Mobile Responsive",
      desc: "Fully optimized for mobile devices so citizens can pay taxes from anywhere.",
      icon: <Smartphone size={22}/>
    }
  ];


  const audience = [
    {
      title: "Property Owners",
      desc: "Residential and commercial property holders who want hassle-free tax payments.",
      icon: <Home size={28}/>
    },
    {
      title: "Municipal Corporations",
      desc: "Urban local bodies looking to improve collection efficiency and reduce manual workload.",
      icon: <Building2 size={28}/>
    },
    {
      title: "Tax Officers",
      desc: "Municipal tax departments managing collection data and defaulter monitoring.",
      icon: <ClipboardList size={28}/>
    }
  ];


  return (
    <div className="bg-[#0b1023] text-white min-h-screen mt-10">

      {/* HERO */}
      <section className="mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center md:pl-10">

        <div>

          <span className="bg-blue-900 text-xs px-3 py-1 rounded-full">
            GOVTECH
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Replete
          </h1>

          <p className="text-gray-400 mt-4">
            A digital property tax platform simplifying municipal revenue
            collection for citizens.
          </p>


          <div className="flex flex-wrap gap-4 mt-6">

            <button className="flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-lg text-white font-medium cursor-not-allowed opacity-50">
              Coming Soon
            </button>

            <a href="/portfolio">
              <button className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg hover:bg-white/5 transition cursor-pointer">
                <ArrowLeft size={18}/>
                Back to Portfolio
              </button>
            </a>

          </div>

        </div>


        <div className="flex justify-center">
          <div className="bg-[#141a3c] p-12 rounded-2xl shadow-lg">
            <Home size={70} className="text-blue-400"/>
          </div>
        </div>

      </section>


      {/* STATS BAR */}

      <section className="border-y border-gray-800 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

          <div>
            <h3 className="font-bold text-lg">100%</h3>
            <p className="text-gray-400 text-sm">Online</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Instant</h3>
            <p className="text-gray-400 text-sm">Receipts</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Multi-ward</h3>
            <p className="text-gray-400 text-sm">Support</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Coming</h3>
            <p className="text-gray-400 text-sm">Soon</p>
          </div>

        </div>
      </section>


      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            About Replete
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Replete is a GovTech solution that modernises the property tax
            experience for urban local bodies and their citizens. The platform
            allows property owners to log in, view tax assessments, calculate
            dues, and make payments online — eliminating the need to visit
            municipal offices.
          </p>

        </div>


        <div className="space-y-4">

          <InfoCard title="Industry" value="Government / GovTech"/>
          <InfoCard title="Focus Region" value="Maharashtra, India"/>
          <InfoCard title="Type" value="Web Application"/>
          <InfoCard title="Status" value="In Development"/>

        </div>

      </section>


      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-bold mb-2">
          Key Capabilities
        </h2>

        <p className="text-gray-400 mb-10">
          Designed to bring the efficiency of digital government to property tax.
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          {features.map((f, i) => (

            <div
              key={i}
              className="bg-[#121735] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >

              <div className="text-blue-400 mb-4">
                {f.icon}
              </div>

              <h3 className="font-semibold">
                {f.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {f.desc}
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
          Serving urban local bodies and property owners across Maharashtra.
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