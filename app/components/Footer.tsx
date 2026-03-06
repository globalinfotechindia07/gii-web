// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Global Infotech</h3>
            <p className="text-sm">
              SMART · SECURE · SCALABLE<br />
              Innovative IT Solutions for a Digital Future
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="#clients" className="hover:text-white transition">Clients</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>App Development</li>
              <li>SaaS & ERP</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Global Infotech India Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;