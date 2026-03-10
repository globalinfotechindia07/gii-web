import {
  CalendarCheck,
  Users,
  Activity,
  FileText,
  IndianRupee,
  HeartPulse,
  ClipboardList,
  ArrowLeft
} from "lucide-react";

export default function DentalClinicManagement() {

  const features = [
    {
      icon: <CalendarCheck size={22} />,
      title: "Appointment Scheduling",
      desc: "Online and walk-in booking with automated SMS reminders and cancellation management."
    },
    {
      icon: <Users size={22} />,
      title: "Patient Records",
      desc: "Complete digital patient files including medical history, allergies, X-rays and treatment notes."
    },
    {
      icon: <Activity size={22} />,
      title: "Dental Charting",
      desc: "Interactive dental charts documenting tooth conditions, treatments and procedures."
    },
    {
      icon: <ClipboardList size={22} />,
      title: "Treatment Plans",
      desc: "Multi-visit treatment plans with cost estimates, approvals and progress tracking."
    },
    {
      icon: <IndianRupee size={22} />,
      title: "Billing & Invoicing",
      desc: "Automatic invoice generation, payment tracking, insurance claims and revenue reports."
    },
    {
      icon: <HeartPulse size={22} />,
      title: "Follow-up Management",
      desc: "Automated reminders for post-treatment care and patient recall scheduling."
    }
  ];


  const audience = [
    {
      icon: "🦷",
      title: "Dental Clinics",
      desc: "Single-chair practices and multi-dentist clinics seeking a modern patient management system."
    },
    {
      icon: "👨‍⚕️",
      title: "Dentists & Specialists",
      desc: "Practitioners who want to focus on patient care instead of paperwork."
    },
    {
      icon: "📋",
      title: "Clinic Administrators",
      desc: "Front desk and admin staff managing appointments, billing and communications."
    }
  ];


  return (
    <div className="bg-[#0b1023] text-white min-h-screen mt-10">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-blue-900 text-xs px-3 py-1 rounded-full">
            HEALTHTECH
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Dental Clinic Management Software
          </h1>

          <p className="text-gray-400 mt-4">
            A complete digital solution for modern dental clinic operations.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <a
              href="https://mankardentalclinic.com/hospital/login"
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
            <Activity size={70} className="text-blue-400"/>
          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="border-y border-gray-800 py-8">

        <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

          <div>
            <h3 className="font-bold text-lg">360°</h3>
            <p className="text-gray-400 text-sm">Patient View</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Digital</h3>
            <p className="text-gray-400 text-sm">Dental Charts</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Instant</h3>
            <p className="text-gray-400 text-sm">Billing</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Secure</h3>
            <p className="text-gray-400 text-sm">Records</p>
          </div>

        </div>

      </section>



      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            About Dental Clinic Management Software
          </h2>

          <p className="text-gray-400 leading-relaxed">
            This dental clinic management system digitises every aspect of clinic
            operations — from appointment scheduling and patient records to
            treatment planning, billing, and follow-up care — all in a single
            integrated platform.
          </p>

        </div>


        <div className="space-y-4">

          <InfoCard title="Industry" value="Healthcare / HealthTech" />
          <InfoCard title="Location" value="Nagpur, Maharashtra" />
          <InfoCard title="Type" value="Clinic Management System" />
          <InfoCard title="Status" value="Live & Active" />

        </div>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-bold mb-2">
          Key Capabilities
        </h2>

        <p className="text-gray-400 mb-10">
          Every module reflects the workflow of a modern dental clinic.
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
          Built for dental practices ready to move beyond paper records.
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