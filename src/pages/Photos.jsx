import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
  rand10,
  rand11,
  rand12,
  rand13,
  rand14,
  rand15,
  rand16,
  rand17,
  rand18,
} from "../assets/images";

const Photos = () => {
  const { t } = useTranslation();
  const albums = [
    {
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand1,
      title: "Field Trip_February 2020",
      count: 50,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand2,
      title: "Farmer Voice Radio",
      count: 204,
    },
    {
      url: "https://photos.app.goo.gl/zMscdv8XuBUzQUQq7",
      img: rand3,
      title: "VSLA/GALS Learning Meeting, Bekwai",
      count: 48,
    },
    {
      url: "https://photos.app.goo.gl/8nudMZcdbmGX4Fmw5",
      img: rand4,
      title: "World Day Against Child Labour (Nyonkopa)",
      count: 15,
    },
    {
      url: "https://photos.app.goo.gl/A8eQU7bW2JrMxBUD9",
      img: rand5,
      title: "Cocoa Communities Library Project",
      count: 32,
    },
    {
      url: "https://photos.app.goo.gl/qzQQjUfwSvGEZPhv7",
      img: rand6,
      title: "(The Launch) Cocoa Communities Library Project",
      count: 98,
    },
    {
      url: "https://photos.app.goo.gl/8WtHfaQcPRaoTbSMA",
      img: rand7,
      title: "CCLP LAUNCH",
      count: 27,
    },
    {
      url: "https://photos.app.goo.gl/hoCJmrYiGjDmib7g8",
      img: rand8,
      title: "CCLP Quiz Wednesday",
      count: 92,
    },
    {
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand9,
      title: "Community Engagement Activities",
      count: 65,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand10,
      title: "Training Workshops",
      count: 120,
    },
    {
      url: "https://photos.app.goo.gl/zMscdv8XuBUzQUQq7",
      img: rand11,
      title: "Field Research Documentation",
      count: 85,
    },
    {
      url: "https://photos.app.goo.gl/8nudMZcdbmGX4Fmw5",
      img: rand12,
      title: "Youth Programs",
      count: 45,
    },
    {
      url: "https://photos.app.goo.gl/A8eQU7bW2JrMxBUD9",
      img: rand13,
      title: "Women Empowerment Initiatives",
      count: 78,
    },
    {
      url: "https://photos.app.goo.gl/qzQQjUfwSvGEZPhv7",
      img: rand14,
      title: "Agricultural Development Projects",
      count: 110,
    },
    {
      url: "https://photos.app.goo.gl/8WtHfaQcPRaoTbSMA",
      img: rand15,
      title: "Education Programs",
      count: 95,
    },
    {
      url: "https://photos.app.goo.gl/hoCJmrYiGjDmib7g8",
      img: rand16,
      title: "Community Events",
      count: 60,
    },
    {
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand17,
      title: "Partnership Meetings",
      count: 40,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand18,
      title: "Impact Assessment Activities",
      count: 55,
    },
  ];

  // Using a professional photography-themed header image
  const headerImage = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80";

  return (
    <section
      id="photos"
      className="max-container max-w-full w-full min-h-screen justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={headerImage} 
          className="w-full h-[400px] md:h-[500px] object-cover" 
          alt="Photos" 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundColor = '#F89823';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("photos.title")}
        </motion.h1>
      </motion.div>

      {/* Photos Gallery */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {albums.map((album, index) => (
            <motion.a
              key={index}
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={album.img}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold text-sm mb-1">{album.title}</p>
                  <p className="text-xs text-gray-300">{album.count} items</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default Photos;
