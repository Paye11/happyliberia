import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Herobuttons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <motion.a
      href="#contact"
      className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
      variants={buttonVariants}
      custom={1}
      initial="hidden"
      animate="visible"
    >
      Partner With Us
    </motion.a>
    <motion.a
      href="#about"
      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-green-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white border-opacity-30"
      variants={buttonVariants}
      custom={2}
      initial="hidden"
      animate="visible"
    >
      Learn More
    </motion.a>
  </div>
);

export default Herobuttons;
