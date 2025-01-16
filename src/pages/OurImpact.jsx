import React from "react";
import { obuasi } from "../assets/images";
import Tab from "../components/Tab";
import Button from "../components/Button";

const OurImpact = () => {
  return (
    <section
      id="our-impact"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col"
    >
      <div className="mt-14 relative w-full">
        <img src={obuasi} className="w-full h-auto" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <h1 className="font-poppins font-bold text-4xl text-white text-center absolute bottom-20 pl-48">
          Our Impact
        </h1>
      </div>

      <div className="flex flex-col justify-center px-20">
        <p className="text-lg my-10 px-12 font-poppins max-md:text-base max-sm:text-sm max-sm:px-1 max-sm:my-1 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <p className="text-lg mb-10 px-12 font-poppins max-md:text-base max-sm:text-sm max-sm:px-1 max-sm:my-1 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <section id="impact-stories">
        <div className="flex ml-32 mb-10">
          <Tab label="Impact Stories" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  px-32 mb-10 ">
          <div className="w-[450px] h-[200px] bg-orange rounded-lg"></div>

          <p className="font-poppins justify-center items-center text-lg pt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-32 mb-10 ">
          <div className="w-[450px] h-[200px] bg-orange rounded-lg"></div>

          <p className="font-poppins justify-center items-center text-lg pt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="flex-row gap-10 flex justify-center mb-10">
          <div className="mt-10 flex justify-evenly">
            <Button label="1" />
          </div>

          <div className="mt-10 flex justify-evenly">
            <Button label="2" />
          </div>
        </div>
        <div className="w-[600px] h-1 bg-orange  ml-96 mb-10"></div>
      </section>
      <section id="documentaries">
        <div className="flex ml-32 mb-10">
          <Tab label="Documentary" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-32 mb-10 ">
          <div className="w-[450px] h-[200px] bg-orange rounded-lg"></div>

          <p className="font-poppins justify-center items-center text-lg pt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-32 mb-10 ">
          <div className="w-[450px] h-[200px] bg-orange rounded-lg"></div>

          <p className="font-poppins justify-center items-center text-lg pt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="flex-row gap-10 flex justify-center mb-10">
          <div className="mt-10 flex justify-evenly">
            <Button label="1" />
          </div>

          <div className="mt-10 flex justify-evenly">
            <Button label="2" />
          </div>
        </div>
        <div className="w-[600px] h-1 bg-orange  ml-96 mb-10"></div>
      </section>
      <section id="case-studies">
        <div className="flex ml-32 mb-10">
          <Tab label="Case Studies" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-32 mb-10 ">
          <div className="w-[450px] h-[200px] bg-orange rounded-lg"></div>

          <p className="font-poppins justify-center items-center text-lg pt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-32 mb-10 ">
          <div className="w-[450px] h-[200px] bg-orange rounded-lg"></div>

          <p className="font-poppins justify-center items-center text-lg pt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="flex-row gap-10 flex justify-center mb-10">
          <div className="mt-10 flex justify-evenly">
            <Button label="1" />
          </div>

          <div className="mt-10 flex justify-evenly">
            <Button label="2" />
          </div>
        </div>
        <div className="w-[600px] h-1 bg-orange  ml-96 mb-10"></div>
      </section>
    </section>
  );
};

export default OurImpact;
