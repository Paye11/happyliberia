import React from "react";
import { motion } from "framer-motion";

const Heroheading = () => (
  <motion.h1
    className="text-4xl md:text-6xl font-bold mb-6 text-shadow text-white"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Premium Avocados <br />
    <span className="text-green-200">From Liberia&apos;s Heart</span>
  </motion.h1>
);

export default Heroheading;
