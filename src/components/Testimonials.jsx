

import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Happy Liberia Cooperative delivers consistent quality and maintains professional standards that meet our international requirements.",
      company: "European Fruit Distributors",
      country: "Netherlands",
    },
    {
      quote:
        "Their commitment to sustainable farming practices aligns perfectly with our company's environmental values.",
      company: "Green Import Solutions",
      country: "Canada",
    },
    {
      quote:
        "Reliable supply chain and excellent communication make them our preferred avocado supplier in West Africa.",
      company: "Middle East Fresh Markets",
      country: "UAE",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
            What Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by international buyers for <span className="font-semibold text-green-700">quality</span>,{" "}
            <span className="font-semibold text-green-700">reliability</span>, and{" "}
            <span className="font-semibold text-green-700">sustainable practices</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-green-500 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t pt-4 border-green-200">
                <p className="text-sm font-medium text-green-900">
                  {testimonial.company}
                </p>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
