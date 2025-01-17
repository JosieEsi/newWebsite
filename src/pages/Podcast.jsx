import React from "react";
import { pic, micro, vid } from "../assets/icons";
import { podpic } from "../assets/images";
import NewButton from "../components/NewButton";
import Button from "../components/Button";

const Podcast = () => {
  return (
    <section
      id="podcast"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins"
    >
      <div className="relative w-full">
        <img src={podpic} className="w-full h-[400px]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="flex mt-20 mx-44 justify-between">
        <h1 className="font-poppins font-bold text-4xl text-orange">Podcast</h1>
        <div className="gap-5 flex flex-row">
          <div className="w-20 h-20 bg-red justify-center flex items-center">
            <img src={micro} alt="" className="w-10 h-10" />
          </div>
          <div className="w-20 h-20 bg-red justify-center flex items-center">
            <img src={pic} alt="" className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div className="w-9/12 h-24 bg-orange self-center mt-3 mb-5 pt-0.5">
        {/* <div className="w-20 h-20 bg-white rounded-full  mt-5 justify-center flex items-center"> */}
        <img src={vid} alt="" className="w-16 h-16 ml-10 mt-5" />
      </div>

      <div className="w-9/12 h-40 bg-zinc-200 font-poppins self-center mt-3 mb-5 pt-0.5">
        {/* <div className="w-20 h-20 bg-white rounded-full  mt-5 justify-center flex items-center"> */}
        <p className="text-sm text-black ml-10 mt-5 mb-5">Where to listen</p>
        <div className="flex justify-between font-bold text-lg text-black text-left ml-10 mr-10">
          <span>Apple Podcasts</span>
          <span>Spotify</span>
          <span>Soundcloud</span>
          <span>Google Podcast</span>
        </div>
        <div className="flex justify-between italic text-lg text-black gap-10 text-left ml-10 mr-10">
          <span>Subscribe</span>
          <span>Subscribe</span>
          <span>Subscribe</span>
          <span>Subscribe</span>
        </div>
        <p className="text-sm italic text-black ml-10 mt-5">
          Or search for us in your usual podcast provider
        </p>
      </div>

      <div className="w-8/12 h-24 bg-white font-poppins mt-3 pt-0.5 self-center">
        <div className="ml-10 mr-10 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p>April 2020</p>
            <p>PDA Report/Concept Note</p>
          </div>
          <div className="col-span-2">
            <span className="font-bold">
              Youth Futures 2024 Youth Manifesto Dialogues
            </span>
          </div>
        </div>
      </div>
      <div className="w-8/12 h-24 bg-zinc-200 font-poppins   pt-0.5 self-center">
        <div className="ml-10 mr-10 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p>March 2024</p>
            <p>PDA Publication</p>
          </div>
          <div className="col-span-2">
            <span className="font-bold">
              Business Formalization in Ghana's Construction Industry
            </span>
          </div>
        </div>
      </div>
      <div className="w-8/12 h-24 bg-white font-poppins   pt-0.5 self-center">
        <div className="ml-10 mr-10 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p>June 2024</p>
            <p>Opinion Paper</p>
          </div>
          <div className="col-span-2">
            <span className="font-bold">
              Unpacking locally led research and evaluation through the lens of
              collaborative autoethnography
            </span>
          </div>
        </div>
      </div>
      <div className="w-8/12 h-24 bg-zinc-200 font-poppins   pt-0.5 self-center">
        <div className="ml-10 mr-10 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p>July 2024</p>
            <p>Policy Brief</p>
          </div>
          <div className="col-span-2">
            <span className="font-bold">
              Evaluating How Root Capital's Client Businesses Impact Smallholder
              Lvelihoods: Oil Palm in Ghana
            </span>
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
      <div className="w-[600px] h-1 bg-orange self-center mb-10"></div>

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

export default Podcast;
