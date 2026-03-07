"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Home, 
  Server, 
  Package, 
  Users, 
  Phone,
  Globe,
  Zap
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Server },
    { href: '#products', label: 'Products', icon: Package },
    { href: '#clients', label: 'Clients', icon: Users },
    { href: '#contact', label: 'Contact', icon: Phone },
  ];

  return (
    <header className="fixed w-full z-[100] transition-all duration-500 top-0 left-0">
      {/* Dynamic Background Wrapper */}
      <div className={`
        absolute inset-0 transition-all duration-500 
        ${scrolled 
          ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-16 sm:h-20' 
          : 'bg-transparent h-24 sm:h-28'}
      `} />

      <nav className="container mx-auto px-6 h-full relative">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16 sm:h-20' : 'h-24 sm:h-28'}`}>
          
          {/* Logo Section - Extra Bold */}
          <Link 
            href="#home" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="p-2 rounded-xl bg-blue-600 group-hover:rotate-[360deg] transition-transform duration-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-black tracking-tighter leading-none">
                <span className="text-white">GLOBAL</span>
                <span className="text-blue-500">INFOTECH INDIA</span>
              </h1>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                Digital Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Links - Floating Look */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setActiveLink(href)}
                className={`
                  relative px-5 py-2.5 rounded-xl text-sm font-black tracking-wide
                  transition-all duration-300 flex items-center gap-2
                  ${activeLink === href 
                    ? 'text-white bg-blue-600 shadow-lg shadow-blue-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}
                `}
              >
                <Icon size={16} className={activeLink === href ? 'animate-pulse' : ''} />
                {label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Bold Pulse */}
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-black text-sm
                       transition-all duration-300 hover:bg-blue-600 hover:text-white 
                       hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
          >
            <Zap size={16} fill="currentColor" />
            GET STARTED
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay Look */}
        <div 
          className={`
            md:hidden fixed inset-0 top-[64px] sm:top-[80px] h-[100vh]
            bg-black/95 backdrop-blur-3xl p-6 transition-all duration-500
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          `}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => { setIsOpen(false); setActiveLink(href); }}
                className={`
                  flex items-center justify-between p-6 rounded-3xl border transition-all duration-300
                  ${activeLink === href 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' 
                    : 'bg-white/5 border-white/5 text-gray-300'}
                `}
              >
                <div className="flex items-center gap-4">
                  <Icon size={24} />
                  <span className="text-2xl font-black tracking-tight">{label}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                   →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;