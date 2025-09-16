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

// export default Navbar;



// import React, { useState, useEffect } from "react";
// import Icons from "./Icons";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from '../assets/logo.png';

// const Navbar = ({ scrollToSection, refs }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           <div className="flex items-center space-x-2">
//             <img
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//               src={logo}
//               alt="Happy Liberia Cooperative"
//               className="h-30 w-30 rounded object-contain"
//             />
//           </div>

//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">About</button>
//               <button onClick={() => scrollToSection(refs.plantationRef)} className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Our Plantation</button>
//               <button onClick={() => scrollToSection(refs.partnerRef)} className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Partnership</button>
//               <button onClick={() => scrollToSection(refs.contactRef)} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Partner With Us</button>
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
//               {isOpen ? <Icons.Close /> : <Icons.Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass-effect"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <button onClick={() => { scrollToSection(refs.aboutRef); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium hover:text-green-600">About</button>
//               <button onClick={() => { scrollToSection(refs.plantationRef); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium hover:text-green-600">Our Plantation</button>
//               <button onClick={() => { scrollToSection(refs.partnerRef); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium hover:text-green-600">Partnership</button>
//               <button onClick={() => { scrollToSection(refs.contactRef); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium bg-green-700 text-white rounded-md">Partner With Us</button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import Icons from "./Icons";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from "../assets/logo.png";

// const Navbar = ({ scrollToSection, refs }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ safer scroll function (fixes iOS/Android bug with scrollIntoView)
//   const handleNavClick = (ref) => {
//     if (ref?.current) {
//       const yOffset = -70; // adjust for navbar height
//       const y =
//         ref.current.getBoundingClientRect().top +
//         window.scrollY +
//         yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//     setIsOpen(false); // close mobile menu
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled ? "glass-effect shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img
//               onClick={() =>
//                 window.scrollTo({ top: 0, behavior: "smooth" })
//               }
//               src={logo}
//               alt="Happy Liberia Cooperative"
//               className="h-12 w-12 rounded object-contain cursor-pointer"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <button
//                 onClick={() => handleNavClick(refs.aboutRef)}
//                 className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => handleNavClick(refs.plantationRef)}
//                 className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 Our Plantation
//               </button>
//               <button
//                 onClick={() => handleNavClick(refs.partnerRef)}
//                 className="hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 Partnership
//               </button>
//               <button
//                 onClick={() => handleNavClick(refs.contactRef)}
//                 className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Partner With Us
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-gray-900"
//             >
//               {isOpen ? <Icons.Close /> : <Icons.Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden glass-effect relative z-40 shadow-md"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  ">
//               <button
//                 onClick={() => handleNavClick(refs.aboutRef)}
//                 className="block px-3 py-2 text-base font-medium hover:text-green-600"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => handleNavClick(refs.plantationRef)}
//                 className="block px-3 py-2 text-base font-medium hover:text-green-600"
//               >
//                 Our Plantation
//               </button>
//               <button
//                 onClick={() => handleNavClick(refs.partnerRef)}
//                 className="block px-3 py-2 text-base font-medium hover:text-green-600"
//               >
//                 Partnership
//               </button>
//               <button
//                 onClick={() => handleNavClick(refs.contactRef)}
//                 className="block px-3 py-2 text-base font-medium bg-green-700 text-white rounded-md"
//               >
//                 Partner With Us
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Icons from "./Icons";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (path) => {
//     navigate(path);
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled ? "glass-effect shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img
//               onClick={() => handleNavClick("/")}
//               src={logo}
//               alt="Happy Liberia Cooperative"
//               className="h-12 w-12 rounded object-contain cursor-pointer"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <button onClick={() => handleNavClick("/about")} className="hover:text-green-600 px-3 py-2 text-sm font-medium">
//                 About
//               </button>
//               <button onClick={() => handleNavClick("/plantation")} className="hover:text-green-600 px-3 py-2 text-sm font-medium">
//                 Our Plantation
//               </button>
//               <button onClick={() => handleNavClick("/partnership")} className="hover:text-green-600 px-3 py-2 text-sm font-medium">
//                 Partnership
//               </button>
//               <button
//                 onClick={() => handleNavClick("/contact")}
//                 className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium"
//               >
//                 Partner With Us
//               </button>
//             </div>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
//               {isOpen ? <Icons.Close /> : <Icons.Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden glass-effect relative z-40 shadow-md"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <button onClick={() => handleNavClick("/about")} className="block px-3 py-2 text-base font-medium hover:text-green-600">
//                 About
//               </button>
//               <button onClick={() => handleNavClick("/plantation")} className="block px-3 py-2 text-base font-medium hover:text-green-600">
//                 Our Plantation
//               </button>
//               <button onClick={() => handleNavClick("/partnership")} className="block px-3 py-2 text-base font-medium hover:text-green-600">
//                 Partnership
//               </button>
//               <button
//                 onClick={() => handleNavClick("/contact")}
//                 className="block px-3 py-2 text-base font-medium bg-green-700 text-white rounded-md"
//               >
//                 Partner With Us
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


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
          {/* Logo */}
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

          {/* Desktop Menu */}
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

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
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
