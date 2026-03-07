import React from "react"

function Portfolio() {
  return (
    <div className="bg-[#050816] text-gray-300">

      {/* HERO SECTION */}
      <section className="min-h-[420px] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-[#0b0f2a] via-[#1a1d45] to-[#2a1c54]">

        {/* Badge */}
        <div className="border border-blue-500 text-blue-400 text-xs tracking-widest px-5 py-2 rounded-full mb-6">
          Our Work
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Portfolio{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Global Infotech India
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-6 w-100% text-sm md:text-base leading-relaxed">
          A showcase of projects we've built for clients across India and beyond.
        </p>

      </section>
    </div>
  );
}

export default Portfolio;

