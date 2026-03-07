"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-gray-400 pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column - Massive Font */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="#home" className="flex items-center space-x-3 group">
              <div className="p-3 rounded-2xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <Globe className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter text-white">
                GLOBAL <span className="text-blue-500">INFOTECH</span>
              </h3>
            </Link>
            
            <p className="text-xl font-medium leading-relaxed max-w-md">
              Revolutionizing the digital landscape with 
              <span className="text-white italic"> Smart, Secure, and Scalable </span> 
              solutions since 2015.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <span className="text-lg font-bold text-gray-300">Kotwal nagar, Pratap Nagar, Nagpur 440022</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <span className="text-lg font-bold text-gray-300">hello@globalinfotech.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Products', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-lg font-bold hover:text-blue-500 transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">Expertise</h4>
            <ul className="space-y-4">
              {['Cloud Tech', 'Cyber Security', 'App Dev', 'IT Consulting'].map((item) => (
                <li key={item} className="text-lg font-bold hover:text-white transition-colors cursor-pointer italic">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - Bold Box */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">Stay in the Loop</h4>
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
              <p className="text-sm font-bold text-gray-400 mb-4">Get the latest tech insights monthly.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white font-bold"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social & Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          
          <div className="flex space-x-4">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="p-4 rounded-2xl bg-white/5 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2">
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-black text-gray-500 uppercase tracking-widest leading-loose">
              &copy; {new Date().getFullYear()} GLOBAL INFOTECH INDIA PVT. LTD. <br />
              <span className="text-blue-500/50">Designed for the Next Generation</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;