import React from "react";
import { motion } from "framer-motion";

const Contactheader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Ready to partner with us? Contact us today to discuss how we can meet
      your avocado supply needs.
    </p>
  </motion.div>
);

export default Contactheader;
