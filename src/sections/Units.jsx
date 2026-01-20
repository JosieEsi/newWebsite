// import { image1 } from "../assets/images";
// import { globe } from "../assets/icons";
// import { research } from "../assets/icons";
// import { signal } from "../assets/icons";
// import { finance } from "../assets/icons";

// const Units = () => {
//   return (
//     <section
//       id="units"
//       className="max-container flex items-center justify-center p-4 border-box md:p-2"
//     >
//       <div className="bg-white flex rounded-2xl flex-row lg:w-2/3 justify-between flex-wrap max-sm:grid max-sm:grid-rows-1 max-sm:w-full md:w-full">
//         <div></div>
//         <div className="bg-gray-200 rounded-3xl w-1/2 p-5 h-[400px] mt-10 max-sm:w-full">
//           <h3 className="font-poppins font-bold text-3xl text-ash pb-5">
//             Our Units
//           </h3>
//           <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-4 ">
//             <div className="w-full h-[130px] bg-red relative shadow-lg flex flex-col items-center justify-center">
//               <img
//                 src={globe}
//                 alt="africa"
//                 className="h-10 w-10 flex justify-center"
//               />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Africa</p>
//               </div>
//             </div>
//             <div className="w-full h-[130px] bg-red relative shadow-lg flex flex-col items-center justify-center">
//               <img
//                 src={research}
//                 alt="REL"
//                 className="h-10 w-10 flex justify-center"
//               />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Research, Evaluation & Learning</p>
//               </div>
//             </div>
//             <div className="w-full h-[130px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
//               <img
//                 src={signal}
//                 alt="ACU"
//                 className="h-10 w-10 flex justify-center"
//               />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Communications & Advocacy</p>
//               </div>
//             </div>
//             <div className="w-full h-[130px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
//               <img
//                 src={finance}
//                 alt="F&A"
//                 className="h-10 w-10 flex justify-center"
//               />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Finance & Administration</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/2 flex flex-col md:flex-row max-sm:grid max-sm:grid-rows-1 max-sm:w-full max-sm:mt-10">
//           <img src={image1} alt="Units Image" className="object-fill" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Units;

// import { image1 } from "../assets/images";
// import { globe } from "../assets/icons";
// import { research } from "../assets/icons";
// import { signal } from "../assets/icons";
// import { finance } from "../assets/icons";

// const Units = () => {
//   return (
//     <section
//       id="units"
//       className="max-container flex items-center justify-center p-4 border-box "
//     >
//       <div className="bg-white flex rounded-2xl flex-row w-full justify-between flex-wrap flex-1">
//         <div className="bg-gray-200 rounded-3xl w-full p-5">
//           <h3 className="font-poppins font-bold text-3xl text-ash pb-5">
//             Our Units
//           </h3>
//           <div className="grid grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-4 gap-4">
//             <div className="w-full h-[150px] bg-red relative shadow-lg flex flex-col items-center justify-center">
//               <img src={globe} alt="africa" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Africa</p>
//               </div>
//             </div>
//             <div className="w-full h-[150px] bg-red relative shadow-lg flex flex-col items-center justify-center">
//               <img src={research} alt="REL" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Research, Evaluation & Learning</p>
//               </div>
//             </div>
//             <div className="w-full h-[150px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
//               <img src={signal} alt="ACU" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Communications & Advocacy</p>
//               </div>
//             </div>
//             <div className="w-full h-[150px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
//               <img src={finance} alt="F&A" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Finance & Administration</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="w-1/3 flex justify-center items-center">
//           <img
//             src={image1}
//             alt="Units Image"
//             className="object-cover w-full h-auto rounded-3xl"
//           />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Units;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { image1 } from "../assets/images";
import { globe } from "../assets/icons";
import { research } from "../assets/icons";
import { signal } from "../assets/icons";
import { finance } from "../assets/icons";

const Units = () => {
  const navigate = useNavigate();

  const unitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const units = [
    {
      icon: globe,
      name: "PDA Africa",
      bgColor: "bg-red",
      link: "/pdaafrica",
    },
    {
      icon: research,
      name: "PDA Research, Evaluation & Learning",
      bgColor: "bg-red",
      link: "/teams",
    },
    {
      icon: signal,
      name: "PDA Communications & Advocacy",
      bgColor: "bg-orange",
      link: "/teams",
    },
    {
      icon: finance,
      name: "PDA Finance & Administration",
      bgColor: "bg-orange",
      link: "/teams",
    },
  ];

  return (
    <section
      id="units"
      className="max-container flex items-center justify-center p-4 border-box md:p-2"
    >
      <motion.div
        className="bg-white flex rounded-2xl flex-row lg:w-2/3 justify-between flex-wrap max-sm:grid max-sm:grid-rows-1 max-sm:w-full md:w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div></div>
        <div className="bg-gray-200 rounded-3xl w-full grid grid-cols-2 max-sm:grid-cols-1 lg:h-[400px] md:h-[400px] relative max-sm:h-2/3">
          <div className="bg-gray-200 rounded-3xl w-full p-5 max-sm:w-full lg:h-[400px] md:h-[400px] relative">
            <motion.h3
              className="font-poppins font-bold text-3xl text-ash pb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Units
            </motion.h3>
            <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-4">
              {units.map((unit, index) => (
                <motion.div
                  key={index}
                  className={`w-full h-[130px] ${unit.bgColor} relative shadow-lg flex flex-col items-center justify-center cursor-pointer group`}
                  variants={unitVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  onClick={() => navigate(unit.link)}
                >
                  <motion.img
                    src={unit.icon}
                    alt={unit.name}
                    className="h-10 w-10 flex justify-center transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold transition-colors duration-300 group-hover:bg-gray-50">
                    <p>{unit.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="lg:absolute lg:w-1/2 lg:flex lg:flex-col flex-1 lg:top-[-40px] lg:right-0 md:absolute md:w-1/2 md:flex md:flex-col md:top-[-20px] md:right-0 max-sm:grid max-sm:grid-rows-1 max-sm:w-full max-sm:mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={image1}
              alt="Units Image"
              className="md:h-[450px] lg:h-[500px] rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Units;
