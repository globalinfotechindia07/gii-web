// components/ProductsSection.jsx
import React from 'react';
import { Building2, Wallet, Users, Shield, Clock, Headphones } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: <Building2 size={40} className="text-blue-600" />,
      title: "Dronacharya ERP",
      subtitle: "INNOVATING SCHOOL MANAGEMENT",
      description: "A comprehensive School ERP system designed to digitize and streamline every aspect of school management — from admissions and attendance to fees, results and communication."
    },
    {
      icon: <Wallet size={40} className="text-blue-600" />,
      title: "Co-operative Credit Risk Management System",
      description: "A comprehensive Co-operative Credit Risk Management System that helps financial institutions assess, monitor and manage credit risk effectively with real-time data and analytics."
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: "Smart Workforce",
      description: "Wearable IoT devices for workforce monitoring."
    },
    {
      icon: <Shield size={40} className="text-blue-600" />,
      title: "Secure File Sharing",
      description: "Secure file sharing platform for seamless collaboration."
    },
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: "On-Time Delivery",
      description: "Agile methodology & strict project timelines ensure your product is delivered on time, every time."
    },
    {
      icon: <Headphones size={40} className="text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support & AMC packages to keep your systems running without interruption."
    }
  ];

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">OUR PRODUCTS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Products We Built</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative software products developed by GI — purpose-built for real-world needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              {product.subtitle && (
                <p className="text-blue-600 text-sm font-semibold mb-2">{product.subtitle}</p>
              )}
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;