import React from "react";
import { motion } from "framer-motion";

const Teamheader = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
      Meet The Leaders
    </h2>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      Our leadership blends faith, expertise, and commitment to sustainability for a thriving cooperative.
    </p>
  </motion.div>
);

export default Teamheader;
