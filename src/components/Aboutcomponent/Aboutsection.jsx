import React from "react";
import { motion } from "framer-motion";
import AboutStats from "./Aboutstats";
import AboutImage from "./Aboutimage";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Aboutsection = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l-4 border-green-600 pl-6"
        >
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            About <span className="text-green-600">Happy Liberia Cooperative</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Rooted in faith, built on farming, and driven by community — we grow
            more than avocados, we grow hope and prosperity.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Established in 2025, HAPPY Liberia Cooperative unites 25 women and youth
            in transforming lives spiritually, economically, and socially through
            sustainable agriculture.
          </p>

          <AboutStats />
        </motion.div>

        <AboutImage />
      </div>
    </section>
  );
};

export default Aboutsection;
