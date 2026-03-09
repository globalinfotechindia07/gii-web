"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Server,
  Package,
  Users,
  Globe,
  Zap,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Server },
    { href: "/portfolio", label: "Portfolio", icon: Package },
    { href: "/services", label: "Services", icon: Server },
    { href: "/our-team", label: "Team", icon: Users },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 transition-all duration-500">
      
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div
          className={`flex items-center justify-between transition-all duration-500
          ${scrolled ? "h-16" : "h-20 sm:h-24"}`}
        >
          
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            {/* Logo Image */}
            <div className="flex items-center  rounded-[50%]">
              <Image
                src="/images/Global Infotech.jpeg"
                alt="Global Infotech Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
                style={{borderRadius:'50%'}}
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col leading-none">
              <h1 className="text-sm sm:text-lg lg:text-xl font-extrabold tracking-tight">
                <span className="text-white">GLOBAL</span>
                <span className="text-blue-500">INFOTECH INDIA</span>
              </h1>

              <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase">
                Digital Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-xl backdrop-blur">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setActiveLink(href)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all
                ${
                  activeLink === href
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact-section"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-white text-black rounded-xl transition hover:bg-blue-600 hover:text-white"
          >
            <Zap size={16} />
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 border border-white/10"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-4 p-6 pt-28">

          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => {
                setActiveLink(href);
                setIsOpen(false);
              }}
              className={`flex items-center gap-4 p-5 rounded-2xl text-lg font-bold transition
              ${
                activeLink === href
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-300"
              }`}
            >
              <Icon size={22} />
              {label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="mt-4 flex items-center justify-center gap-2 p-4 bg-white text-black rounded-xl font-bold"
          >
            <Zap size={18} />
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;