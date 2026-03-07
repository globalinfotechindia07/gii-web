import React from "react";

const projects = [
  {
    image: "/images/ERP.jpeg",
    tag: "ERP",
    title: "Dronacharya ERP",
    text: "A comprehensive school ERP system streamlining admissions, attendance, timetables, fees, and academic management for educational institutions."
  },
  {
    image: "/images/CCRMS.jpeg",
    tag: "FINTECH",
    title: "CCRMS",
    text: "A Co-operative Credit Risk Management System designed to monitor and manage credit risk."
  },
  {
    image: "#",
    tag: "GOVTECH",
    title: "Replete",
    text: "A digital property tax application enabling citizens to view and pay property taxes easily."
  },
  {
    image: "#",
    tag: "E-GOV",
    title: "Gram Panchayat Tigaon",
    text: "An e-Gram Panchayat platform bringing digital governance to rural communities."
  },
  {
    image: "/images/Kshitij.jpeg",
    tag: "LEGAL",
    title: "Kshitija Wadaskar",
    text: "A professional website for an advocate showcasing legal services and consultation booking."
  },
  {
    image: "/images/Shubh-Labh Finance.jpeg",
    tag: "Finance",
    title: "Shubh Labh Finance",
    text: "A banking platform offering information on savings, loans, and financial services."
  },
  {
    image: "/images/sarthi-logo.png",
    tag: "NGO",
    title: "Sarthi NGO",
    text: "A dedicated website highlighting volunteer opportunities and social initiatives."
  },
  {
    image: "/images/saprem Ngo.jpeg",
    tag: "NGO",
    title: "Saprem NGO",
    text: "A platform showcasing humanitarian efforts and community outreach activities."
  },
  {
    image: "/images/Dental Clinic.jpeg",
    tag: "HEALTHTECH",
    title: "Dental Clinic Management Software",
    text: "A complete dental clinic management system for patient records and appointments."
  }
];

const ValueCard = ({ image, tag, title, text }) => {
  return (
    <div className="bg-[#0B0F2A] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition duration-300">

      <div className="flex justify-end">
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">
          {tag}
        </span>
      </div>

      <div className="flex justify-center my-6">
        <img
          src={image}
          alt={title}
          className="w-25 h-25 object-contain"
        />
      </div>

      <h3 className="text-white font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {text}
      </p>

      <a href="#" className="text-blue-400 text-sm hover:underline">
        View Details →
      </a>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#05081C]">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <ValueCard
            key={index}
            image={project.image}
            tag={project.tag}
            title={project.title}
            text={project.text}
          />
        ))}

      </div>

    </section>
  );
};

export { ProjectsSection };