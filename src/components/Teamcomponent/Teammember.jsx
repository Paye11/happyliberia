import React, { Suspense } from "react";
import { motion } from "framer-motion";

const Teammember = ({ member, index }) => {
  return (
    <motion.div
      key={member.name}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition overflow-hidden"
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-green-700 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
        <Suspense fallback={<div className="w-32 h-32 rounded-full bg-green-100 animate-pulse mx-auto" />}>
          <motion.img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="relative z-10 w-full h-full object-cover rounded-full shadow-lg transform transition duration-700 group-hover:scale-110"
          />
        </Suspense>
      </div>

      <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full group-hover:bg-green-200 transition">
        {member.role}
      </span>

      <h3 className="text-lg font-semibold text-green-900 mb-1">
        {member.name}
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-green-800/80 via-green-700/60 to-transparent text-white flex items-end p-4 opacity-0 group-hover:opacity-100 rounded-2xl"
      >
        <p className="text-sm">
          {member.name} plays a vital role in advancing the mission of Happy Liberia Cooperative with dedication and vision.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Teammember;
