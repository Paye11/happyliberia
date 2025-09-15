import React from "react";
import { motion } from "framer-motion";

const Benefitcard = ({ benefit, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-green-100 rounded-lg text-green-700 group-hover:bg-green-200 transition-colors">
          {benefit.icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Benefitcard;
