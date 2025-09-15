import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const Marketcard = ({ flow, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-green-100 text-green-700 rounded-full">
          <Globe2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl text-green-900">
            {flow.title}
          </h3>
          <p className="text-gray-600">{flow.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Marketcard;
