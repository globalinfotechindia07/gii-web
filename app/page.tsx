import React from "react";
import HeroSection from "./hero-section/HeroSection";
import ServicesSection from "./services-section/ServicesSection";
import ProductsSection from "./products-section/ProductsSection";
import ClientsSection from "./clients-section/ClientsSection";
import PartnersSection from "./partners-section/PartnersSection";
import ContactSection from "./contact-section/ContactSection";
import WhyChooseUs from "./why-choose-us/WhyChooseUs";
import Connect from "./connect/Connect";

function page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUs />
      <ClientsSection />
      <PartnersSection />
      <Connect />
      {/* <ContactSection /> */}
    </div>
  );
}

export default page;
