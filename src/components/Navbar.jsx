// import React from 'react'
// import { useState, useEffect } from "react";
// import Icons from "./Icons";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from '../assets/logo.png';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//             const [scrolled, setScrolled] = useState(false);

//             useEffect(() => {
//                 const handleScroll = () => {
//                     setScrolled(window.scrollY > 50);
//                 };
//                 window.addEventListener('scroll', handleScroll);
//                 return () => window.removeEventListener('scroll', handleScroll);
//             }, []);
//   return (
//                 <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex justify-between items-center h-16">
                            
//                             <div className="flex items-center space-x-2">
//   <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//     src={logo}
//     alt="Happy Liberia Cooperative"
//     className="h-30 w-30 rounded object-contain"
//   />
 
// </div>

                            
//                             <div className="hidden md:block">
//                                 <div className="ml-10 flex items-baseline space-x-4">
//                                     <a href="#about" className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
//                                     <a href="#plantation" className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Our Plantation</a>
//                                     <a href="#partnership" className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Partnership</a>
//                                     <a href="#contact" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Partner With Us</a>
//                                 </div>
//                             </div>
                            
//                             <div className="md:hidden">
//                                 <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
//                                     {isOpen ? <Icons.Close /> : <Icons.Menu />}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <AnimatePresence>
//                         {isOpen && (
//                             <motion.div 
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 className="md:hidden glass-effect"
//                             >
//                                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                                     <a href="#about" className="block px-3 py-2 text-base font-medium hover:text-green-600" onClick={() => setIsOpen(false)}>About</a>
//                                     <a href="#plantation" className="block px-3 py-2 text-base font-medium hover:text-green-600" onClick={() => setIsOpen(false)}>Our Plantation</a>
//                                     <a href="#partnership" className="block px-3 py-2 text-base font-medium hover:text-green-600" onClick={() => setIsOpen(false)}>Partnership</a>
//                                     <a href="#contact" className="block px-3 py-2 text-base font-medium bg-green-700 text-white rounded-md" onClick={() => setIsOpen(false)}>Partner With Us</a>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </nav>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // Navbar background on scroll

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              src={logo}
              alt="Happy Liberia Cooperative"
              // ✅ Fixed: Tailwind valid sizes instead of h-30 w-30
              className="h-12 w-12 sm:h-16 sm:w-16 rounded object-contain cursor-pointer"
            />
          </div>

          {/* Middle: Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#plantation"
                className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Plantation
              </a>
              <a
                href="#partnership"
                className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Partnership
              </a>
              <a
                href="#contact"
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>

          {/* Right: Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#plantation"
                className="block px-3 py-2 text-base font-medium hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Our Plantation
              </a>
              <a
                href="#partnership"
                className="block px-3 py-2 text-base font-medium hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Partnership
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium bg-green-700 text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
