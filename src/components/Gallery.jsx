


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
    { src: gallery1, alt: "Gallery Image 1" },
    { src: gallery2, alt: "Gallery Image 2" },
    { src: gallery3, alt: "Gallery Image 3" },
    { src: gallery4, alt: "Gallery Image 4" },
    { src: gallery5, alt: "Gallery Image 5" },
    { src: gallery6, alt: "Gallery Image 6" },
  ];

  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Gallery
        </h2>

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
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

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
                loading="lazy"
                className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

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
                loading="lazy"
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

