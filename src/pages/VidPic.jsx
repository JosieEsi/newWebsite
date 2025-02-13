import React from "react";
import { kodu } from "../assets/images";
import { pic, micro, vid } from "../assets/icons";
import Button from "../components/Button";
import Tab from "../components/Tab";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
  rand10,
  rand11,
  rand12,
  rand13,
  rand14,
  rand15,
  rand16,
  rand17,
  rand18,
} from "../assets/images";

const VidPic = () => {
  const albums = [
    {
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand1,
      title: "Field Trip_February 2020",
      count: 50,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand2,
      title: "Farmer Voice Radio",
      count: 204,
    },
    {
      url: "https://photos.app.goo.gl/zMscdv8XuBUzQUQq7",
      img: rand3,
      title: "VSLA/GALS Learning Meeting, Bekwai",
      count: 48,
    },
    {
      url: "https://photos.app.goo.gl/8nudMZcdbmGX4Fmw5",
      img: rand4,
      title: "World Day Against Child Labour (Nyonkopa)",
      count: 15,
    },
    {
      url: "https://photos.app.goo.gl/A8eQU7bW2JrMxBUD9",
      img: rand5,
      title: "Cocoa Commuinities Library Project",
      count: 32,
    },
    {
      url: "https://photos.app.goo.gl/qzQQjUfwSvGEZPhv7",
      img: rand6,
      title: "(The Launch) Cocoa Communities Library Project",
      count: 98,
    },
    {
      url: "https://photos.app.goo.gl/8WtHfaQcPRaoTbSMA",
      img: rand7,
      title: "CCLP LAUNCH",
      count: 27,
    },
    {
      url: "https://photos.app.goo.gl/hoCJmrYiGjDmib7g8",
      img: rand8,
      title: "CCLP Quiz Wednesday",
      count: 92,
    },
    // {
    //   url: "https://photos.app.goo.gl/yvz4vzEna5fhph3d6",
    //   img: rand9,
    //   title: "CCLP ANNUAL READING FESTIVAL 2023",
    //   count: 116,
    // },
    // {
    //   url: "https://photos.app.goo.gl/TgPZbRx91FNrVoHi6",
    //   img: rand10,
    //   title: "CCLP_February 2024 MONITORING",
    //   count: 121,
    // },
    // {
    //   url: "https://photos.app.goo.gl/gN9Y9xoRqAHsm6TH7",
    //   img: rand11,
    //   title: "MANKRANSO SCHOOL B Reading Club launch",
    //   count: 20,
    // },
    // {
    //   url: "https://photos.app.goo.gl/TFeFg8hEAYtG8GGh6",
    //   img: rand12,
    //   title:
    //     "2nd Cluster Level Reading Competition 2024 (Ahafo Ano South East and West)",
    //   count: 250,
    // },
    // {
    //   url: "https://photos.app.goo.gl/nFod4YH6L7Kcr4A98",
    //   img: rand13,
    //   title: "2nd Annual Reading Festival 2024",
    //   count: 170,
    // },
    // {
    //   url: "https://photos.app.goo.gl/k7bvevAG8wvhg9ym7",
    //   img: rand14,
    //   title: "Cluster Library Day at Asuadei",
    //   count: 160,
    // },
    // {
    //   url: "https://photos.app.goo.gl/inpesJkwkYNsHFhj7",
    //   img: rand15,
    //   title: "Cluster Library Day at Boatengkrom",
    //   count: 176,
    // },
    // {
    //   url: "https://photos.app.goo.gl/w6H3DR2PY3kdHzpdA",
    //   img: rand16,
    //   title: "2nd Cluster Library Day @ Asuadei",
    //   count: 53,
    // },
    // {
    //   url: "https://photos.app.goo.gl/EFpdQYXkPXEqZ9rq5",
    //   img: rand17,
    //   title: "2nd Cluster Library Day @ Boatengkrom",
    //   count: 116,
    // },
    // {
    //   url: "https://photos.app.goo.gl/cYe3GkajXRf1VfdF8",
    //   img: rand18,
    //   title: "Nyonko Pa Child Labour Remediation Project",
    //   count: 203,
    // },

    // Add more album links here, following the same structure.
  ];

  const videos = [
    {
      id: "61QUHKQ4ECc",
      title: "Knowledge Sharing Workshop on Child Protection",
    },
    { id: "6VhatIeDRpo", title: "Video 2" },
    { id: "5r9aOmU0mWI", title: "Video 3" },
    { id: "61QUHKQ4ECc", title: "Video 4" },
    { id: "5r9aOmU0mWI", title: "Video 5" },
  ];
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
        {/* Orange Video Section */}
        <div className="w-9/12 h-24 bg-orange mx-auto mt-3 mb-5 flex items-center">
          <img src={vid} alt="Video Icon" className="w-16 h-16 ml-10" />
        </div>

        {/* Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pr-32 pl-44 mb-5">
          {/* Main Video */}
          <div className="flex flex-col gap-10">
            <div className="w-[480px] h-[320px] rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[0].id}`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* <Tab label={videos[0].title} /> */}
            <div className="justify-center items-center pl-7 pr-0 py-4 font-poppins text-base leading-none bg-orange text-white rounded-xl w-auto ">
              {videos[0].title}
            </div>
          </div>
          {/* Smaller Videos */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-2 grid-rows-2 gap-5 mr-20">
              {videos.slice(1).map((video) => (
                <iframe
                  key={video.id}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="rounded-lg overflow-hidden"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ))}
            </div>

            {/* Watch All Videos Button */}
            <div className="flex justify-end">
              <a
                href="https://www.youtube.com/@pdatv3656/playlists"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button label="Watch All Videos >>>" className="w-1/3" />
              </a>
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

        <div className="grid lg:grid-cols-4 grid-cols-4 max-w-7xl max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 px-32 mb-5 gap-10 ml-8 mr-20">
          {albums.map((album, index) => (
            <a
              key={index}
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <img
                src={album.img}
                alt={album.title}
                className="w-full h-48  object-cover rounded-lg"
              />
              <p className="mt-2 font-poppins text-[12px] text-left">
                {album.title}
              </p>
              <p className="text-xs text-gray-500 text-left">
                {album.count} items
              </p>
            </a>
          ))}
        </div>
        {/* <div className="grid grid-cols-4  px-32 mb-5 gap-10 ml-8 mr-20 ">
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
        </div> */}

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
