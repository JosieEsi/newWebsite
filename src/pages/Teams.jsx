// import React from "react";
// import { globe } from "../assets/icons";
// import { research } from "../assets/icons";
// import { signal } from "../assets/icons";
// import { finance } from "../assets/icons";
// import Button from "../components/Button";
// import { relteam, acuteam, africateam1 } from "../assets/images";

// const Teams = () => {
//   return (
//     <section id="teams" className="max-container w-full min-h-screen">
//       <div className="mt-28">
//         <div className="bg-orange h-24 w-24 rounded-3xl ml-20 ">
//           <img
//             src={globe}
//             alt=""
//             className="w-16 h-16 flex justify-center align-middle items-center"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Teams;

import React from "react";
import { globe, research, signal, finance } from "../assets/icons";
import Button from "../components/Button";
import { relteam, acuteam, africateam1 } from "../assets/images";
import Tab from "../components/Tab";

const Teams = () => {
  return (
    <section
      id="teams"
      className="max-container max-w-full w-full min-h-screen flex justify-center items-center flex-col mb-20"
    >
      {/* PDA Africa Team */}
      <div className="mt-28 flex flex-col ">
        <div className=" text-left ml-32">
          <h3 className="text-orange font-bold text-3xl mb-2  ">PDA AFRICA</h3>
        </div>
        <div className=" flex flex-col md:flex-row gap-8">
          {/* Icon Section */}
          <div className="bg-orange h-24 w-24 rounded-3xl flex items-center justify-center">
            <img src={globe} alt="Globe icon" className="w-16 h-16 " />
          </div>
          {/* Text and Image Section */}
          <div className="flex flex-col   bg-zinc-50 shadow-lg  rounded-3xl w-full max-w-4xl max-md:max-w-3xl max-sm:max-w-2xl">
            <img
              src={africateam1}
              alt="PDA Africa Team"
              className="w-full object-fill "
            />
            <p className="text-lg my-10 px-12 font-poppins max-md:text-base max-sm:text-sm max-sm:px-1 max-sm:my-1 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="/pdaafrica">
              <div className="mb-10 flex justify-end mr-10">
                <Button label="Read More" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* PDA Research Evaluation & Learning Team */}
      <div className="mt-28 flex flex-col ">
        <div className=" text-left ml-32 max-sm:ml-10 ">
          <h3 className="text-orange font-bold text-3xl mb-2 max-sm:mb-0 max:sm ">
            PDA RESEARCH EVALUATION & LEARNING
          </h3>
        </div>
        <div className=" flex flex-col md:flex-row gap-8">
          {/* Icon Section */}
          <div className="bg-orange h-24 w-24 max-sm:h-16 max-sm:w-16 rounded-3xl flex items-center justify-center">
            <img
              src={research}
              alt="Research icon"
              className="w-16 h-16 max-sm:w-10 max-sm:h-10"
            />
          </div>
          {/* Text and Image Section */}
          <div className="flex flex-col   bg-zinc-50 shadow-lg  rounded-3xl w-full max-w-4xl max-md:max-w-3xl max-sm:max-w-2xl">
            <img
              src={relteam}
              alt="PDA REL Team"
              className="w-full object-fill"
            />
            <p className="text-lg my-10 px-12 font-poppins max-md:text-base max-sm:text-sm max-sm:px-1 max-sm:my-1 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="">
              <div className="mb-10 flex justify-end mr-10">
                <Button label="Read More" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* PDA Communication & Advocacy Team */}
      <div className="mt-28 flex flex-col ">
        <div className=" text-left ml-32">
          <h3 className="text-orange font-bold text-3xl mb-2  ">
            PDA COMMUNICATION & ADVOCACY
          </h3>
        </div>
        <div className=" flex flex-col md:flex-row gap-8">
          {/* Icon Section */}
          <div className="bg-orange h-24 w-24 rounded-3xl flex items-center justify-center">
            <img src={signal} alt="Signal icon" className="w-16 h-16 " />
          </div>
          {/* Text and Image Section */}
          <div className="flex flex-col   bg-zinc-50 shadow-lg  rounded-3xl w-full max-w-4xl max-md:max-w-3xl max-sm:max-w-2xl">
            <img
              src={acuteam}
              alt="PDA ACU Team"
              className="w-full object-fill "
            />
            <p className="text-lg my-10 px-12 font-poppins max-md:text-base max-sm:text-sm max-sm:px-1 max-sm:my-1 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mb-10 flex justify-end mr-10">
              <Button label="Read More" />
            </div>
          </div>
        </div>
      </div>

      {/* PDA Finance & Administration Team */}
      <div className="mt-28 flex flex-col ">
        <div className=" text-left ml-32">
          <h3 className="text-orange font-bold text-3xl mb-2  ">
            PDA FINANCE & ADMINISTRATION{" "}
          </h3>
        </div>
        <div className=" flex flex-col md:flex-row gap-8">
          {/* Icon Section */}
          <div className="bg-orange h-24 w-24 rounded-3xl flex items-center justify-center">
            <img src={finance} alt="Globe icon" className="w-16 h-16 " />
          </div>
          {/* Text and Image Section */}
          <div className="flex flex-col   bg-zinc-50 shadow-lg  rounded-3xl w-full max-w-4xl max-md:max-w-3xl max-sm:max-w-2xl">
            <img
              src={africateam1}
              alt="PDA Finance Team"
              className="w-full object-fill "
            />
            <p className="text-lg my-10 px-12 font-poppins max-md:text-base max-sm:text-sm max-sm:px-1 max-sm:my-1 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="">
              <div className="mb-10 flex justify-end mr-10">
                <Button label="Read More" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-row gap-40 flex">
        <div className="mt-20 flex justify-evenly">
          <Tab label="Board Profile" />
        </div>

        <div className="mt-20 flex justify-evenly">
          <Tab label="Staff Profile" />
        </div>
      </div>
    </section>
  );
};

export default Teams;
