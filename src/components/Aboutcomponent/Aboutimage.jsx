import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/aboutimg.jpg";

const Aboutimage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <img
        src={aboutimg}
        alt="Avocado plantation"
        loading="lazy"
        className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-700"
      />
    </motion.div>
  );
};

export default Aboutimage;
