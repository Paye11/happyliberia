


import React from "react";
import { motion } from "framer-motion";

const letters = [
  { letter: "H", word: "Hass" },
  { letter: "A", word: "Avocado" },
  { letter: "P", word: "Production" },
  { letter: "P", word: "Prosperity" },
  { letter: "Y", word: "Yield" },
];

const Herosubtext = () => (
  <div className="text-center">
    <motion.p
      className="text-xl md:text-2xl mb-2 max-w-3xl mx-auto text-shadow"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Export-grade Hass avocados grown sustainably by Happy Liberia Cooperative.  
      Faith-inspired farming for global markets.
    </motion.p>

    <motion.div
      className="flex justify-center gap-6 flex-wrap mt-2 mb-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {letters.map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <span className="block text-3xl md:text-4xl font-extrabold text-green-600">
            {item.letter}
          </span>
          <span className="block text-sm md:text-base text-gray-100">
            {item.word}
          </span>
        </motion.div>
      ))}
    </motion.div>

    <motion.p
      className="mt-2 text-lg md:text-xl font-semibold text-white mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      HAPPY Liberia Cooperative
    </motion.p>
  </div>
);

export default Herosubtext;
