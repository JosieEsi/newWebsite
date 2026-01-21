import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { strategic, farmer } from "../assets/images";
import Button from "../components/Button";
import { clipboard, bulb } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaGlobe, FaHandshake, FaUsers, FaDollarSign, FaChartLine, FaArrowRight } from "react-icons/fa";
import { projects } from "../components/ProjectsData";
import { useTranslation } from "../hooks/useTranslation";

const WhatWeDo = () => {
  const [hoveredObjective, setHoveredObjective] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const leftExpertise = useMemo(() => t("whatWeDo.leftExpertise"), [t]);
  const rightExpertise = useMemo(() => t("whatWeDo.rightExpertise"), [t]);

  const strategicObjectives = useMemo(() => [
    {
      number: "01",
      title: t("whatWeDo.objectives.international.title"),
      description: t("whatWeDo.objectives.international.description"),
      icon: FaGlobe,
      color: "from-orange to-red",
    },
    {
      number: "02",
      title: t("whatWeDo.objectives.partnership.title"),
      description: t("whatWeDo.objectives.partnership.description"),
      icon: FaHandshake,
      color: "from-red to-orange",
    },
    {
      number: "03",
      title: t("whatWeDo.objectives.peopleCentered.title"),
      description: t("whatWeDo.objectives.peopleCentered.description"),
      icon: FaUsers,
      color: "from-orange to-red",
    },
    {
      number: "04",
      title: t("whatWeDo.objectives.staffWelfare.title"),
      description: t("whatWeDo.objectives.staffWelfare.description"),
      icon: FaUsers,
      color: "from-red to-orange",
    },
    {
      number: "05",
      title: t("whatWeDo.objectives.financial.title"),
      description: t("whatWeDo.objectives.financial.description"),
      icon: FaDollarSign,
      color: "from-orange to-red",
    },
  ], [t]);

  const handleProjectClick = (project) => {
    if (project.detailLink && project.detailLink !== "#") {
      navigate(project.detailLink);
    } else if (project.slug) {
      navigate(`/projects/${project.slug}`);
    }
  };

  return (
    <section
      id="whatwedo"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-white"
    >
      {/* Strategic Objectives Section */}
      <section
        id="strategic-objectives"
        className="flex flex-col justify-center mt-20 mb-20"
      >
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={farmer} className="w-full h-[400px] md:h-[500px] object-cover" alt="Strategic Objectives" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <motion.h1
            className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("whatWeDo.title")}
          </motion.h1>
        </motion.div>

        {/* Strategic Objectives Grid */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicObjectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${objective.color} rounded-2xl p-6 md:p-8 shadow-xl text-white relative overflow-hidden group cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredObjective(index)}
                  onHoverEnd={() => setHoveredObjective(null)}
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
                    {objective.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-5xl mb-4" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-bold text-xl md:text-2xl mb-4">{objective.title}</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {objective.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </section>

      {/* Our Projects Section */}
      <section
        id="our-projects"
        className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col py-16"
      >
        <motion.h1
          className="font-bold text-orange flex justify-center text-3xl md:text-4xl mt-10 mb-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("whatWeDo.ourProjects")}
        </motion.h1>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="bg-orange rounded-[50px] w-28 h-28 flex items-center justify-center shadow-xl">
                <img src={clipboard} alt="Projects" className="w-20 h-20" />
              </div>
            </motion.div>
            
            <div className="flex-1 w-full">
              {/* Featured Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(0, 3).map((project, index) => {
                  const colors = project.color === "orange" 
                    ? { bg: "bg-orange", text: "text-orange", border: "border-orange" }
                    : { bg: "bg-red", text: "text-red", border: "border-red" };
                  
                  return (
                    <motion.div
                      key={project.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute top-4 right-4 ${colors.bg} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                          {project.status}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className={`font-bold text-lg mb-2 ${colors.text} group-hover:underline`}>
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{project.location}</span>
                          <FaArrowRight className={`${colors.text} group-hover:translate-x-2 transition-transform duration-300`} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/our-projects">
            <Button label={`${t("common.moreProjects")} >>>`} />
          </Link>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange text-center mb-3">
            {t("whatWeDo.expertise")}
          </h2>
          <p className="text-center mt-3 text-gray-600 text-lg mb-12">
            {t("whatWeDo.expertiseSubtitle")}
          </p>
        </motion.div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Icon */}
          <motion.div
            className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:flex bg-orange w-28 h-28 rounded-full items-center justify-center shadow-xl z-10"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ rotate: 360, scale: 1.1 }}
          >
            <img src={bulb} alt="Expertise" className="w-16 h-16" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
            {/* LEFT – Black panel */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black text-white w-full lg:w-1/2 rounded-2xl lg:rounded-l-[90px] lg:rounded-r-xl px-6 md:px-10 py-12 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <ul className="space-y-4 text-sm md:text-base leading-relaxed">
                {leftExpertise.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 10, color: "#f89823" }}
                  >
                    <span className="text-orange mt-1 group-hover:scale-150 transition-transform duration-300">●</span>
                    <span className="group-hover:text-orange transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT – Light panel */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-200 w-full lg:w-1/2 rounded-2xl lg:rounded-r-[90px] lg:rounded-l-xl px-6 md:px-10 py-12 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8">
                {rightExpertise.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: -10, color: "#f89823" }}
                  >
                    <span className="text-orange mt-1 group-hover:scale-150 transition-transform duration-300">●</span>
                    <span className="group-hover:text-orange transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/our-projects">
                  <Button label={`${t("common.moreProjects")} >>>`} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
