// import Button from "../components/Button";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="max-container flex flex-col justify-center min-h-screen gap-10 p-4 border-box bg-hero bg-cover"
//     >
//       <div className="lg:grid lg:grid-cols-2 lg:px-2 xl:grid xl:grid-cols-2 xl:px-2 sm:flex sm:justify-end md:flex">
//         <div></div>
//         <div>
//           <h1 className="font-poppins font-bold lg:text-6xl text-white sm:text-5xl sm:px-5 ">
//             Everyone Matters
//           </h1>
//           <p className="py-5 lg:pr-[16rem] sm:px-5 text-white text-xl font-poppins">
//             Participatory Development Associates (PDA), is a social development,
//             project management and advisory organisation that is based in Ghana
//             and works across Sub-Saharan Africa
//           </p>
//           <a className="sm:pl-5" href="./">
//             <Button label="READ MORE" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end lg:justify-center bg-cover bg-left top-20 h-[500px] wide:h-[800px] "
    >
      <video
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 "
        poster="/assets/images/hero.png"
      >
        <source src="/assets/video/pdaSlider.mp4" type="video/mp4" />
        <source src="/assets/video/pdaSlider.webm" type="video/webm" />
      </video>
      <div className="lg:grid lg:grid-cols-2 lg:px-2 xl:grid xl:grid-cols-2 xl:px-2 sm:flex sm:flex-col sm:justify-end sm:h-full p-4">
        <div></div>
        <div className="p-5 max-sm:pb-10 text-white ">
          <h1 className="font-poppins font-bold lg:text-7xl max-sm:text-4xl md:text-6xl pl-3 lg:pr-15">
            Everyone Matters
          </h1>
          <p className="py-5 lg:pr-[9rem] sm:px-4 text-xl max-sm:text-sm font-poppins">
            Participatory Development Associates (PDA), is a social development,
            project management and advisory organisation that is based in Ghana
            and works across Sub-Saharan Africa.
          </p>
          <a className="sm:pl-5" href="./">
            <Button label="READ MORE" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
