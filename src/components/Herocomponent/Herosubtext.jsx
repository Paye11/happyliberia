import React from "react";
import { motion } from "framer-motion";

const Herosubtext = () => (
  <motion.p
    className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    Export-grade Hass avocados grown sustainably by Happy Liberia Cooperative.  
    Faith-inspired farming for global markets.
  </motion.p>
);

export default Herosubtext;
