import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { partnerTestimonials } from "../data/partnersData";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const PartnerTestimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % partnerTestimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + partnerTestimonials.length) % partnerTestimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % partnerTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = partnerTestimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-orange/10 via-orange/5 to-orange/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Consistent Style */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <motion.div
              className="h-1 bg-orange flex-1 max-w-32"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.h2
              className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Partner Testimonials
            </motion.h2>
            <motion.div
              className="h-1 bg-orange flex-1 max-w-32"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hear from our partners about their experience working with PDA
          </motion.p>
        </motion.div>

        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <img
                    src={current.image}
                    alt={current.partner}
                    className="w-24 h-24 rounded-full object-contain bg-gray-100 p-3 shadow-lg"
                    loading="lazy"
                  />
                </motion.div>
                <div className="flex-grow">
                  <FaQuoteLeft className="text-orange text-4xl mb-6" />
                  <motion.p
                    className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{current.quote}"
                  </motion.p>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-bold text-gray-800 text-xl mb-1">
                      {current.name}
                    </p>
                    <p className="text-orange font-semibold text-lg mb-1">
                      {current.role}
                    </p>
                    <p className="text-gray-600">
                      {current.partner}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white hover:bg-orange border-2 border-gray-200 hover:border-orange flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-gray-600 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white hover:bg-orange/15 border-2 border-gray-200 hover:border-orange flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next"
          >
            <FaChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {partnerTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;
