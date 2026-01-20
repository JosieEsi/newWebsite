import React, { useState } from "react";
import { motion } from "framer-motion";
import NewButton from "./NewButton";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create mailto link with form data
    const subject = encodeURIComponent("Newsletter Subscription Request");
    const body = encodeURIComponent(
      `Newsletter Subscription Request\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization}\n` +
      `Contact: ${formData.contact}\n\n` +
      `Please add this person to the newsletter mailing list.`
    );

    // Use mailto (can be replaced with backend API later)
    window.location.href = `mailto:info@pdaghana.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", organization: "", contact: "" });
    }, 1000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="newsletter-name" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            Name *
          </label>
          <input
            type="text"
            id="newsletter-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="newsletter-email" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            Email Address *
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="newsletter-organization" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            Organization
          </label>
          <input
            type="text"
            id="newsletter-organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder="Your organization"
          />
        </div>

        <div>
          <label htmlFor="newsletter-contact" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            Contact Number
          </label>
          <input
            type="tel"
            id="newsletter-contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder="+233 XX XXX XXXX"
          />
        </div>
      </div>

      {submitStatus === "success" && (
        <motion.div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaCheckCircle />
          <span className="font-poppins">Thank you! Your subscription request has been sent.</span>
        </motion.div>
      )}

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="justify-center items-center px-7 py-3 border font-poppins text-base leading-none bg-orange text-white font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-2 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "SIGN UP TODAY"}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default NewsletterForm;
