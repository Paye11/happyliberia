

import React from "react";
import { motion } from "framer-motion";
import Plantationsec from "./Plantationsec";

const Plantationsection = ()=> {
  const sections = [
    {
      title: "🌱 Our Nursery",
      desc: "Where growth begins — cultivating strong roots for tomorrow.",
      points: [
        "Nurturing Hass avocado seedlings.",
        "Preparing fertile soils in Nimba County and Libera at large",
        "Training members in climate-smart agriculture.",
        "Establishing partnerships for export readiness.",
      ],
      bg: "bg-green-50",
    },
    {
      title: "🌍 Future Plantation",
      desc: "Scaling up to feed global markets with premium crops.",
      points: ["Hass Avocados (flagship export crop)", "Garcinia kola (bitter kola)"],
      bg: "bg-white",
    },
  ];

  return (
    <section
    id="plantation"
      className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50 relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-green-900 text-center"
        >
          Nursery and Plantation
        </motion.h2>

        <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
          From seedlings to sustainable exports — building a greener tomorrow,
          step by step.
        </p>

        <div className="relative space-y-16">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 hidden md:block"></div>

          {sections.map((sec, i) => (
            <Plantationsec key={i} sec={sec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plantationsection;
