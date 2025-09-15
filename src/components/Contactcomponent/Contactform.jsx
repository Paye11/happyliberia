import React from "react";
import { motion } from "framer-motion";

const Contactform = ({ formData, formStatus, handleChange, handleSubmit }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-6">Send Partnership Inquiry</h3>

    <form onSubmit={handleSubmit} className="space-y-6">
      {["name", "email", "country"].map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {field === "name" && "Full Name *"}
            {field === "email" && "Email Address *"}
            {field === "country" && "Country/Region"}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required={field !== "country"}
            aria-required={field !== "country"}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Tell us about your requirements, volumes, and partnership interests..."
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="interested"
          name="interested"
          checked={formData.interested}
          onChange={handleChange}
          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        <label htmlFor="interested" className="ml-2 block text-sm text-gray-700">
          I'm interested in a long-term partnership
        </label>
      </div>

      <motion.button
        type="submit"
        disabled={formStatus === "sending"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
          formStatus === "sending"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-700 hover:bg-green-800 text-white"
        }`}
      >
        {formStatus === "sending"
          ? "Sending..."
          : "Send Partnership Inquiry"}
      </motion.button>

      {formStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
        >
          Thank you! Your inquiry has been sent successfully. We'll get back to
          you within 24 hours.
        </motion.div>
      )}
    </form>
  </div>
);

export default Contactform;
