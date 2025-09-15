import React from "react";
import { motion } from "framer-motion";
import PlantationList from "./Plantationlist";

const Plantationsec = ({ sec, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className={`${sec.bg} rounded-3xl shadow-lg p-8 md:pl-16 relative group hover:shadow-xl transition`}
    >
      <div className="hidden md:block absolute left-0 top-8 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow"></div>

      <h3 className="text-2xl font-semibold text-green-800 mb-2">{sec.title}</h3>
      <p className="text-gray-600 mb-5">{sec.desc}</p>

      <PlantationList points={sec.points} />
    </motion.div>
  );
};

export default Plantationsec;
