import React from "react";
import { motion } from "framer-motion";
import Icons from "../components/Icons";


const NotFound = () => {
  return (
    <section className="py-32 bg-green-50 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-green-100 rounded-full text-green-700">
              <Icons.Globe className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist.  
            It might have been moved or deleted.
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
