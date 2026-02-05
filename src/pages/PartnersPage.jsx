import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGlobe, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { partnersData, partnerTestimonials } from "../data/partnersData.js";

const PartnersPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const categories = ["all", ...new Set(partnersData.map((p) => p.category))];

  const filteredPartners =
    selectedCategory === "all"
      ? partnersData
      : partnersData.filter((partner) => partner.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % partnerTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + partnerTestimonials.length) % partnerTestimonials.length);
  };

  return (
    <section className="max-container max-w-full w-full min-h-screen flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          className="w-full h-[400px] md:h-[500px] object-cover"
          alt="Our Partners"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("partnersPage.title")}
        </motion.h1>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? t("partnersPage.all") : category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{partner.name}</h3>
                <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-xs font-semibold mb-3">
                  {partner.category}
                </span>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{partner.description}</p>
                <motion.a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-orange text-white rounded-lg font-semibold hover:bg-red transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGlobe />
                  {t("partnersPage.visitWebsite")}
                  <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Partner Testimonials Section */}
      <motion.div
        className="w-full bg-gradient-to-br from-orange/10 via-red/5 to-orange/10 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("partnersPage.testimonials")}
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={partnerTestimonials[currentTestimonial].image}
                    alt={partnerTestimonials[currentTestimonial].partner}
                    className="w-20 h-20 rounded-full object-contain bg-gray-100 p-2"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-grow">
                  <FaQuoteLeft className="text-orange text-3xl mb-4" />
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{partnerTestimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      {partnerTestimonials[currentTestimonial].name}
                    </p>
                    <p className="text-orange font-semibold">
                      {partnerTestimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {partnerTestimonials[currentTestimonial].partner}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              <div className="flex gap-2 items-center">
                {partnerTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-orange w-8" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersPage;
