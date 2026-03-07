import React from 'react';
import { Linkedin } from 'lucide-react';

const ExpertTeam = () => {
  const experts = [
    { initials: "DT", name: "Dinesh Tawade", role: "TEAM LEAD", bio: "Leads the development team with expertise in building end-to-end web applications using modern frontend and backend technologies." },
    { initials: "MS", name: "Manasi Sharma", role: "FULL STACK DEVELOPER", bio: "Skilled in React, Node.js and database design, delivering robust and scalable web solutions." },
    { initials: "RI", name: "Rohan Itenkar", role: "FULL STACK DEVELOPER", bio: "Passionate developer with hands-on experience across the full software development lifecycle." },
    { initials: "JS", name: "Jayesh Sharma", role: "PERFORMANCE MARKETER", bio: "Data-driven marketer specializing in Google Ads, Meta campaigns and ROI-focused digital strategies." },
    { initials: "RN", name: "Riddhi Nahate", role: "FLUTTER DEVELOPER", bio: "Specializes in building beautiful cross-platform mobile applications using Flutter for iOS and Android." },
    { initials: "GD", name: "Gayatri Dadore", role: "HR", bio: "Manages talent acquisition, employee relations and company culture to build a thriving team at GII." },
    { initials: "JK", name: "Jay Karangale", role: "BUSINESS DEVELOPMENT ASSOCIATE", bio: "Identifies new business opportunities and nurtures client relationships to drive GII's growth." }
  ];

  return (
    <section className="bg-[#0b0f2a] py-20 px-6 text-center">
      <div className="inline-block border border-blue-500/30 text-blue-400 text-xs tracking-widest px-5 py-2 rounded-full mb-6 uppercase">
        Experts
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Expert Team</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {experts.map((expert, index) => (
          <div key={index} className="bg-[#111633] p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
              {expert.initials}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
            <p className="text-blue-400 text-[10px] font-bold mb-4 tracking-wider">{expert.role}</p>
            <p className="text-gray-400 text-sm mb-6">{expert.bio}</p>
            <Linkedin size={18} className="text-gray-400 hover:text-blue-500 cursor-pointer mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertTeam;