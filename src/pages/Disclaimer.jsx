import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaShieldAlt, FaLock, FaUserShield, FaFileContract, FaExclamationTriangle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Disclaimer = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "introduction",
      icon: FaShieldAlt,
      title: t("disclaimer.introduction.title"),
      content: t("disclaimer.introduction.content"),
    },
    {
      id: "consent",
      icon: FaUserShield,
      title: t("disclaimer.consent.title"),
      content: t("disclaimer.consent.content"),
    },
    {
      id: "usage",
      icon: FaCamera,
      title: t("disclaimer.usage.title"),
      content: t("disclaimer.usage.content"),
    },
    {
      id: "protection",
      icon: FaLock,
      title: t("disclaimer.protection.title"),
      content: t("disclaimer.protection.content"),
    },
    {
      id: "ownership",
      icon: FaFileContract,
      title: t("disclaimer.ownership.title"),
      content: t("disclaimer.ownership.content"),
    },
    {
      id: "contact",
      icon: FaExclamationTriangle,
      title: t("disclaimer.contact.title"),
      content: t("disclaimer.contact.content"),
    },
  ];

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
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
          alt="Disclaimer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("disclaimer.title")}
        </motion.h1>
      </motion.div>

      {/* Last Updated */}
      <motion.div
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-gray-600 text-sm italic">
          {t("disclaimer.lastUpdated")}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              className="mb-12 bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-orange text-xl" />
                </div>
                <h2 className="font-bold text-2xl text-gray-800">{section.title}</h2>
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Contact Section */}
      <motion.div
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-orange/10 to-orange/10 rounded-xl p-8 border-l-4 border-orange">
          <h2 className="font-bold text-2xl text-gray-800 mb-4">{t("disclaimer.contactSection.title")}</h2>
          <p className="text-gray-700 mb-6">{t("disclaimer.contactSection.description")}</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <a href="mailto:info@pdaghana.com" className="text-gray-700 hover:text-orange transition-colors">
                info@pdaghana.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+233208129622" className="text-gray-700 hover:text-orange transition-colors">
                +233 (0) 208 129 622
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+233302252998" className="text-gray-700 hover:text-orange transition-colors">
                +233 (0) 302 252 998 / 297 0177
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Disclaimer;
