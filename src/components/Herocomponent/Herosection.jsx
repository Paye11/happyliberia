// import React from "react";
// import { motion } from "framer-motion"; // ⬅️ this was missing

// const Hero = () => {
//   return (
//     <section className="hero-bg min-h-screen flex items-center justify-center relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow text-white">
//             Premium Avocados <br />
//             <span className="text-green-200">From Liberia&apos;s Heart</span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
//             Export-grade Hass avocados grown sustainably by Happy Liberia
//             Cooperative. Faith-inspired farming for global markets.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="#contact"
//               className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
//             >
//               Partner With Us
//             </a>
//             <a
//               href="#about"
//               className="bg-white bg-opacity-20 hover:bg-opacity-30 text-green-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white border-opacity-30"
//             >
//               Learn More
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const HeroHeading = lazy(() => import("./Heroheading"));
const HeroSubtext = lazy(() => import("./Herosubtext"));
const HeroButtons = lazy(() => import("./Herobuttons"));

const Herosection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <HeroHeading />
            <HeroSubtext />
            <HeroButtons />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
