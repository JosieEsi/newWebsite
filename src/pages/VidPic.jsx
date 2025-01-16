import React from "react";
import { kodu } from "../assets/images";
import { pic, micro, vid } from "../assets/icons";
import Button from "../components/Button";
import Tab from "../components/Tab";

const VidPic = () => {
  return (
    <section
      id="vidpic"
      className="max-container max-w-full w-full min-h-screen justify-center flex flex-col font-poppins"
    >
      <div className="relative w-full">
        <img src={kodu} className="w-full h-[400px]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <section id="">
        <div className="flex mt-20 mx-44 justify-between">
          <h1 className="font-poppins font-bold text-4xl text-orange">
            Videos
          </h1>
          <div className="gap-5 flex flex-row">
            <div className="w-20 h-20 bg-red justify-center flex items-center">
              <img src={micro} alt="" className="w-10 h-10" />
            </div>
            <div className="w-20 h-20 bg-red justify-center flex items-center">
              <img src={pic} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="w-9/12 h-24 bg-orange ml-40 mt-3 mb-5 pt-0.5">
          {/* <div className="w-20 h-20 bg-white rounded-full  mt-5 justify-center flex items-center"> */}
          <img src={vid} alt="" className="w-16 h-16 ml-10 mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 px-32 mb-5 gap-20 ml-8  ">
          <div className="flex flex-col gap-10">
            <div className="w-[550px] h-[200px] bg-orange rounded-lg"></div>
            <Tab label="Knowledge Sharing Workshop on Child Protection" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-2 grid-rows-2 gap-5 mr-20">
              <div className="w-[200px] h-[100px] bg-orange rounded-lg"></div>
              <div className="w-[200px] h-[100px] bg-orange rounded-lg"></div>
              <div className="w-[200px] h-[100px] bg-orange rounded-lg"></div>
              <div className="w-[200px] h-[100px] bg-orange rounded-lg"></div>
            </div>
            <div className="flex justify-end">
              <Button label="Watch All Videos >>>" className="w-1/3" />
            </div>
          </div>
        </div>

        <div className="flex-row gap-10 flex justify-center mb-10">
          <div className="mt-10 flex justify-evenly">
            <Button label="1" />
          </div>

          <div className="mt-10 flex justify-evenly">
            <Button label="2" />
          </div>
        </div>
      </section>

      <section id="">
        <div className="flex mt-20 mx-44 justify-between">
          <h1 className="font-poppins font-bold text-4xl text-orange">
            Pictures
          </h1>
          <div className="gap-5 flex flex-row">
            <div className="w-20 h-20 bg-red justify-center flex items-center">
              <img src={micro} alt="" className="w-10 h-10" />
            </div>
            <div className="w-20 h-20 bg-red justify-center flex items-center">
              <img src={vid} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="w-9/12 h-24 bg-orange ml-40 mt-3 mb-5 pt-1">
          {/* <div className="w-20 h-20 bg-white rounded-full  mt-5 justify-center flex items-center"> */}
          <img src={pic} alt="" className="w-16 h-16 ml-10 mt-5 " />
        </div>

        <div className="grid grid-cols-4  px-32 mb-5 gap-10 ml-8 mr-20 ">
          <div className="w-[200px] h-[200px] bg-orange rounded-lg">
            <img src="" alt="" />
            <p>Chris sending off</p>
            <p>40 views</p>
          </div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
          <div className="w-[200px] h-[200px] bg-orange rounded-lg"></div>
        </div>

        <div className="flex-row gap-10 flex justify-center mb-10">
          <div className="mt-10 flex justify-evenly">
            <Button label="1" />
          </div>

          <div className="mt-10 flex justify-evenly">
            <Button label="2" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default VidPic;
