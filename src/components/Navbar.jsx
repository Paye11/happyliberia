import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Icons from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "cursor-pointer hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <img
                src={logo}
                alt="Happy Liberia Cooperative"
                className="h-30 w-30 rounded object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="about" smooth={true} duration={500} offset={-70} className={linkClass}>
                About
              </Link>
              <Link to="plantation" smooth={true} duration={500} offset={-70} className={linkClass}>
                Our Plantation
              </Link>
              <Link to="partnership" smooth={true} duration={500} offset={-70} className={linkClass}>
                Partnership
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-effect relative z-40 shadow-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-green-600 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="plantation"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-green-600 cursor-pointer"
              >
                Our Plantation
              </Link>
              <Link
                to="partnership"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-green-600 cursor-pointer"
              >
                Partnership
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium bg-green-700 text-white rounded-md cursor-pointer"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
