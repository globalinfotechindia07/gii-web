"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-blue-400">Global</span> Infotech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-blue-400 transition">Home</Link>
            <Link href="#services" className="hover:text-blue-400 transition">Services</Link>
            <Link href="#products" className="hover:text-blue-400 transition">Products</Link>
            <Link href="#clients" className="hover:text-blue-400 transition">Clients</Link>
            <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="hover:text-blue-400 transition">Home</Link>
              <Link href="#services" className="hover:text-blue-400 transition">Services</Link>
              <Link href="#products" className="hover:text-blue-400 transition">Products</Link>
              <Link href="#clients" className="hover:text-blue-400 transition">Clients</Link>
              <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;