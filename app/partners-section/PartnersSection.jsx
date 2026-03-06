// components/PartnersSection.jsx
import React from 'react';

const PartnersSection = () => {
  const partners = ["IBM", "Microsoft", "Oracle", "Salesforce"];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">PARTNERS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with leading companies to create innovative solutions that help businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="text-xl font-bold text-gray-800">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;