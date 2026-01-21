import React, { useState } from "react";
import { motion } from "framer-motion";
import { obuasi } from "../assets/images";
import Tab from "../components/Tab";
import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";

const OurImpact = () => {
  const { t } = useTranslation();
  const impactStories = [
    { 
      id: "VSvz_fSONdU", 
      title: "Impact Story 1",
      description: t("ourImpact.impactStoriesDesc")
    },
    { 
      id: "sVqGZfIW5zc", 
      title: "Impact Story 2",
      description: t("ourImpact.impactStoriesDesc")
    },
  ];

  const webinars = [
    { 
      id: "7tQK-p01OUA", 
      title: "Webinar 1",
      description: t("ourImpact.webinarsDesc")
    },
    { 
      id: "1jyhbZKsKVY", 
      title: "Webinar 2",
      description: t("ourImpact.webinarsDesc")
    },
  ];

  const workshops = [
    { 
      id: "CBXOLspFKug", 
      title: "Workshop Session",
      description: t("ourImpact.workshopsDesc")
    },
  ];

  const VideoCard = ({ video, index }) => (
    <motion.div
      className="w-full max-w-[500px] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-4">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
      <p className="font-poppins text-gray-700 text-base md:text-lg leading-relaxed px-2">
        {video.description}
      </p>
    </motion.div>
  );

  return (
    <section
      id="our-impact"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col bg-gradient-to-b from-gray-50 to-white"
    >
      <motion.div
        className="mt-14 relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={obuasi} className="w-full h-[400px] md:h-[500px] object-cover" alt="Our Impact" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("ourImpact.title")}
        </motion.h1>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg my-6 font-poppins max-md:text-base max-sm:text-sm leading-7 text-gray-700">
          {t("ourImpact.description1")}
        </p>
        <p className="text-lg mb-6 font-poppins max-md:text-base max-sm:text-sm leading-7 text-gray-700">
          {t("ourImpact.description2")}
        </p>
      </motion.div>
      {/* Impact Stories Section */}
      <section id="impact-stories" className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          className="flex justify-center md:justify-start mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tab label={t("ourImpact.impactStories")} />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {impactStories.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>
        <motion.div
          className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
        <motion.div
          className="flex justify-center md:justify-start mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tab label={t("ourImpact.webinars")} />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {webinars.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>
        <motion.div
          className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          className="flex justify-center md:justify-start mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tab label={t("ourImpact.workshops")} />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-4xl mx-auto">
          {workshops.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurImpact;
