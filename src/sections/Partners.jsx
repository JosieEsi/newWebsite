// import PartnersCard from "../components/PartnersCard";

import {
  beyond,
  british,
  callund,
  cdd,
  cocoa,
  coram,
  edtech,
  euro,
  slaves,
  gain,
  initial,
  institute,
  ipsos,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  tonys,
  tzedek,
  unicef,
  university,
} from "../assets/images";

// const Partners = () => {
//   return (
//     <section
//       id="partners"
//       className="flex max-container overflow-hidden justify-center"
//     >
//       <div className=" bg-white w-full lg:w-2/3  max-sm:w-full flex flex-col justify-center">
//         <div className="bg-white ml-10 max-sm:ml-0 justify-center ">
//           <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
//             Partners
//           </h3>
//         </div>

//         <div className="flex overflow-hidden group justify-center">
//           <div className="flex animate-loop-scroll space-x-10 group-hover:paused relative">
//             <img src={beyond} alt="" className="w-20 h-20" />
//             <img src={british} alt="" className="w-20 h-20" />
//             <img src={callund} alt="" className="w-20 h-20" />
//             <img src={cdd} alt="" className="w-20 h-20" />
//             <img src={cocoa} alt="" className="w-20 h-20" />
//             <img src={coram} alt="" className="w-20 h-20" />
//             <img src={edtech} alt="" className="w-20 h-20" />
//             <img src={euro} alt="" className="w-20 h-20" />
//             <img src={slaves} alt="" className="w-20 h-20" />
//             <img src={gain} alt="" className="w-20 h-20" />
//             <img src={initial} alt="" className="w-20 h-20" />
//             <img src={ipsos} alt="" className="w-20 h-20" />
//             <img src={institute} alt="" className="w-20 h-20" />
//             <img src={kokoo} alt="" className="w-20 h-20" />
//             <img src={mastercard} alt="" className="w-20 h-20" />
//             <img src={opm} alt="" className="w-20 h-20" />
//             <img src={pandemics} alt="" className="w-20 h-20" />
//             <img src={root} alt="" className="w-20 h-20" />
//             <img src={sabre} alt="" className="w-20 h-20" />
//             <img src={schol} alt="" className="w-20 h-20" />
//             <img src={star} alt="" className="w-20 h-20" />
//             <img src={sustainable} alt="" className="w-20 h-20" />
//             <img src={tonys} alt="" className="w-20 h-20" />
//             <img src={tzedek} alt="" className="w-20 h-20" />
//             <img src={unicef} alt="" className="w-20 h-20" />
//             <img src={university} alt="" className="w-20 h-20" />
//           </div>

//           <div className=" flex animate-loop-scroll space-x-10 group-hover:paused ">
//             <img src={beyond} alt="" className="w-20 h-20" />
//             <img src={british} alt="" className="w-20 h-20" />
//             <img src={callund} alt="" className="w-20 h-20" />
//             <img src={cdd} alt="" className="w-20 h-20" />
//             <img src={cocoa} alt="" className="w-20 h-20" />
//             <img src={coram} alt="" className="w-20 h-20" />
//             <img src={edtech} alt="" className="w-20 h-20" />
//             <img src={euro} alt="" className="w-20 h-20" />
//             <img src={slaves} alt="" className="w-20 h-20" />
//             <img src={gain} alt="" className="w-20 h-20" />
//             <img src={initial} alt="" className="w-20 h-20" />
//             <img src={ipsos} alt="" className="w-20 h-20" />
//             <img src={institute} alt="" className="w-20 h-20" />
//             <img src={kokoo} alt="" className="w-20 h-20" />
//             <img src={mastercard} alt="" className="w-20 h-20" />
//             <img src={opm} alt="" className="w-20 h-20" />
//             <img src={pandemics} alt="" className="w-20 h-20" />
//             <img src={root} alt="" className="w-20 h-20" />
//             <img src={sabre} alt="" className="w-20 h-20" />
//             <img src={schol} alt="" className="w-20 h-20" />
//             <img src={star} alt="" className="w-20 h-20" />
//             <img src={sustainable} alt="" className="w-20 h-20" />
//             <img src={tonys} alt="" className="w-20 h-20" />
//             <img src={tzedek} alt="" className="w-20 h-20" />
//             <img src={unicef} alt="" className="w-20 h-20" />
//             <img src={university} alt="" className="w-20 h-20" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import { partners } from "../constants";

import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { imgURL: beyond, name: "Beyond" },
    { imgURL: british, name: "British" },
    { imgURL: callund, name: "Callund" },
    { imgURL: cdd, name: "CDD" },
    { imgURL: cocoa, name: "Cocoa" },
    { imgURL: coram, name: "Coram" },
    { imgURL: edtech, name: "EdTech" },
    { imgURL: euro, name: "Euro" },
    { imgURL: slaves, name: "Slaves" },
    { imgURL: gain, name: "gAIN" },
    { imgURL: initial, name: "Initial" },
    { imgURL: institute, name: "Institute" },
    { imgURL: ipsos, name: "IPSOS" },
    { imgURL: kokoo, name: "Kokoo" },
    { imgURL: mastercard, name: "Mastercard" },
    { imgURL: opm, name: "OPM" },
    { imgURL: pandemics, name: "Pandemics" },
    { imgURL: root, name: "Root" },
    { imgURL: sabre, name: "Sabre" },
    { imgURL: schol, name: "Schol" },
    { imgURL: star, name: "Star" },
    { imgURL: sustainable, name: "Sustainable" },
    { imgURL: tonys, name: "Tonys" },
    { imgURL: tzedek, name: "Tzedek" },
    { imgURL: unicef, name: "Unicef" },
    { imgURL: university, name: "University" },
  ];

  return (
    <section
      id="partners"
      className="flex max-container overflow-hidden justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="bg-white w-full lg:w-2/3 max-sm:w-full flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white ml-10 max-sm:ml-0 justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
            Partners
          </h3>
        </motion.div>

        <div className="flex overflow-hidden group justify-center py-4">
          <div className="flex animate-loop-scroll space-x-10 group-hover:paused relative">
            {partners.map((partner, index) => (
              <motion.img
                key={index}
                src={partner.imgURL}
                alt={partner.name}
                className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
            ))}
            {partners.map((partner, index) => (
              <motion.img
                key={index + partners.length}
                src={partner.imgURL}
                alt={partner.name}
                className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
