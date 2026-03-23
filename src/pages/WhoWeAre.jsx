import React, { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { allstaff } from "../assets/images";
import { peak, dart } from "../assets/icons";
import { FaLightbulb, FaNetworkWired, FaHandshake, FaAward, FaGlobe, FaUsers, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const WhoWeAre = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.scrollBy(0, -100);
        }
      }, 300);
    }
  }, [location.hash]);

  const coreValues = useMemo(() => [
    {
      title: t("whoWeAre.coreValuesItems.quality.title"),
      description: t("whoWeAre.coreValuesItems.quality.description"),
      icon: FaCheckCircle,
      color: "orange",
    },
    {
      title: t("whoWeAre.coreValuesItems.collaboration.title"),
      description: t("whoWeAre.coreValuesItems.collaboration.description"),
      icon: FaHandshake,
      color: "red",
    },
    {
      title: t("whoWeAre.coreValuesItems.credibility.title"),
      description: t("whoWeAre.coreValuesItems.credibility.description"),
      icon: FaAward,
      color: "orange",
    },
    {
      title: t("whoWeAre.coreValuesItems.inclusivity.title"),
      description: t("whoWeAre.coreValuesItems.inclusivity.description"),
      icon: FaGlobe,
      color: "red",
    },
    {
      title: t("whoWeAre.coreValuesItems.respect.title"),
      description: t("whoWeAre.coreValuesItems.respect.description"),
      icon: FaUsers,
      color: "orange",
    },
    {
      title: t("whoWeAre.coreValuesItems.transparency.title"),
      description: t("whoWeAre.coreValuesItems.transparency.description"),
      icon: FaNetworkWired,
      color: "red",
    },
  ], [t]);

  return (
    <section
      id="whoweare"
      className="max-container max-w-full w-full min-h-screen font-poppins bg-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={allstaff} 
          className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover" 
          alt="Who We Are"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t("whoWeAre.title")}
            </motion.h1>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-orange to-red mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Story Section - Split Screen Modern Layout */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Large Number + Text */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Large Background Number */}
                <motion.div
                  className="absolute -left-8 -top-8 text-[200px] md:text-[300px] font-black text-gray-100 leading-none select-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  
                </motion.div>
                
                <div className="relative z-10 pt-0">
                <motion.span
              className="inline-block px-6 py-2 bg-orange/10 text-orange rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              About PDA
            </motion.span>
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {t("whoWeAre.profileIntro")}
                  </motion.p>
                  <motion.p
                    className="text-base md:text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {t("whoWeAre.profileText")}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Right - USP Card with Modern Design */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-orange via-red to-orange rounded-3xl p-8 md:p-10 lg:p-12 text-white shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                    animate={{
                      x: [0, 30, 0],
                      y: [0, 30, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <motion.div
                      className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <FaLightbulb className="text-4xl md:text-5xl" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      Our Promise
                    </h3>
                  </motion.div>

                  <motion.p
                    className="text-base md:text-lg lg:text-xl leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("whoWeAre.uspText")}
                  </motion.p>

                  <motion.div
                    className="pt-6 border-t border-white/30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-sm md:text-base text-white/90 italic flex items-center gap-3">
                      <FaQuoteLeft className="text-orange" />
                      Creating lasting partnerships and impactful solutions that transcend borders.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side by Side Modern Cards */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full blur-3xl ${
                i % 2 === 0 ? "bg-orange/5" : "bg-red/5"
              }`}
              style={{
                width: `${200 + (i % 3) * 100}px`,
                height: `${200 + (i % 3) * 100}px`,
                left: `${(i * 12) % 100}%`,
                top: `${(i * 15) % 100}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 sm:gap-4 mb-6 justify-center">
              <motion.div
                className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.h2
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Vision & Mission
              </motion.h2>
              <motion.div
                className="h-1 bg-red flex-1 max-w-16 sm:max-w-24 md:max-w-32"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <motion.div
              id="vision"
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, shadow: "2xl" }}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange to-red"></div>
              
              {/* Floating Icon */}
              <motion.div
                className="absolute top-6 right-6 opacity-5"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src={peak} alt="Vision" className="h-40 w-40" />
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="p-4 bg-gradient-to-br from-orange to-orange/80 rounded-2xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={peak} alt="Vision" className="h-12 w-12" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {t("whoWeAre.vision")}
                  </h3>
                </motion.div>
                <motion.p
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t("whoWeAre.visionText")}
                </motion.p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange/10 to-transparent rounded-tl-full"></div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              id="mission"
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, shadow: "2xl" }}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red to-orange"></div>
              
              {/* Floating Icon */}
              <motion.div
                className="absolute top-6 left-6 opacity-5"
                animate={{
                  y: [0, 20, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src={dart} alt="Mission" className="h-40 w-40" />
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="p-4 bg-gradient-to-br from-red to-red/80 rounded-2xl shadow-lg"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={dart} alt="Mission" className="h-12 w-12" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {t("whoWeAre.mission")}
                  </h3>
                </motion.div>
                <motion.p
                  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t("whoWeAre.missionText")}
                </motion.p>
                <motion.p
                  className="text-base text-gray-500 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {t("whoWeAre.missionNote")}
                </motion.p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red/10 to-transparent rounded-tr-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Modern Grid Layout */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, orange 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 sm:gap-4 mb-6 justify-center">
              <motion.div
                className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.h2
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {t("whoWeAre.coreValues")}
              </motion.h2>
              <motion.div
                className="h-1 bg-red flex-1 max-w-16 sm:max-w-24 md:max-w-32"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Core Values Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                  }}
                >
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${
                    value.color === "orange"
                      ? "bg-gradient-to-r from-orange to-red"
                      : "bg-gradient-to-r from-red to-orange"
                  }`}></div>

                  {/* Icon */}
                  <motion.div
                    className={`mb-6 p-4 rounded-xl w-fit ${
                      value.color === "orange"
                        ? "bg-gradient-to-br from-orange/10 to-orange/5"
                        : "bg-gradient-to-br from-red/10 to-red/5"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`text-3xl md:text-4xl ${
                      value.color === "orange" ? "text-orange" : "text-red"
                    }`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-colors ${
                    value.color === "orange"
                      ? "group-hover:text-orange"
                      : "group-hover:text-red"
                  }`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>


                  {/* Decorative Corner */}
                  <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full ${
                    value.color === "orange"
                      ? "bg-gradient-to-tl from-orange/5 to-transparent"
                      : "bg-gradient-to-tl from-red/5 to-transparent"
                  }`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhoWeAre;
