import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Plantationlist = ({ points }) => {
  return (
    <ul className="space-y-3">
      {points.map((p, j) => (
        <motion.li
          key={j}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: j * 0.15 }}
          className="flex items-start gap-2 text-gray-700"
        >
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
          {p}
        </motion.li>
      ))}
    </ul>
  );
};

export default Plantationlist;
