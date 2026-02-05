import React from "react";
import { motion } from "framer-motion";
import { covid } from "../assets/images";
import Button from "../components/Button";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Covid19 = () => {
  const { t } = useTranslation();
  const publications = [
    {
      date: "12 APRIL, 2022",
      title: "COVID-19; A THREAT TO FOOD SECURITY",
      downloadLink: "/assets/documents/COVID-19 A Threat To Food Security In Ghana.pdf"
    },
    {
      date: "26 MAY, 2022",
      title: "PANDEMICS AND THE USE OF NON-PHARMACEUTICAL INTERVENTIONS: LESSONS FROM THE 1918 PANDEMIC AND COVID",
      downloadLink: "#"
    },
    {
      date: "28 MAY, 2022",
      title: "RETHINKING SOCIAL PROTECTION AND SAFETY NETS IN GHANA: WHAT THE COVID-19 PANDEMIC HAS TAUGHT US",
      downloadLink: "#"
    },
    {
      date: "2 JUNE, 2023",
      title: "GHANA'S CHILD WELFARE SYSTEM AND COVID-19 PANDEMIC",
      downloadLink: "#"
    },
    {
      date: "18 JANUARY, 2024",
      title: "THE POLITICAL ECONOMY OF COVID-19 IN AFRICA",
      downloadLink: "#"
    }
  ];

  return (
    <section
      id="covid-19"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={covid} alt="COVID-19 Series" className="w-full h-[400px] md:h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("covid19.title")}
        </motion.h1>
      </motion.div>

      {/* Publications List */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex-1">
                <p className="text-gray-600 text-sm md:text-base mb-2 font-semibold">
                  {pub.date}
                </p>
                <h3 className="font-bold text-lg md:text-xl text-gray-800">
                  {pub.title}
                </h3>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {pub.downloadLink !== "#" ? (
                  <a
                    href={pub.downloadLink}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      label={
                        <span className="flex items-center gap-2">
                          <FaDownload />
                          {t("covid19.download")}
                        </span>
                      }
                    />
                  </a>
                ) : (
                  <Button
                    label={
                      <span className="flex items-center gap-2">
                        <FaFilePdf />
                        {t("covid19.download")}
                      </span>
                    }
                    disabled={true}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-orange/10 to-red/10 rounded-2xl p-8 md:p-10 border-l-4 border-orange">
          <h2 className="font-bold text-2xl md:text-3xl mb-4 text-gray-800">
            {t("covid19.aboutTitle")}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {t("covid19.aboutText")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Covid19;
