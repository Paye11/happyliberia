

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import soil1 from "../assets/soil1.jpg";
import soil2 from "../assets/soil2.jpg";
import soil3 from "../assets/soil3.jpg";
import soil4 from "../assets/soil4.jpg";
import soil5 from "../assets/soil5.jpg";

import drainage1 from "../assets/drainage1.jpg";
import drainage2 from "../assets/drainage2.jpg";
import drainage3 from "../assets/drainage3.jpg";
import drainage4 from "../assets/drainage4.jpg";
import drainage5 from "../assets/drainage5.jpg";

const TestingGallery = () => {
  const soilImages = [soil1, soil2, soil3, soil4, soil5];
  const drainageImages = [drainage1, drainage2, drainage3, drainage4, drainage5];

  const [selected, setSelected] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const renderImageSection = (title, images) => (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-center mb-10 text-green-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>

      <div className="hidden md:flex justify-center gap-10">
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="relative w-44 h-44 cursor-pointer rounded-full overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-400/40"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-125"
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 md:hidden">
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-square cursor-pointer rounded-full overflow-hidden shadow-md hover:shadow-xl hover:shadow-green-400/30"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-125"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-green-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100/30 to-green-200/10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-20 text-green-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Testing for Hass Avocado Farming
        </motion.h2>

        {renderImageSection("Shallholder farmers Soil", soilImages)}
        {renderImageSection("Drainage Testing", drainageImages)}

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selected}
                alt="Selected"
                loading="lazy"
                className="max-w-full max-h-full rounded-lg object-contain shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestingGallery;
