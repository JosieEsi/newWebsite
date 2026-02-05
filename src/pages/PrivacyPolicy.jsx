import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield, FaCookie, FaEnvelope, FaPhone } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "introduction",
      icon: FaShieldAlt,
      title: t("privacyPolicy.introduction.title"),
      content: t("privacyPolicy.introduction.content"),
    },
    {
      id: "information",
      icon: FaUserShield,
      title: t("privacyPolicy.information.title"),
      content: t("privacyPolicy.information.content"),
    },
    {
      id: "cookies",
      icon: FaCookie,
      title: t("privacyPolicy.cookies.title"),
      content: t("privacyPolicy.cookies.content"),
    },
    {
      id: "data-protection",
      icon: FaLock,
      title: t("privacyPolicy.dataProtection.title"),
      content: t("privacyPolicy.dataProtection.content"),
    },
    {
      id: "rights",
      icon: FaUserShield,
      title: t("privacyPolicy.rights.title"),
      content: t("privacyPolicy.rights.content"),
    },
    {
      id: "updates",
      icon: FaShieldAlt,
      title: t("privacyPolicy.updates.title"),
      content: t("privacyPolicy.updates.content"),
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
          className="w-full h-[300px] md:h-[400px] object-cover"
          alt="Privacy Policy"
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
          {t("privacyPolicy.title")}
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
          {t("privacyPolicy.lastUpdated")}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-orange/10 to-red/10 rounded-xl p-8 border-l-4 border-orange">
          <h2 className="font-bold text-2xl text-gray-800 mb-4">{t("privacyPolicy.contact.title")}</h2>
          <p className="text-gray-700 mb-6">{t("privacyPolicy.contact.description")}</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange" />
              <a href="mailto:info@pdaghana.com" className="text-gray-700 hover:text-orange transition-colors">
                info@pdaghana.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-orange" />
              <a href="tel:+233508493316" className="text-gray-700 hover:text-orange transition-colors">
                +233 (0) 50 849 3316
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-orange" />
              <a href="tel:+233509229218" className="text-gray-700 hover:text-orange transition-colors">
                +233 (0) 50 922 9218
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            {t("privacyPolicy.contact.address")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
