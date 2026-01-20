import React from "react";
import { bulb } from "../assets/icons";
import Button from "../components/Button";

const leftExpertise = [
  "Processes for community empowerment",
  "Issues of governance – in education, health and forestry",
  "Organisation development with civil society organisations",
  "Working with communities",
  "Decentralisation",
  "Policy analysis and advocacy",
  "Poverty and social assessments",
  "Child labour",
  "Reproductive health, including HIV/AIDS",
  "Gender and development",
  "Monitoring and evaluation",
  "Strategic planning",
];

const rightExpertise = [
  "Qualitative research, using participatory rapid appraisal (PRA/PLA) approaches among others",
  "Quantitative research and methodological approaches using advance tools and software’s for analysis",
  "Facilitation, using participatory learning and action approaches to working with communities and organizations",
  "Facilitation/moderation of workshops and meetings",
  "Training & Capacity Building, using participatory learning methodologies",
  "Accompanying facilitators and managers of change processes in organisations and communities",
  "Organisation development – in particular accompanying NGOs and other civil society organisations",
  "Managing projects in our areas of work shown above",
];

const Expertise = () => {
  return (
    <section id="expertise" className="w-full py-24 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-orange text-center">
        Our Expertise
      </h2>
      <p className="text-center mt-3 text-gray-600">
        We work in a wide range of areas including:
      </p>

      {/* Content */}
      <div className="relative mt-16 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Icon */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:flex bg-orange w-28 h-28 rounded-full items-center justify-center shadow-lg">
          <img src={bulb} alt="Expertise" className="w-16 h-16" />
        </div>

        {/* LEFT – Black panel */}
        <div className="bg-black text-white w-full lg:w-1/2 rounded-l-[90px] rounded-r-xl px-10 py-12 shadow-xl">
          <ul className="space-y-3 text-sm leading-relaxed">
            {leftExpertise.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – Light panel */}
        <div className="bg-gray-200 w-full lg:w-1/2 rounded-r-[90px] rounded-l-xl px-10 py-12 shadow-xl">
          <ul className="space-y-4 text-sm text-gray-800 leading-relaxed">
            {rightExpertise.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-8">
            <Button label="More Projects >>>" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
