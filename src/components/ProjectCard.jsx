// import { motion } from "framer-motion";

// const ProjectCard = ({ imgURL, label, subtext, button, link }) => {
//   return (
//     // <motion.div
//     //   className="flex-1 sm:w-[300px] sm:min-w-[300px] max-md:w-[300px] lg:w-[350px] shadow-3xl flex-grow-0"
//     //   initial={{ opacity: 0, y: 20 }}
//     //   animate={{ opacity: 1, y: 0 }}
//     //   transition={{ duration: 0.5 }}
//     // >
//     <div className="flex-1 sm:w-[300px] sm:min-w-[300px] max-md:w-[300px] lg:w-[300px] shadow-3xl  flex-grow-0 max-sm:flex-grow bg-white">
//       <div className="flex w-auto h-1/3 flex-1">
//         <img src={imgURL} alt={label} width={500} height={500} />
//       </div>
//       <div className="px-10 py-10 ">
//         <a href={link}>
//           <h3 className="mt-5 font-poppins text-3xl leading-normal font-bold hover:text-orange ">
//             {label}
//           </h3>
//         </a>
//         <p className="mt-3 break-words font-poppins text-lg leading-normal text-slate-gray">
//           {subtext}
//         </p>
//         <a href={link}>
//           <button className="justify-center items-center rounded-xl px-7 py-4 mt-3 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-2 hover:scale-110 ">
//             {button}
//           </button>
//         </a>
//       </div>
//     </div>
//     // </motion.div>
//   );
// };

// export default ProjectCard;

import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="relative bg-white rounded-xl overflow-hidden shadow-lg group"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h4 className="font-bold text-gray-800">{project.title}</h4>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-6 text-center">
        <p className="text-white text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
