import React from 'react';

const Leadership = () => {
  const leaders = [
    { name: "Tarun Sharma", role: "CEO", bio: "Visionary leader driving GII's mission to transform businesses across India through cutting-edge technology." },
    { name: "Ajinkya Dev", role: "MARKETING & BUSINESS ADMINISTRATION", bio: "Leads GII's business development and marketing strategy, building strong client relationships across sectors." },
    { name: "Dhruv Munghate", role: "BUSINESS DEVELOPMENT ASSOCIATE", bio: "Identifies new business opportunities and builds strong client partnerships to drive GII's growth across key markets." },
    { name: "Kalyani Badhey", role: "MARKETING & SALES HEAD", bio: "Drives GII's sales pipeline and client acquisition with a sharp focus on growth and revenue targets." }
  ];

  return (
    <section className="bg-[#0b0f2a] py-20 px-6 text-center">
      <div className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">Leadership</div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Leadership</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {leaders.map((person, index) => (
          <div key={index} className="bg-[#111633] p-8 rounded-xl border border-gray-700">
            <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
            <p className="text-blue-400 text-xs font-bold mb-4">{person.role}</p>
            <p className="text-gray-400 text-sm">{person.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;