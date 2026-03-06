// components/ServicesSection.jsx
import React from 'react';
import { Globe, Smartphone, Cloud, Shield, Brain, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={40} className="text-blue-600" />,
      title: "Web Development",
      description: "Custom responsive websites & web apps built with the latest technologies for every screen size."
    },
    {
      icon: <Smartphone size={40} className="text-blue-600" />,
      title: "App Development",
      description: "Native & cross-platform mobile apps for iOS and Android using Flutter & React Native."
    },
    {
      icon: <Cloud size={40} className="text-blue-600" />,
      title: "SaaS & ERP Solutions",
      description: "Scalable cloud-based SaaS platforms and ERP systems for schools, businesses & enterprises."
    },
    {
      icon: <Shield size={40} className="text-blue-600" />,
      title: "Cybersecurity & Networking",
      description: "Penetration testing, security audits, firewall setup & enterprise-grade network architecture."
    },
    {
      icon: <Brain size={40} className="text-blue-600" />,
      title: "IT Consulting & Automation",
      description: "Strategic IT consulting & workflow automation to align technology with your business goals."
    },
    {
      icon: <TrendingUp size={40} className="text-blue-600" />,
      title: "Digital Marketing",
      description: "SEO, Google Ads & social media campaigns that drive real traffic and business growth."
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">WHAT WE DO</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services We Provide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored for every business — from startups to large enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;