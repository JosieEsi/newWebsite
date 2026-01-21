import React, { useState, useMemo } from "react";
import { projects as allProjects } from "../components/ProjectsData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaFilter, FaCalendarAlt, FaUsers, FaGlobe } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const allValue = t("projectsPage.all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(allValue);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPartner, setSelectedPartner] = useState(allValue);
  const [selectedCountry, setSelectedCountry] = useState(allValue);

  // Extract unique partners and countries from projects
  const uniquePartners = useMemo(() => {
    const partners = new Set();
    allProjects.forEach((project) => {
      if (project.partners && project.partners.trim() !== "") {
        // Handle multiple partners separated by semicolons or commas
        const partnerList = project.partners.split(/[;,]/).map((p) => p.trim());
        partnerList.forEach((p) => {
          if (p) partners.add(p);
        });
      }
    });
    return Array.from(partners).sort();
  }, []);

  const uniqueCountries = useMemo(() => {
    const countries = new Set();
    allProjects.forEach((project) => {
      if (project.location && project.location.trim() !== "") {
        // Handle multiple locations separated by commas
        const locationList = project.location.split(",").map((l) => l.trim());
        locationList.forEach((loc) => {
          // Extract country names (remove region/district info)
          const country = loc.split(/[()]/)[0].trim();
          if (country) countries.add(country);
        });
      }
    });
    return Array.from(countries).sort();
  }, []);

  // Categories list - using translations
  const categories = useMemo(() => [
    allValue,
    "Agriculture",
    "Capacity Building",
    "Child Protection and Welfare",
    "Climate",
    "Cocoa Sector",
    "Community Development",
    "Education & Literacy",
    "Employment",
    "Evidence Generation (MERL)",
    "Facilitation & Moderation",
    "Organizational Development",
    "Policy Analysis & Advocacy",
    "Women's Economic Empowerment",
    "Youth Welfare",
  ], [allValue]);

  // Helper function to map project categories to filter categories
  const mapCategoryToFilter = (projectCategory) => {
    if (!projectCategory) return allValue;
    
    const categoryLower = projectCategory.toLowerCase();
    
    // Map existing categories to new filter categories
    if (categoryLower.includes("agriculture") || categoryLower.includes("cocoa")) {
      if (categoryLower.includes("cocoa")) return "Cocoa Sector";
      return "Agriculture";
    }
    if (categoryLower.includes("education") || categoryLower.includes("literacy")) {
      return "Education & Literacy";
    }
    if (categoryLower.includes("child") || categoryLower.includes("protection") || categoryLower.includes("welfare")) {
      return "Child Protection and Welfare";
    }
    if (categoryLower.includes("women") || categoryLower.includes("gender")) {
      return "Women's Economic Empowerment";
    }
    if (categoryLower.includes("youth")) {
      return "Youth Welfare";
    }
    if (categoryLower.includes("climate") || categoryLower.includes("environment")) {
      return "Climate";
    }
    if (categoryLower.includes("capacity") || categoryLower.includes("training")) {
      return "Capacity Building";
    }
    if (categoryLower.includes("community")) {
      return "Community Development";
    }
    if (categoryLower.includes("employment") || categoryLower.includes("job")) {
      return "Employment";
    }
    if (categoryLower.includes("research") || categoryLower.includes("evaluation") || categoryLower.includes("merl")) {
      return "Evidence Generation (MERL)";
    }
    if (categoryLower.includes("policy") || categoryLower.includes("advocacy")) {
      return "Policy Analysis & Advocacy";
    }
    if (categoryLower.includes("organizational") || categoryLower.includes("organization")) {
      return "Organizational Development";
    }
    if (categoryLower.includes("facilitation") || categoryLower.includes("moderation")) {
      return "Facilitation & Moderation";
    }
    
    // Default to Community Development if no match
    return "Community Development";
  };

  // Filter projects based on search, category, date, partner, and country
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Search filter (by name/description)
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.fullDescription &&
          project.fullDescription.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory =
        selectedCategory === allValue ||
        project.category === selectedCategory ||
        mapCategoryToFilter(project.category) === selectedCategory;

      // Date filter (by period)
      const matchesDate =
        selectedDate === "" ||
        !project.period ||
        project.period.includes(selectedDate);

      // Partner filter
      const matchesPartner =
        selectedPartner === allValue ||
        !project.partners ||
        project.partners === "" ||
        project.partners.toLowerCase().includes(selectedPartner.toLowerCase()) ||
        selectedPartner.toLowerCase().includes(project.partners.toLowerCase());

      // Country filter
      const matchesCountry =
        selectedCountry === allValue ||
        !project.location ||
        project.location === "" ||
        project.location.toLowerCase().includes(selectedCountry.toLowerCase()) ||
        selectedCountry.toLowerCase().includes(project.location.toLowerCase());

      return matchesSearch && matchesCategory && matchesDate && matchesPartner && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedDate, selectedPartner, selectedCountry, allValue]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        bounce: 0.6,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const getColorClasses = (color) => {
    if (color === "orange") {
      return {
        bg: "bg-orange",
        hoverBg: "hover:bg-orange/90",
        text: "text-orange",
        border: "border-orange",
        gradient: "from-orange/20 to-orange/5",
        shadow: "rgba(248, 154, 35, 0.4)",
      };
    } else {
      return {
        bg: "bg-red",
        hoverBg: "hover:bg-red/90",
        text: "text-red",
        border: "border-red",
        gradient: "from-red/20 to-red/5",
        shadow: "rgba(247, 81, 35, 0.4)",
      };
    }
  };

  return (
    <section
      id="our-projects"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange/5 pb-24 pt-16"
    >
      {/* Page Header */}
      <motion.div
        className="text-center mb-12 mt-20 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-poppins font-bold text-5xl md:text-6xl text-ash mb-4">
          {t("projectsPage.title").toUpperCase()}
        </h1>
        <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering communities across Sub-Saharan Africa through innovative
          development initiatives
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange to-red mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Filters Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-20 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          {/* Search Bar */}
          <div className="mb-6">
            <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
              <FaSearch className="inline mr-2" />
              {t("projectsPage.searchPlaceholder")}
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder={t("projectsPage.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <label className="block text-sm font-poppins font-semibold text-gray-700 mb-3">
              <FaFilter className="inline mr-2" />
              {t("projectsPage.filterByCategory")}
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-poppins text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Date Filter */}
          <div className="mb-6">
            <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
              <FaCalendarAlt className="inline mr-2" />
              {t("projectsPage.filterByDate")}
            </label>
            <input
              type="text"
              placeholder="Enter year (e.g., 2024)..."
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full md:w-64 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            />
          </div>

          {/* Partner Filter */}
          <div className="mb-6">
            <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
              <FaUsers className="inline mr-2" />
              {t("projectsPage.filterByPartner")}
            </label>
            <select
              value={selectedPartner}
              onChange={(e) => setSelectedPartner(e.target.value)}
              className="w-full md:w-64 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins bg-white"
            >
              <option value={allValue}>{allValue}</option>
              {uniquePartners.map((partner) => (
                <option key={partner} value={partner}>
                  {partner}
                </option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div>
            <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
              <FaGlobe className="inline mr-2" />
              {t("projectsPage.filterByCountry")}
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full md:w-64 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins bg-white"
            >
              <option value={allValue}>{allValue}</option>
              {uniqueCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-poppins text-gray-600">
            Showing <span className="font-bold text-orange">{filteredProjects.length}</span> of{" "}
            <span className="font-bold">{allProjects.length}</span> projects
            {searchQuery && (
              <span>
                {" "}
                matching "<span className="font-semibold">{searchQuery}</span>"
              </span>
            )}
            {selectedCategory !== allValue && (
              <span>
                {" "}
                in <span className="font-semibold">{selectedCategory}</span>
              </span>
            )}
            {selectedPartner !== allValue && (
              <span>
                {" "}
                with partner <span className="font-semibold">{selectedPartner}</span>
              </span>
            )}
            {selectedCountry !== allValue && (
              <span>
                {" "}
                in <span className="font-semibold">{selectedCountry}</span>
              </span>
            )}
          </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={`${searchQuery}-${selectedCategory}-${selectedDate}-${selectedPartner}-${selectedCountry}`}
      >
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <p className="font-poppins text-xl text-gray-500 mb-4">
              {t("projectsPage.noProjectsFound")}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(allValue);
                setSelectedDate("");
                setSelectedPartner(allValue);
                setSelectedCountry(allValue);
              }}
              className="px-6 py-3 bg-orange text-white rounded-lg font-poppins font-semibold hover:bg-orange/90 transition-colors"
            >
              {t("projectsPage.clearFilters")}
            </button>
          </div>
        ) : (
          filteredProjects.map((project, idx) => {
          const colors = getColorClasses(project.color);
          const isHovered = hoveredProject === project.id;

          return (
            <motion.div
              key={project.id}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Main Card */}
              <div
                className={`relative rounded-2xl overflow-hidden shadow-xl cursor-pointer h-full bg-white border-2 ${colors.border} transition-all duration-300`}
                style={{
                  boxShadow: isHovered
                    ? `0 20px 40px -10px ${colors.shadow}`
                    : "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  
                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 right-4 ${colors.bg} text-white px-4 py-2 rounded-full text-xs font-poppins font-semibold shadow-lg transform transition-transform duration-300 ${
                      isHovered ? "scale-110 rotate-3" : "scale-100"
                    }`}
                  >
                    {project.category}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-poppins font-semibold text-ash">
                    {project.status}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white">
                  <h3
                    className={`font-poppins font-bold text-xl mb-3 ${colors.text} transition-colors duration-300`}
                  >
                    {project.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-poppins text-xs text-gray-500">
                      {project.location}
                    </span>
                  </div>

                  {/* Hover Info Panel */}
                  <motion.div
                    className={`overflow-hidden ${
                      isHovered ? "max-h-96" : "max-h-0"
                    } transition-all duration-500`}
                    initial={false}
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-poppins text-sm text-gray-700 mb-4 leading-relaxed">
                        {project.fullDescription}
                      </p>
                      <button
                        onClick={() => {
                          if (project.detailLink && project.detailLink !== "#") {
                            navigate(project.detailLink);
                          } else if (project.slug) {
                            navigate(`/projects/${project.slug}`);
                          }
                        }}
                        className={`w-full ${colors.bg} ${colors.hoverBg} text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                      >
                        Learn More →
                      </button>
                    </div>
                  </motion.div>

                  {/* Read More Button (visible when not hovered) */}
                  {!isHovered && (
                    <motion.button
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => {
                        if (project.detailLink && project.detailLink !== "#") {
                          navigate(project.detailLink);
                        } else if (project.slug) {
                          navigate(`/projects/${project.slug}`);
                        }
                      }}
                      className={`w-full ${colors.bg} ${colors.hoverBg} text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-md`}
                    >
                      Read More
                    </motion.button>
                  )}
                </div>

                {/* Decorative Corner Element */}
                <div
                  className={`absolute bottom-0 right-0 w-20 h-20 ${colors.bg} opacity-10 rounded-tl-full transform transition-transform duration-300 ${
                    isHovered ? "scale-150" : "scale-100"
                  }`}
                ></div>
              </div>
            </motion.div>
          );
          })
        )}
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center mt-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-orange to-red text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <h2 className="font-poppins font-bold text-3xl mb-4">
            Interested in Our Projects?
          </h2>
          <p className="font-poppins text-lg mb-6 opacity-90">
            Learn more about how we're making a difference in communities
            across Sub-Saharan Africa
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-orange px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
