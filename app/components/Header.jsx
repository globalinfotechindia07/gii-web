"use client";
import Image from "next/image";
// import logo from "@/public/GII.png";
import logo from "../../public/GII.png";

// import Image from "next/image";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <nav className="px-6">
        <div className="flex items-center h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">

            <Image
              src={logo}
              alt="Global Infotech Logo"
              // className="w-[60px] h-[60px] object-contain"
              width={60}
              height={60}

            />
             {/* <img
              src='../GII.png'
              alt="Global Infotech Logo"
              // className="w-[60px] h-[60px] object-contain"
              width={60}
              height={60}

            /> */}

            <div className="flex flex-col leading-none">
              <h1 className="text-lg font-extrabold">
                <span className="text-white">GLOBAL </span>
                <span className="text-blue-500">INFOTECH INDIA</span>
              </h1>

              <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                Digital Excellence
              </span>
            </div>

          </a>

        </div>
      </nav>
    </header>
  );
};

export default Header;