import React from "react";
import { motion } from "framer-motion";
import { pic, micro, vid } from "../assets/icons";
import { publication, glasses } from "../assets/images";
import Button from "../components/Button";
import BookSlider from "../components/BookSlider";
import FilterableTable from "../components/FilterableTable";
import NewsletterForm from "../components/NewsletterForm";
import { FaMicrophone, FaImage, FaVideo, FaDownload } from "react-icons/fa";

const Publications = () => {
  return (
    <section
      id="publications"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={glasses} className="w-full h-[400px] md:h-[500px] object-cover" alt="Publications" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Publications
        </motion.h1>
      </motion.div>

      {/* Media Icons Section */}
      <motion.div
        className="w-full max-w-6xl mx-auto mt-12 mb-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="/podcast"
            className="w-20 h-20 bg-red rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMicrophone className="text-white text-3xl" />
          </motion.a>
          <motion.a
            href="/photos"
            className="w-20 h-20 bg-red rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaImage className="text-white text-3xl" />
          </motion.a>
          <motion.a
            href="/videos"
            className="w-20 h-20 bg-red rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaVideo className="text-white text-3xl" />
          </motion.a>
        </div>
      </motion.div>

      {/* Featured Publication */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="bg-gradient-to-br from-orange to-red rounded-2xl p-6 shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={publication} alt="2023 In Review" className="w-full h-auto rounded-lg" />
          </motion.div>
          <div>
            <motion.h1
              className="font-bold text-3xl md:text-4xl mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              2023 IN REVIEW:
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl mb-4 text-orange"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our Impact
            </motion.h2>
            <div className="w-16 h-1 bg-orange mb-5"></div>
            <h3 className="mb-6 text-gray-600 font-semibold">January, 2024</h3>
            <motion.div className="mb-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button label="Download >>>" />
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed">
                Participatory Development Associates (PDA) is a social development
                and consultancy organization in Ghana that supports development
                processes at community, district, national, regional and
                institutional levels towards creating a fairer world where all
                people can realize their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Book Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <BookSlider />
      </motion.div>

      {/* Filterable Table */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FilterableTable />
      </motion.div>

      {/* Newsletter Section - Fixed spacing */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-800">
                SUBSCRIBE TO OUR NEWSLETTERS
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-3 text-gray-800 text-lg">
                Stay up to date with PDA research, insights and events on your
                topics of interest
              </p>
              <p className="mb-6 text-gray-700 text-sm leading-relaxed">
                We only use your email address to send you the newsletter and to
                see how many people are opening our emails. Please read our full
                privacy policy
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <NewsletterForm />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;
