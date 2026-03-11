import React from "react";
import HeroSection from "./hero-section/HeroSection";
import ServicesSection from "./services-section/ServicesSection";
import ProductsSection from "./products-section/ProductsSection";
import ClientsSection from "./clients-section/ClientsSection";
import PartnersSection from "./partners-section/PartnersSection";
import ContactSection from "./contact-section/ContactSection";
import Connect from "./connect/Connect";
import WhyChooseUsHeader from "./why-choose-us/WhyChooseUsHeader";
import WhyChooseUsCards from "./why-choose-us/WhyChooseUsCards";
import FAQ from "./faq/FAQ";
function page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUsHeader />
      <WhyChooseUsCards />
      <ClientsSection />
      <PartnersSection />
      <Connect />
      {/* <ContactSection /> */}
      <FAQ/>
    </div>
  );
}

export default page;
