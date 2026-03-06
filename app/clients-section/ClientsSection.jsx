"use client";
import React from 'react';

const ClientsSection = () => {
  const clients = [
    "Global Infotech India Pvt. Ltd.",
    "Kiran Ventures",
    "GBC UK",
    "Kanu Ventures",
    "Felix-ITS",
    "Satish NGO",
    "Shivam NDO",
    "Kshitij Wankhade"
  ];

  return (
    <section id="clients" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Businesses and organizations that trust us to power their digital journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;