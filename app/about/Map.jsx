export default function FindUs() {
  return (
    <section className="py-10 px-5 bg-[#050816] text-center">

      <div className="w-[100%] mx-auto">

        {/* badge */}
        <div className="border border-blue-500 text-blue-400 text-xs tracking-widest px-5 py-2 rounded-full inline-block mb-6">
          OUR LOCATION
        </div>

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Us
          </span>
        </h2>

        {/* subtitle */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-20 lg:px-60 mb-12">
          Come visit us at our office in Nagpur, Maharashtra.
        </p>

        {/* map container */}
        <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">

          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps?q=Nagpur,Maharashtra&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="w-[100%] h-[450px]"
          ></iframe>

        </div>

      </div>

    </section>
  );
}