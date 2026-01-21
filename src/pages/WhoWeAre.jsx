import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { whoweare } from "../assets/images";
import { puzzle, peak, dart, bulb } from "../assets/icons";
import { FaCheckCircle, FaUsers, FaNetworkWired, FaHeart, FaLightbulb, FaHandshake, FaAward } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const WhoWeAre = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const { t } = useTranslation();

  const uniqueness = useMemo(() => [
    { icon: FaUsers, title: t("whoWeAre.uniquenessItems.clientFocus"), color: "text-orange" },
    { icon: FaNetworkWired, title: t("whoWeAre.uniquenessItems.network"), color: "text-red" },
    { icon: FaHeart, title: t("whoWeAre.uniquenessItems.longevity"), color: "text-orange" },
    { icon: FaLightbulb, title: t("whoWeAre.uniquenessItems.vision"), color: "text-red" },
    { icon: FaHandshake, title: t("whoWeAre.uniquenessItems.innovative"), color: "text-orange" },
    { icon: FaUsers, title: t("whoWeAre.uniquenessItems.inclusive"), color: "text-red" },
    { icon: FaAward, title: t("whoWeAre.uniquenessItems.quality"), color: "text-orange" },
  ], [t]);

  const coreValues = useMemo(() => [
    {
      title: t("whoWeAre.coreValuesItems.quality.title"),
      description: t("whoWeAre.coreValuesItems.quality.description"),
      icon: "✓",
    },
    {
      title: t("whoWeAre.coreValuesItems.collaboration.title"),
      description: t("whoWeAre.coreValuesItems.collaboration.description"),
      icon: "🤝",
    },
    {
      title: t("whoWeAre.coreValuesItems.credibility.title"),
      description: t("whoWeAre.coreValuesItems.credibility.description"),
      icon: "⭐",
    },
    {
      title: t("whoWeAre.coreValuesItems.inclusivity.title"),
      description: t("whoWeAre.coreValuesItems.inclusivity.description"),
      icon: "🌍",
    },
    {
      title: t("whoWeAre.coreValuesItems.respect.title"),
      description: t("whoWeAre.coreValuesItems.respect.description"),
      icon: "💙",
    },
    {
      title: t("whoWeAre.coreValuesItems.transparency.title"),
      description: t("whoWeAre.coreValuesItems.transparency.description"),
      icon: "🔍",
    },
  ], [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="whoweare"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-gradient-to-b from-white to-gray-50"
    >
      {/* Hero Section */}
      <motion.div
        className="mt-24 relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={whoweare} className="w-full h-[400px] md:h-[500px] object-cover" alt="Who We Are" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("whoWeAre.title")}
        </motion.h1>
      </motion.div>

      {/* Profile Section */}
      <motion.section
        className="flex flex-col w-full padding gap-10 items-center justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-orange rounded-[50px] w-28 h-28 flex items-center justify-center shadow-xl">
            <img src={puzzle} alt="PDA" className="w-20 h-20" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col max-w-4xl justify-center items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-orange mb-6">{t("whoWeAre.profile")}</h2>
          <p className="font-poppins text-base md:text-lg text-center leading-relaxed mb-6">
            {t("whoWeAre.profileText")}
          </p>
        </motion.div>
      </motion.section>

      {/* PDA's Uniqueness */}
      <motion.section
        className="w-full padding bg-gradient-to-br from-orange/10 via-red/10 to-orange/5 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange text-center mb-4">{t("whoWeAre.uniqueness")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {uniqueness.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                >
                  <div className={`${item.color} mb-4 flex justify-center`}>
                    <Icon className="text-4xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* Unique Selling Proposition */}
      <motion.section
        className="w-full padding py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-orange to-red rounded-2xl p-8 md:p-12 shadow-2xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t("whoWeAre.usp")}</h2>
          <p className="text-lg md:text-xl leading-relaxed text-center">
            {t("whoWeAre.uspText")}
          </p>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        id="vision"
        className="w-full padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-5xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={peak} alt="Vision" className="h-24 w-24" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-orange font-poppins font-bold text-2xl md:text-3xl mb-4">{t("whoWeAre.vision")}</h3>
            <p className="font-poppins text-base md:text-lg leading-relaxed">
              {t("whoWeAre.visionText")}
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        id="mission"
        className="w-full padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-5xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={dart} alt="Mission" className="h-24 w-24" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-orange font-poppins font-bold text-2xl md:text-3xl mb-4">{t("whoWeAre.mission")}</h3>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-4">
              {t("whoWeAre.missionText")}
            </p>
            <p className="font-poppins text-sm text-gray-600 italic">
              {t("whoWeAre.missionNote")}
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="w-full padding py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">
            <motion.div
              className="flex justify-center lg:justify-start"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange rounded-[45px] w-36 h-36 flex items-center justify-center shadow-xl">
                <img src={bulb} alt="Core Values" className="w-24 h-24" />
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              variants={itemVariants}
            >
              <h3 className="text-orange font-poppins font-bold text-3xl md:text-4xl mb-8">{t("whoWeAre.coreValues")}</h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange cursor-pointer group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5, borderColor: "#F77323" }}
                onHoverStart={() => setHoveredValue(index)}
                onHoverEnd={() => setHoveredValue(null)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{value.icon}</span>
                  <h4 className="font-poppins font-bold text-xl text-orange group-hover:text-red transition-colors duration-300">
                    {value.title}
                  </h4>
                </div>
                <p className="font-poppins text-sm md:text-base text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default WhoWeAre;
