"use client"

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 pt-14 pb-8 border-t border-gray-800">

      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>

            {/* Logo */}
            <Image 
              src="/images/Global Infotech.jpeg"
              alt="Global Infotech India Logo"
              width={100}
              height={100}
              className="mb-4 ml-3"
              style={{borderRadius:'50%'}}
            />

            <h1 className="text-2xl font-bold text-white mb-4 pl-5">
              Global Infotech India
            </h1>

            <p className="leading-relaxed text-gray-400 text-mid pl-5">
              Smart, Secure and Scalable IT solutions helping businesses
              grow in the digital world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 pl-5">
              <a
                href="https://www.facebook.com/globalinfotechindia07?rdid=6wVK3xTB6AClSO4l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EettKSsXv%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook size={20}/>
              </a>

              <a
                href="https://www.linkedin.com/company/global-infotech-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin size={20}/>
              </a>

              <a
                href="https://www.instagram.com/global_infotech_india?igsh=anJnb2p2ZTZlajFz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Instagram size={20}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg pl-5">
              Quick Links
            </h3>

            <ul className="space-y-3 pl-5">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link href="/contact-section" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy_policy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms_and_condition" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-1 text-lg pl-5">
              Services
            </h3>

            <ul className="space-y-3 pl-5">
              <li className="hover:text-blue-400 cursor-pointer">Web Development</li>
              <li className="hover:text-blue-400 cursor-pointer">App Development</li>
              <li className="hover:text-blue-400 cursor-pointer">SaaS & ERP Solutions</li>
              <li className="hover:text-blue-400 cursor-pointer">Cybersecurity</li>
              <li className="hover:text-blue-400 cursor-pointer">IT Consulting</li>
              <li className="hover:text-blue-400 cursor-pointer">Digital Marketing</li>
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
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-blue-400 transition"
              >
                <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={22}/>
                <span>
                  Shantiniketan Society, Pallavi apartments, Plot No 1,
                  Outer Ring Rd, Pratap Nagar, Nagpur, Maharashtra 440022
                </span>
              </a>

              <a
                href="mailto:info@globalinfotechindia.com"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <Mail className="text-blue-500 flex-shrink-0" size={20}/>
                <span>info@globalinfotechindia.com</span>
              </a>

              <a
                href="tel:+918788610181"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <Phone className="text-blue-500 flex-shrink-0" size={20}/>
                <span>+91 8788610181</span>
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
            <Link href="/privacy_policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>

            <Link href="/terms_and_condition" className="hover:text-blue-400 transition">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}