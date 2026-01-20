// import { pdf } from "../assets/icons";
// import Button from "../components/Button";
// import Tab from "../components/Tab";
// import { paper } from "../assets/icons";

// const Publications = () => {
//   return (
//     <section id="units" className="max-container flex font-poppins">
//       <div className="bg-white h-[500px] grid rounded-3xl w-full ">
//         <h3 className="font-poppins font-bold text-3xl text-ash pt-6 px-10">
//           Publications
//         </h3>
//         <div className="flex text-xl max-sm:text-sm justify-items-center justify-evenly ">
//           <img
//             className="max-sm:w-14 max-sm:h-14"
//             src={paper}
//             alt="pdf"
//             width={70}
//             height={100}
//           />
//           <div className="lg:w-[600px] md:w-[400px] max-sm:w-[200px]">
//             <span className="font-semibold items-center flex">
//               Business Formalization in Ghana's Construction Industry
//             </span>
//             <div className="bg-orange h-0.5 w-full mt-10 flex items-center justify-center"></div>
//           </div>
//           <a href="./">
//             <Button
//               label="View file"
//               className="flex items-center justify-center"
//             />
//           </a>
//         </div>
//         <div className="flex text-xl max-sm:text-sm justify-items-center justify-evenly ">
//           <img
//             className="max-sm:w-14 max-sm:h-14"
//             src={paper}
//             alt=""
//             width={70}
//             height={100}
//           />
//           <div className="lg:w-[600px] md:w-[400px] max-sm:w-[200px]">
//             <span className="font-semibold items-center flex">
//               Understanding Vulnerability and Exclusion in Ghana November 2022
//             </span>
//             <div className="bg-orange h-0.5 w-full mt-10 flex items-center justify-center"></div>
//           </div>
//           <a href="./">
//             <Button
//               label="View file"
//               className="flex items-center justify-center"
//             />
//           </a>
//         </div>
//         <div className="flex text-xl max-sm:text-sm justify-items-center justify-evenly ">
//           <img
//             className="max-sm:w-14 max-sm:h-14"
//             src={paper}
//             alt=""
//             width={70}
//             height={100}
//           />
//           <div className="lg:w-[600px] md:w-[400px] max-sm:w-[200px]">
//             <span className="font-semibold items-center flex">
//               Voices and Evidence from End-Users of the GLTV and GLRRP Remote
//               Learning Programme in Ghana
//             </span>
//             <div className="bg-orange h-0.5 w-full mt-10 flex items-center justify-center"></div>
//           </div>
//           <a href="./">
//             <Button
//               label="View file"
//               className="flex items-center justify-center"
//             />
//           </a>
//         </div>

//         <div className="flex justify-center">
//           <a href="./">
//             <Tab label="MORE PUBLICATIONS" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Publications;

import { motion } from "framer-motion";
import { pdf } from "../assets/icons";
import Button from "../components/Button";
import Tab from "../components/Tab";
import { paper } from "../assets/icons";

const Publications = () => {
  return (
    <section
      id="publications"
      className="max-container flex lg:justify-center font-poppins"
    >
      <div className="bg-white h-auto grid rounded-3xl w-full lg:w-2/3 p-6">
        <h3 className="font-poppins font-bold text-3xl text-ash mb-6">
          Publications
        </h3>
        <div className="space-y-6 lg:space-y-10">
          <div className="flex items-center text-xl max-sm:text-sm justify-between space-x-4">
            <img
              className="w-16 h-16 max-sm:w-12 max-sm:h-12"
              src={paper}
              alt="pdf"
            />
            <div className="flex-1 justify-center">
              <span className="font-semibold">
                Business Formalization in Ghana's Construction Industry
              </span>
              <div className="bg-orange h-0.5 w-full mt-2"></div>
            </div>
            <a href="./">
              <Button
                label="View file"
                className="flex items-center justify-center"
              />
            </a>
          </div>
          <div className="flex items-center text-xl max-sm:text-sm justify-between space-x-4">
            <img
              className="w-16 h-16 max-sm:w-12 max-sm:h-12"
              src={paper}
              alt=""
            />
            <div className="flex-1">
              <span className="font-semibold">
                Understanding Vulnerability and Exclusion in Ghana November 2022
              </span>
              <div className="bg-orange h-0.5 w-full mt-2"></div>
            </div>
            <a href="./">
              <Button
                label="View file"
                className="flex items-center justify-center"
              />
            </a>
          </div>
          <div className="flex items-center text-xl max-sm:text-sm justify-between space-x-4">
            <img
              className="w-16 h-16 max-sm:w-12 max-sm:h-12"
              src={paper}
              alt=""
            />
            <div className="flex-1">
              <span className="font-semibold">
                Voices and Evidence from End-Users of the GLTV and GLRRP Remote
                Learning Programme in Ghana
              </span>
              <div className="bg-orange h-0.5 w-full mt-2"></div>
            </div>
            <a href="./">
              <Button
                label="View file"
                className="flex items-center justify-center"
              />
            </a>
          </div>
        </div>
        <motion.div
          className="flex justify-center mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/publications" onClick={(e) => { e.preventDefault(); window.location.href = "/publications"; }}>
            <Tab label="MORE PUBLICATIONS" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
