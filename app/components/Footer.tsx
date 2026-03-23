"use client";
import Image from "next/image";
import logo from "@/public/GII.png";

import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

/* ✅ Logo Constant */
const LOGO = [{
  image: "Global Infotech.jpeg",
  alt: "Global Infotech India Logo",
}];

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 pt-14 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>

            {/* Logo */}
            <Image
              src={logo}
              alt="Global Infotech Logo"
              width={60}
              height={60}
              className="w-[100px] h-[100px] mb-4 ml-3 rounded-full object-contain"
            />

            <h1 className="text-2xl font-bold text-white mb-4 pl-5">
              Global Infotech India
            </h1>

            <p className="leading-relaxed text-gray-400 text-sm pl-5">
              Smart, Secure and Scalable IT solutions helping businesses
              grow in the digital world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 pl-5">

              <a
                href="https://www.facebook.com/globalinfotechindia07?rdid=6wVK3xTB6AClSO4l"
                target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/global-infotech-india/"
                target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/global_infotech_india"
                target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Instagram size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg pl-5">
              Quick Links
            </h3>

            <ul className="space-y-3 pl-5">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400">Portfolio</a></li>
              <li><a href="/contact-section" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/privacy_policy" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/terms_and_condition" className="hover:text-blue-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg pl-5">
              Services
            </h3>

            <ul className="space-y-3 pl-5">
              <li>Web Development</li>
              <li>App Development</li>
              <li>SaaS & ERP Solutions</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg pl-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm pl-5">

              <a
                href="https://maps.app.goo.gl/cKrAF3hAikWUKgj86"
                target="_blank"
                className="flex items-start gap-3 hover:text-blue-400"
              >
                <MapPin className="text-blue-500 mt-1" size={22} />
                <span>
                  Shantiniketan Society, Pallavi apartments, Plot No 1,
                  Outer Ring Rd, Pratap Nagar, Nagpur, Maharashtra 440022
                </span>
              </a>

              <a
                href="mailto:info@globalinfotechindia.com"
                className="flex items-center gap-3 hover:text-blue-400"
              >
                <Mail className="text-blue-500" size={20} />
                info@globalinfotechindia.com
              </a>

              <a
                href="tel:+918788610181"
                className="flex items-center gap-3 hover:text-blue-400"
              >
                <Phone className="text-blue-500" size={20} />
                +91 8788610181
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Global Infotech India Pvt. Ltd.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="/privacy_policy" className="hover:text-blue-400">Privacy Policy</a>
            <a href="/terms_and_condition" className="hover:text-blue-400">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
}