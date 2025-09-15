import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import Marketcard from "./Marketcard";

const Globalmarketsection = () => {
  const flows = [
    { title: "Europe", desc: "Supplying Netherlands, Belgium & UK" },
    { title: "North America", desc: "Targeting USA & Canada markets" },
    { title: "Asia", desc: "Expanding into China & Saudi Arabia" },
    { title: "West Africa", desc: "Active trade with Ghana & Guinea" },
  ];

  return (
    <section className="py-20 bg-green-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800">Global Markets</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Connecting Liberia’s avocados with the world — sustainable, fresh,
            and export-ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {flows.map((flow, i) => (
            <Marketcard key={flow.title} flow={flow} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full text-green-800 font-semibold shadow">
            <Plane className="w-5 h-5" /> Export-Ready Partnerships
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Globalmarketsection;
