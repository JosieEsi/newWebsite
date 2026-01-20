import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { image2, competition, reading, cluster, fvr, ksw, dpw, } from "../assets/images";
import { arrowLeft, arrowRight } from "../assets/icons";

const Updates = () => {
  const updates = [
    {
      image: dpw,
      title: "Data Protection Workshop with DPC",
      date: "August 8, 2025",
    },
    // {
    //   image: fvr,
    //   title: "Farmers' Voice Radio Academy: Empowering Ghana's Cocoa Farmers Through Participatory Local Language Radio",
    //   date: "December 15, 2025",
    // },
    {
      image: ksw,
      title: "PDA Holds 8th Child Protection Workshop Spotlighting Galamsey's Threat to Children",
      date: "November 27, 2025",
    },
    {
      image: reading,
      title: "CCLP 2025 Annual Quiz Competition",
      date: "December 5, 2025",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section
      id="updates"
      className="max-container flex items-center justify-center"
    >
      <div className="bg-white flex flex-col p-5 shadow-lg lg:w-2/3 max-sm:w-full md:full">
        <h3 className="font-poppins font-bold text-3xl text-ash pb-4 pl-5 max-sm:pl-1">
          UPDATES & EVENTS
        </h3>
        <div className="relative w-full">
          <Slider {...settings}>
            {updates.map((update, index) => (
              <div key={index} className="relative w-full">
                <img
                  src={update.image}
                  alt={update.title}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-black pl-10 max-sm:pl-2 py-4">
                  <p className="text-white font-poppins max-sm:text-xs max-sm:leading-4 text-sm lg:text-lg font-semibold mb-1">
                    {update.date}
                  </p>
                  <p className="text-white font-poppins max-sm:text-[10px] max-sm:leading-3 text-lg lg:text-2xl font-semibold">
                    {update.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Custom arrow components
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:opacity-80"
      onClick={onClick}
    >
      <img
        src={arrowRight}
        alt="Next"
        width={40}
        height={20}
        className="max-sm:w-8 max-sm:h-4"
      />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:opacity-80"
      onClick={onClick}
    >
      <img
        src={arrowLeft}
        alt="Previous"
        width={40}
        height={20}
        className="max-sm:w-8 max-sm:h-4"
      />
    </div>
  );
};

export default Updates;
