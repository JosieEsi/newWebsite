import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { edemnew, pdaLogo } from "../assets/images";
import { pdaafricalogo } from "../assets/icons";
import { FaPhone, FaEnvelope, FaArrowLeft, FaLinkedin, FaTwitter, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const EdemProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="max-container max-w-full w-full min-h-screen bg-gradient-to-br from-gray-50 to-white font-poppins relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100/50 rounded-full blur-3xl"></div>

      {/* Back Button */}
      <motion.div
        className="absolute top-28 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-gray-100"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft className="text-sm" />
          <span className="font-medium">Back</span>
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* Left Side - Portrait */}
            <motion.div
              className="relative flex justify-center lg:justify-start order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-lg">
                {/* Orange Circle around head - positioned behind the head */}
                <motion.div
                  className="absolute bg-orange rounded-full"
                  style={{ 
                    width: "450px", 
                    height: "450px", 
                    top: "-5%",
                    left: "5%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0
                  }}
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                {/* Portrait Image */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <img
                    src={edemnew}
                    alt="Edem Agbe"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-10 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Name and Title */}
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  EDEM AGBE
                </motion.h1>
                <motion.div
                  className="w-32 h-1.5 bg-orange"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
                <motion.p
                  className="text-xl md:text-2xl text-gray-600 font-medium pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Managing Director, PDA
                </motion.p>
              </div>

              {/* Bio */}
              <motion.div
                className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p>
                  Edem Agbe is a development practitioner, social researcher, and monitoring and evaluation specialist with nearly two decades of experience advancing community-led and inclusive economic growth initiatives across Africa. He is the Managing Director of Participatory Development Associates (PDA), where he leads research, evaluation, and capacity-strengthening work for governments, donors, NGOs, and the private sector.
                </p>
                <p>
                  Edem currently serves as Ghana Lead for the West Africa Anglophone Impact Partner Organization for the Mastercard Foundation, and has advised major international organizations and private-sector partners including IDH, Nestlé, Diageo, the African Union, UNESCO, and ActionAid. His technical expertise spans rural financial inclusion, women's economic empowerment, entrepreneurship, youth transitions to work, and community-driven development.
                </p>
                <p>
                  A strong advocate for indigenous knowledge systems, he designs programs that center local realities and evidence-based learning.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* Phone */}
                <motion.a
                  href="tel:+233242784407"
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl hover:bg-orange hover:text-white transition-all duration-300 group shadow-sm border border-gray-100 hover:border-orange"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-gray-600 group-hover:text-white text-lg" />
                    <FaWhatsapp className="text-green-600 group-hover:text-white text-xl" />
                  </div>
                  <span className="text-gray-700 group-hover:text-white font-medium text-sm md:text-base">
                    (+233) 24 278 4407
                  </span>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:eagbe@pdaghana.com"
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl hover:bg-orange hover:text-white transition-all duration-300 group shadow-sm border border-gray-100 hover:border-orange"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaEnvelope className="text-gray-600 group-hover:text-white text-lg" />
                  <span className="text-gray-700 group-hover:text-white font-medium text-sm md:text-base truncate">
                    eagbe@pdaghana.com
                  </span>
                </motion.a>

                {/* Twitter/X */}
                <motion.a
                  href="https://x.com/edemresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl hover:bg-orange hover:text-white transition-all duration-300 group shadow-sm border border-gray-100 hover:border-orange"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaTwitter className="text-gray-600 group-hover:text-white text-lg" />
                  <span className="text-gray-700 group-hover:text-white font-medium text-sm md:text-base">
                    @edemresearch
                  </span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/edem-agbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl hover:bg-orange hover:text-white transition-all duration-300 group shadow-sm border border-gray-100 hover:border-orange"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaLinkedin className="text-gray-600 group-hover:text-white text-lg" />
                  <span className="text-gray-700 group-hover:text-white font-medium text-sm md:text-base">
                    Edem Agbe
                  </span>
                </motion.a>
              </motion.div>

              {/* Company Logos */}
              <motion.div
                className="pt-8 border-t-2 border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
               
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* PDA Logo */}
                  <motion.a
                    href="https://www.pdaghana.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-3 border-2 border-gray-200 group-hover:border-orange transition-colors duration-300 shadow-md">
                      <img
                        src={pdaLogo}
                        alt="PDA Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-lg group-hover:text-orange transition-colors duration-300">
                        Participatory Development Associates Ltd.
                      </p>
                     </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-orange text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </motion.a>

                  {/* PDA Africa Logo */}
                  <motion.a
                    href="https://www.pdaafrica.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-3 border-2 border-gray-200 group-hover:border-orange transition-colors duration-300 shadow-md">
                      <img
                        src={pdaafricalogo}
                        alt="PDA Africa Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-lg group-hover:text-orange transition-colors duration-300 italic">
                        PDA Africa
                      </p>
                    </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-orange text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default EdemProfile;
