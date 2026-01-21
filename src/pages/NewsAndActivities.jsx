import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaNewspaper, FaVideo, FaImage } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const NewsAndActivities = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const newsItems = [
    {
      id: 1,
      type: "news",
      date: "January 15, 2025",
      title: "PDA Launches New Community Development Initiative",
      description: "Participatory Development Associates announces a groundbreaking initiative focused on empowering rural communities through sustainable development practices.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      category: "Community Development"
    },
    {
      id: 2,
      type: "activity",
      date: "January 10, 2025",
      title: "Knowledge Sharing Workshop Successfully Concluded",
      description: "The 8th Knowledge Sharing Workshop brought together stakeholders from across Ghana to discuss innovative approaches to development.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      category: "Workshop"
    },
    {
      id: 3,
      type: "news",
      date: "January 5, 2025",
      title: "New Research Publication on Child Protection",
      description: "PDA releases comprehensive research findings on child protection mechanisms in cocoa-growing communities.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      category: "Research"
    },
    {
      id: 4,
      type: "activity",
      date: "December 20, 2024",
      title: "Annual Reading Level Competition Winners Announced",
      description: "Celebrating the achievements of students in the Annual Reading Level Competition held in Mankraso.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      category: "Education"
    },
    {
      id: 5,
      type: "news",
      date: "December 15, 2024",
      title: "PDA Partners with International Organizations",
      description: "New partnerships established to expand PDA's impact across Sub-Saharan Africa.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      category: "Partnerships"
    },
    {
      id: 6,
      type: "activity",
      date: "December 10, 2024",
      title: "VSLA Training Program Graduation Ceremony",
      description: "Over 200 participants successfully completed the Village Savings and Loan Association training program.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      category: "Training"
    }
  ];

  const filteredItems = activeTab === "all" 
    ? newsItems 
    : newsItems.filter(item => item.type === activeTab);

  return (
    <section
      id="news-and-activities"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          className="w-full h-[400px] md:h-[500px] object-cover"
          alt="News and Activities"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("newsAndActivities.title")}
        </motion.h1>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {["all", "news", "activity"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-orange text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === "all" ? t("newsAndActivities.all") : tab === "news" ? t("newsAndActivities.news") : t("newsAndActivities.activities")}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* News Grid */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400?text=PDA";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === "news" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                  }`}>
                    {item.type === "news" ? t("newsAndActivities.news") : t("newsAndActivities.activities")}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaCalendarAlt />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
                <motion.button
                  className="text-orange font-semibold text-sm hover:text-red transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {t("common.readMore")}
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Media Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-orange mb-8 text-center">{t("newsAndActivities.mediaGallery")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="/videos"
            className="bg-gradient-to-br from-red to-orange rounded-xl p-8 text-white text-center hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaVideo className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">{t("nav.videos")}</h3>
            <p className="text-sm opacity-90">{t("newsAndActivities.viewVideos")}</p>
          </motion.a>
          <motion.a
            href="/photos"
            className="bg-gradient-to-br from-orange to-red rounded-xl p-8 text-white text-center hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaImage className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">{t("nav.photos")}</h3>
            <p className="text-sm opacity-90">{t("newsAndActivities.viewPhotos")}</p>
          </motion.a>
          <motion.a
            href="/publications"
            className="bg-gradient-to-br from-red to-orange rounded-xl p-8 text-white text-center hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaNewspaper className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">{t("nav.publications")}</h3>
            <p className="text-sm opacity-90">{t("newsAndActivities.viewPublications")}</p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsAndActivities;
