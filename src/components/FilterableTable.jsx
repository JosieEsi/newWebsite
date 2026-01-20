import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const reports = [
  {
    date: "April 2024",
    title: "YouthFutures 2024 Youth Manifesto Dialogues",
    type: "PDA Report / Concept Note",
    topic: "Youth Development",
    downloadUrl: "https://pdaghana.com/wp-content/uploads/2024/04/YouthFutures-2024-Youth-Manifesto-Dialogues.pdf",
    fileSize: "2.5 MB",
  },
  {
    date: "March 2024",
    title: "Business Formalization in Ghana's Construction Industry",
    type: "PDA Publication",
    topic: "Construction",
    downloadUrl: "https://pdaghana.com/wp-content/uploads/2024/03/Business-Formalization-in-Ghanas-Construction-Industry.pdf",
    fileSize: "1.8 MB",
  },
  {
    date: "June 2024",
    title:
      "Unpacking locally led research and evaluation through the lens of collaborative autoethnography",
    type: "Opinion Paper",
    topic: "Research & Evaluation",
    downloadUrl: "https://pdaghana.com/wp-content/uploads/2024/06/Unpacking-locally-led-research.pdf",
    fileSize: "3.2 MB",
  },
  {
    date: "July 2024",
    title:
      "Evaluating How Root Capital's Client Businesses Impact Smallholder Livelihoods: Oil Palm in Ghana",
    type: "Policy Brief",
    topic: "Agriculture",
    downloadUrl: "https://pdaghana.com/wp-content/uploads/2024/07/Root-Capital-Oil-Palm-Ghana.pdf",
    fileSize: "2.1 MB",
  },
  {
    date: "June 2024",
    title:
      "Voices and Evidence from End-Users of the GLTV and GLRRP Remote Learning Programme in Ghana",
    type: "PDA Publication",
    topic: "Education",
    downloadUrl: "https://pdaghana.com/wp-content/uploads/2024/06/Voices-and-Evidence-GLTV-GLRRP.pdf",
    fileSize: "4.5 MB",
  },
  {
    date: "July 2024",
    title:
      "Transitions From Primary To Lower Secondary School: A Focus On Equity",
    type: "Policy Brief",
    topic: "Education",
    downloadUrl: "https://pdaghana.com/wp-content/uploads/2024/07/Transitions-Primary-Lower-Secondary.pdf",
    fileSize: "1.9 MB",
  },
];

const FilterableTable = () => {
  const [filters, setFilters] = useState({
    type: "",
    date: "",
    topic: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ type: "", date: "", topic: "" });
  };

  const filteredReports = reports.filter(
    (report) =>
      (filters.type === "" || report.type === filters.type) &&
      (filters.date === "" || report.date === filters.date) &&
      (filters.topic === "" || report.topic === filters.topic)
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange"
        >
          <option value="">REPORT TYPE</option>
          {[...new Set(reports.map((r) => r.type))].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange"
        >
          <option value="">DATE</option>
          {[...new Set(reports.map((r) => r.date))].map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <select
          name="topic"
          value={filters.topic}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange "
        >
          <option value="">TOPIC</option>
          {[...new Set(reports.map((r) => r.topic))].map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        <motion.button
          onClick={clearFilters}
          className="bg-orange text-white px-4 py-2 rounded-md hover:bg-orange/90 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CLEAR FILTERS
        </motion.button>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {filteredReports.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>No reports found matching your filters.</p>
          </div>
        ) : (
          filteredReports.map((report, index) => (
            <motion.div
              key={index}
              className={`p-4 border-b border-gray-200 last:border-b-0 ${
                index % 2 ? "bg-gray-50" : "bg-white"
              } hover:bg-orange/5 transition-colors duration-300 cursor-pointer group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 5, backgroundColor: "rgba(248, 154, 35, 0.1)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">{report.date}</p>
                  <p className="font-semibold text-gray-800 group-hover:text-orange transition-colors duration-300">
                    {report.title}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-gray-600 text-sm">{report.type}</p>
                    {report.fileSize && (
                      <span className="text-xs text-gray-400">({report.fileSize})</span>
                    )}
                  </div>
                </div>
                {report.downloadUrl && (
                  <motion.a
                    href={report.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange text-white rounded-lg font-semibold text-sm hover:bg-orange/90 transition-colors duration-300 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaDownload className="text-xs" />
                    <span>Download PDF</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterableTable;
