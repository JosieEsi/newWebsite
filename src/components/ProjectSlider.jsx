import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    image: "/path-to-image/vsla-child.jpg",
    title: "VSLA CHILD",
  },
  {
    image: "/path-to-image/midline-impact.jpg",
    title: "Midline Impact Evaluation",
  },
  {
    image: "/path-to-image/ipo-baseline.jpg",
    title: "IPO Baseline Assessment",
  },
];

const ProjectSlider = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-60">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProjectSlider;
