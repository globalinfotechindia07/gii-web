"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/GII.png";

import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#020617] text-gray-400 pt-14 pb-8 border-t border-gray-800">
      <div className=" mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center">

            <div className="w-[90px] h-[90px] mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md ring-2 ring-white/20">
              <Image
                src={logo}
                alt="Global Infotech Logo"
                width={90}
                height={90}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <h1 className="text-xl font-bold text-white mb-3">
              Global Infotech India
            </h1>

            <p className="text-gray-400 text-sm max-w-xs">
              Smart, Secure and Scalable IT solutions helping businesses
              grow in the digital world.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/globalinfotechindia07?rdid=6wVK3xTB6AClSO4l" target="_blank">
                <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                  <Facebook size={18} />
                </div>
              </a>

              <a href="https://www.linkedin.com/company/global-infotech-india/" target="_blank">
                <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                  <Linkedin size={18} />
                </div>
              </a>

              <a href="https://www.instagram.com/global_infotech_india" target="_blank">
                <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                  <Instagram size={18} />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left sm:text-left md:pl-10">
            <h3 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li onClick={() => router.push("/")} className="cursor-pointer hover:text-blue-400">Home</li>
              <li onClick={() => router.push("/about")} className="cursor-pointer hover:text-blue-400">About</li>
              <li onClick={() => router.push("/portfolio")} className="cursor-pointer hover:text-blue-400">Portfolio</li>
              <li onClick={() => router.push("/contact")} className="cursor-pointer hover:text-blue-400">Contact</li>
              <li onClick={() => router.push("/privacy_policy")} className="cursor-pointer hover:text-blue-400">Privacy Policy</li>
              <li onClick={() => router.push("/terms_and_condition")} className="cursor-pointer hover:text-blue-400">Terms & Conditions</li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left sm:text-left">
            <h3 className="text-white font-semibold mb-5 text-lg">
              Services
            </h3>

            <ul className="space-y-3">
              <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-blue-400">Web Development</li>
              <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-blue-400">App Development</li>
              <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-blue-400">SaaS & ERP Solutions</li>
              <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-blue-400">Cybersecurity</li>
              <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-blue-400">IT Consulting</li>
              <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-blue-400">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left sm:text-left md:pl-10">
            <h3 className="text-white font-semibold mb-5 text-lg">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">

              <a
                href="https://maps.app.goo.gl/cKrAF3hAikWUKgj86"
                target="_blank"
                className="flex items-left gap-3 justify-left sm:justify-start hover:text-blue-400"
              >
                <MapPin className="text-blue-500" size={20} />
                <span>
                  Shantiniketan Society, Pratap Nagar, Nagpur, Maharashtra 440022
                </span>
              </a>

              <a
                href="mailto:info@globalinfotechindia.com"
                className="flex items-left gap-3 justify-left sm:justify-start hover:text-blue-400"
              >
                <Mail className="text-blue-500" size={18} />
                info@globalinfotechindia.com
              </a>

              <a
                href="tel:+918788610181"
                className="flex items-left gap-3 justify-left sm:justify-start hover:text-blue-400"
              >
                <Phone className="text-blue-500" size={18} />
                +91 8788610181
              </a>

            </div>
          </div>

        </div>

        {/* 🔥 PREMIUM BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col items-center gap-4 text-center">

          {/* Glow Divider */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Global Infotech India Pvt. Ltd.
            </span>{" "}
            — All Rights Reserved
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
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
  );
}