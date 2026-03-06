import React from 'react'
import HeroSection from "./hero-section/HeroSection"
import ServicesSection from "./services-section/ServicesSection"
import ProductsSection from "./products-section/ProductsSection"
import ClientsSection from "./clients-section/ClientsSection"
import PartnersSection from "./partners-section/PartnersSection"
import ContactSection from "./contact-section/ContactSection"



function page() {
  return (
    <div>
   <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <ClientsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  )
}

export default page
