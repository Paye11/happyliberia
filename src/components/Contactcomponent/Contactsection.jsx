

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactHeader from "./Contactheader";
import ContactForm from "./Contactform";
import ContactInfo from "./Contactinfo";
import emailjs from "@emailjs/browser";

const Contactsection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
    interested: false,
  });
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY, 
       import.meta.env.VITE_TEMPLATE_ID, 
        {
          full_name: formData.name,
          email_address: formData.email,
          country_region: formData.country,
          long_term_interest: formData.interested ? "Yes" : "No",
          message: formData.message,
        },
       import.meta.env.VITE_API_KEY
      );

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        country: "",
        message: "",
        interested: false,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
    }

    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm
              formData={formData}
              formStatus={formStatus}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;

