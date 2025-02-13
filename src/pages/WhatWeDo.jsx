import React from "react";
import { strategic, farmer } from "../assets/images";
import Button from "../components/Button";
import { clipboard, bulb } from "../assets/icons";
import ProjectSlider from "../components/ProjectSlider";

const WhatWeDo = () => {
  return (
    <section
      id="whatwedo"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins"
    >
      <section
        id="strategic-themes"
        className="flex flex-col justify-center mt-20 mb-20"
      >
        <div className="relative w-full">
          <img src={farmer} className="w-full h-[400px]" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <div className="flex justify-center mt-10">
          <img src={strategic} alt="" />
        </div>
        <div className="mt-20 flex justify-center">
          <Button label="Download Strategic Themes 2022-2027" />
        </div>
      </section>
      <section
        id="our-projects"
        className="bg-gray-100 min-h-screen flex flex-col "
      >
        <h1 className="font-bold text-orange flex justify-center text-3xl mt-10">
          Our Projects
        </h1>

        <div className="flex flex-row w-full padding  ">
          <div className="flex w-1/3 lg:ml-60 mt-20 md:ml-10 max-sm:ml-10">
            <div className=" bg-orange rounded-[50px] w-28 h-28 flex items-center justify-center">
              <img src={clipboard} alt="" className="w-20 h-20 " />
            </div>
          </div>
          <div className="bg-gray-200 w-2/3 h-auto rounded-lg"></div>
          <ProjectSlider />
        </div>

        <div className=" flex justify-center">
          <Button label="More Projects >>>" />
        </div>
      </section>
      <section id="expertise" className="min-h-screen">
        <h1 className="font-bold text-orange flex justify-center text-3xl mt-10">
          Our Expertise
        </h1>
        <p className="font-bold flex justify-center text-base mt-3">
          We work in a wide range of areas including:
        </p>

        <div className="flex flex-row w-full padding  ">
          <div className=" w-1/3 ">
            <div className=" bg-orange rounded-[50px] w-28 h-28 flex items-center justify-center">
              <img src={bulb} alt="" className="w-20 h-20 " />
            </div>
          </div>
          <div className="bg-black w-1/3 h-96 rounded-e-lg rounded-s-[99px]">
            <div className="pl-4 leading-10">
              <p className="text-white text-sm flex items-center pt-14">
                Processes for community empowerment
              </p>
              <p className="text-white text-sm flex items-center">
                Issues of governance – in education, health and forestry
              </p>
              <p className="text-white text-sm flex items-center">
                Organisation development with civil society organisations
              </p>
              <p className="text-white text-sm flex  items-center">
                Working with communities
              </p>
              <p className="text-white text-sm flex items-center">
                Decentralisation
              </p>
              <p className="text-white text-sm flex  items-center">
                Policy analysis and advocacy
              </p>
              <p className="text-white text-sm flex  items-center">
                Poverty and social assessments
              </p>
              <p className="text-white text-sm flex items-center">
                Child labour
              </p>
              <p className="text-white text-sm flex items-center">
                Reproductive health, including HIV/AIDS
              </p>
              <p className="text-white text-sm flex  items-center">
                Gender and development
              </p>
              <p className="text-white text-sm flex items-center">
                Monitoring and evaluation
              </p>
              <p className="text-white text-sm flex items-center">
                Strategic planning
              </p>
            </div>
          </div>
          <div className="bg-gray-200 w-1/3 h-80 rounded-s-lg rounded-e-[99px] mt-7">
            <div className=" text-xs  items-center  pt-5 leading-5">
              <p className="">
                Qualitative research, using participatory rapid appraisal
                (PRA/PLA) approaches among others
              </p>
              <p>
                Quantitative research and methodological approaches using
                advance tools and software’s for analysis
              </p>
              <p>
                Facilitation, using participatory learning and action approaches
                to working with communities and organizations
              </p>
              <p>Facilitation/moderation of workshops and meetings</p>
              <p>
                Training & Capacity Building, using participatory learning
                methodologies
              </p>
              <p>
                Accompanying facilitators and managers of change processes in
                organisations and communities
              </p>
              <p>
                Organisation development – in particular accompanying NGOs and
                other civil society organisations
              </p>
              <p>Managing projects in our areas of work shown above</p>
            </div>
          </div>
          <div className=" ">
            <Button label="More Projects >>>" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
