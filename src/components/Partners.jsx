import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      title: "🌟 Equipping Leaders International, USA",
      desc: 'Teaches "The Station of Generosity".',
      points: [],
      bg: "bg-green-50",
    },
    {
      title: "🌍 Avocado Solutions Africa, Kenya",
      desc: 'Our consultant — trains avocado farmers, builds national & international market linkages, and promotes value-addition.',
      points: [],
      bg: "bg-white",
    },
    {
      title: "💼 GEM Business Consult, UK",
      desc: "Grant writing support, entrepreneurship development, and management.",
      points: [],
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-green-900 text-center"
        >
          Meet Our Partners
        </motion.h2>

        <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
          Collaboration with global leaders to ensure training, market access,
          and sustainable growth.
        </p>

        <div className="relative space-y-16">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 hidden md:block"></div>

          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className={`${p.bg} rounded-3xl shadow-lg p-8 md:pl-16 relative group hover:shadow-xl transition`}
            >
              <div className="hidden md:block absolute left-0 top-8 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow"></div>

              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {p.title}
              </h3>

              <p className="text-gray-600">{p.desc}</p>

              {p.points?.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {p.points.map((pt, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: j * 0.15 }}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
