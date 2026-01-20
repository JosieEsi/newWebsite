import React, { useState } from "react";
import { motion } from "framer-motion";
import { childabuse, abusecase } from "../assets/images";
import Button from "../components/Button";
import { FaExclamationTriangle, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChildAbuseTracker = () => {
  const navigate = useNavigate();
  const [expandedReport, setExpandedReport] = useState(null);

  const reports = [
    {
      quarter: "Q3 2022",
      year: "2022",
      title: "Child abuse cases recorded in the third quarter of 2022",
      description: "In the third quarter of 2022, a total of 23 child abuse cases were recorded on the PDA Child Abuse Tracker. 76 percent of the total recorded cases were sexual abuse. The data further indicates that a whopping 36 percent of the child abuse cases were perpetrated by guardians and relatives.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q2 2022",
      year: "2022",
      title: "Child abuse cases recorded in the second quarter of 2022",
      description: "The PDA Child Abuse Tracker is an online platform deployed by PDA to track cases of child abuse in Ghana. Data is sourced from selected online and print media outlets in Ghana. In the second quarter of 2022, 22 out of the 26 cases of child abuse were sexual abuse. About 90 percent of the victims were female.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q1 2022",
      year: "2022",
      title: "Child abuse cases recorded in the first quarter of 2022",
      description: "PDA continues to demonstrate its commitment towards protecting the Ghanaian child from all forms of abuses, through advocacy. The PDA child abuse tracker has been one of the many avenues the organization is leveraging in this advocacy drive. In the first quarter of 2022, the tracker recorded a total number of 27 child abuse cases.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q4 2021",
      year: "2021",
      title: "4th Quarter Child Abuse Cases In 2021",
      description: "In the last quarter of 2021, the PDA child abuse tracker recorded a total of 26 cases of child abuse cases in Ghana. Out of this number, 23 were sexual abuse cases, and the remaining 3 were of physical abuse. As depicted in the infographic, more than 90% of the victims of sexual abuse were female.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q3 2021",
      year: "2021",
      title: "Child Abuse Cases Recorded In The 3rd Quarter Of 2021",
      description: "In the third quarter of 2021, the PDA Child Abuse Tracker recorded a total of 23 child abuse cases. Out of this number, 17 were cases of child sexual abuse, and while there was only 1 reported case of child abuse, there were 5 reported instances of physical abuse. The most affected victims of child abuse were females.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q2 2021",
      year: "2021",
      title: "Second Quarter Reported Cases of Child Abuse in Ghana, 2021",
      description: "In the second quarter of 2021, the PDA Child Abuse Tracker recorded a total of 26 child abuse cases. Out of this number, 24 were cases of child sexual abuse. Physical abuse and child abduction recorded only 1 case each.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q3 2020",
      year: "2020",
      title: "STATISTICS OF CHILD ABUSE FOR QUARTER THREE, 2020",
      description: "The PDA child abuse tracker continues to record cases of child abuse in Ghana. For the 3rd quarter of 2020, the platform recorded over 30 child abuse cases from selected media outlets.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "H1 2020",
      year: "2020",
      title: "Analysis of Child Abuse Cases Recorded in First Half of 2020",
      description: "The worrying trend of child abuse in Ghana continues to dent the country's effort in addressing the perpetration of abuse against children. The PDA Child Abuse Tracker in the First Half of 2020, recorded 68 cases of child abuse reported in selected media outlets in Ghana. Out of this number, sexual abuse recorded 53 cases.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "Q1 2020",
      year: "2020",
      title: "STATISTICS OF CHILD ABUSE FOR QUARTER ONE, 2020",
      description: "The PDA child abuse tracker continues to record cases of child abuse in Ghana. For the 1st quarter of 2020, the platform recorded over 40 child abuse cases from selected media outlets.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    },
    {
      quarter: "H2 2019",
      year: "2019",
      title: "Second half of 2019- Child Abuse Tracker",
      description: "In the second half of 2019 alone, the PDA child abuse tracker recorded over 70 cases of child abuse.",
      link: "https://pdaghana.com/child-abuse-tracker-updates/"
    }
  ];

  return (
    <section
      id="child-abuse-tracker"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={childabuse} alt="Child Abuse Tracker" className="w-full h-[400px] md:h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Child Abuse Tracker
        </motion.h1>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-red/10 to-orange/10 rounded-2xl p-8 md:p-10 border-l-4 border-red">
          <div className="flex items-start gap-4 mb-4">
            <FaExclamationTriangle className="text-red text-4xl flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-2xl md:text-3xl mb-4 text-gray-800">
                About the Child Abuse Tracker
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                As part of PDA's objective to advocate for the protection of children in Ghana, 
                the organization developed an online platform that tracks cases of child abuse 
                published in the newspapers and prominent online portals. The progress of these 
                cases are also monitored in order to advocate for further intervention where necessary.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                Research shows that the reported cases constitute only a small fraction of the real 
                abuses children face. Majority of the cases go unreported, and the victims live with 
                the posttraumatic experiences that accompany such abuses. Sadly, even with the cases 
                reported, justice still remains a distant possibility.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg font-semibold">
                Join PDA in its efforts to advocate for justice for these victims and for stronger 
                child protecting systems by visiting the Child Abuse Tracker and learning updates 
                on specific cases in order to inform advocacy.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reports Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange mb-8 text-center">
          Quarterly Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-orange"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaCalendarAlt className="text-orange" />
                  <span className="font-semibold text-gray-600">{report.quarter} {report.year}</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-3 text-gray-800">
                  {report.title}
                </h3>
                {expandedReport === index ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      {report.description}
                    </p>
                    <button
                      onClick={() => setExpandedReport(null)}
                      className="text-orange font-semibold text-sm hover:text-red transition-colors"
                    >
                      Read Less
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                      {report.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setExpandedReport(index)}
                        className="text-orange font-semibold text-sm hover:text-red transition-colors flex items-center gap-2"
                      >
                        Read More
                        <FaArrowRight className="text-xs" />
                      </button>
                      <a
                        href={report.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange font-semibold text-sm hover:text-red transition-colors"
                      >
                        View Full Report →
                      </a>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    
    </section>
  );
};

export default ChildAbuseTracker;
