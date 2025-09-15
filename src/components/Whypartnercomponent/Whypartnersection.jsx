import React from "react";
import { motion } from "framer-motion";
import Benefitcard from "./Benefitcard";
import Icons from "../Icons";

const Whypartnersection = () => {
  const benefits = [
    {
      title: "Export-Ready Quality",
      description:
        "Our avocados meet international export standards with rigorous quality control processes.",
      icon: <Icons.Globe />,
    },
    {
      title: "Sustainable Practices",
      description:
        "Climate-smart agriculture and conservation methods ensure environmental responsibility.",
      icon: <Icons.Leaf />,
    },
    {
      title: "Reliable Supply Chain",
      description:
        "Consistent production schedules and professional logistics for dependable delivery.",
      icon: <Icons.Check />,
    },
    {
      title: "Quality Certifications",
      description:
        "Certified organic and sustainable farming practices with full traceability.",
      icon: <Icons.Check />,
    },
  ];

  return (
    <section id="partnership" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Partner With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a cooperative that combines agricultural excellence with
            sustainable practices and reliable partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Benefitcard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whypartnersection;
