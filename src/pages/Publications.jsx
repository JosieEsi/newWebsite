import React from "react";
import { pic, micro, vid } from "../assets/icons";
import { yfutures, business, publication, glasses } from "../assets/images";
import Button from "../components/Button";
import BookSlider from "../components/BookSlider";
import FilterableTable from "../components/FilterableTable";
//import NewButton from "../components/NewButton";

const Publications = () => {
  return (
    <section
      id="publications"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins"
    >
      <div className="relative w-full">
        <img src={glasses} className="w-full h-[400px]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="flex mt-20 mx-44 justify-between">
        <h1 className="font-poppins font-bold text-4xl text-orange">
          Publications
        </h1>
        <div className="gap-5 flex flex-row">
          <div className="w-20 h-20 bg-red justify-center flex items-center">
            <img src={micro} alt="" className="w-10 h-10" />
          </div>
          <div className="w-20 h-20 bg-red justify-center flex items-center">
            <img src={pic} alt="" className="w-10 h-10" />
          </div>
          <div className="w-20 h-20 bg-red justify-center flex items-center">
            <img src={vid} alt="" className="w-10 h-10" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center pl-40 pr-40 mt-10 mb-10">
        <div className="bg-orange w-[400px] h-[500px]">
          <img src={publication} alt="" className="p-3" />
        </div>
        <div>
          <h1 className="font-bold text-3xl">2023 IN REVIEW:</h1>
          <h2 className="text-2xl">Our Impact</h2>
          <div className="w-[50px] h-1 bg-orange  mb-5 mt-3"></div>
          <h3 className="mb-3">January, 2024</h3>
          <div className="mb-10">
            <Button label="Download >>>" />
          </div>
          <div className=" bg-gray-300 h-48 w-[500px] p-5">
            <p>
              Participatory Development Associates (PDA) is a social development
              and consultancy organization in Ghana that supports development
              processes at community, district, national, regional and
              institutional levels towards creating a fairer word where all
            </p>
          </div>
        </div>
        <div className="w-[1000px] h-1 bg-orange  mb-5 mt-8"></div>
      </div>

      <BookSlider />
      <FilterableTable />

      <div className="w-9/12 h-60 bg-zinc-200 font-poppins self-center mt-3 mb-5 pt-0.5">
        <div className="grid grid-cols-2 mt-5 mb-5 text-left align-middle ml-10 mr-10">
          <div>
            <span className="font-bold">SUBSCRIBE TO OUR NEWSLETTERS</span>
          </div>
          <div classname="flex flex-col p-4">
            <p className="font-bold mb-3">
              Stay up to date with PDA research, insights and events on your
              topics of interest
            </p>
            <p className="mb-3 ">
              We only use your email address to send you the newsletter and to
              see how many people are opening our emails. Please read our full
              privacy policy
            </p>
            <NewButton label="SIGN UP TODAY" className="mb-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
