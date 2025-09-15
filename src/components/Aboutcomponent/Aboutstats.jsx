import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "25+", label: "Members" },
  { number: "2025", label: "Founded" },
];

const Aboutstats = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-green-100 p-6 rounded-xl shadow text-center"
        >
          <div className="text-3xl font-bold text-green-700">{stat.number}</div>
          <div className="text-sm text-green-800">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Aboutstats;
