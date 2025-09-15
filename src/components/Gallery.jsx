

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Fresh Hass avocado seedlings nurtured in trays—our first step toward Liberia’s avocado future" },
    { src: gallery2, alt: "Daily care ensures strong, healthy avocado seedlings ready for transplanting" },
    { src: gallery3, alt: "Our cooperative members working together to raise the next generation of avocado trees." },
    { src: gallery4, alt: "Healthy Hass avocado seedling—evidence of growth, patience, and preparation." },
    { src: gallery5, alt: "Women and youth of HAPPY Liberia Cooperative preparing farmland in unity" },
    { src: gallery6, alt: "faith-driven farming in action" },
  ];

  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Operations
        </h2>

        {/* Desktop interactive gallery */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {images.map((image, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={{ flex: hovered === i ? 5 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelected(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center text-center text-white font-semibold text-lg transition">
                {image.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => setSelected(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-medium text-sm opacity-0 hover:opacity-100 transition">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for both mobile & desktop */}
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
                src={selected.src}
                alt={selected.alt}
                className="max-w-full max-h-full rounded-lg object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
