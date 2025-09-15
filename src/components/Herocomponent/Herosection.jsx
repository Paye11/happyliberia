


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
