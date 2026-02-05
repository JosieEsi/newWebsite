import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  yfutures,
  business,
  publication,
  youthhealth,
  vulnerability,
} from "../assets/images";

const books = [
  {
    image: yfutures,
    title: "YouthFutures 2024 Youth Manifesto Dialogues",
    date: "April 2024",
    pdfPath: "/assets/documents/YouthFutures-2024-Youth-Manifesto-Dialogues.pdf",
  },
  {
    image: business,
    title: "Business Formalization in Ghana's Construction Industry",
    date: "March 2024",
    pdfPath: "/assets/documents/Business-Formalization-in-Ghanas-Construction-Sector.pdf",
  },
  {
    image: vulnerability,
    title: "Understanding Vulnerability and Exclusion in Ghana",
    date: "June 2024",
    pdfPath: "/assets/documents/Understanding_Vulnerability_and_Exclusion_in_Ghana_November_2022.pdf",
  },
  {
    image: youthhealth,
    title: "The State of Youth Health in Ghana’s Construction Industry",
    date: "April 2021",
    pdfPath: "/assets/documents/The_state_of_youth_health_in_GhanaYs_construction_industry_3.pdf",
  },
  // {
  //   image: vulnerability,
  //   title: "Voices and Evidence from End-Users of the GLTV and GLRRP Remote Learning Programme in Ghana",
  //   date: "June 2024",
  //   pdfPath: "/assets/documents/Voices-and-Evidence-from-End-Users-of-the-GLTV-and-GLRRP.pdf",
  // },

 
  
];

const BookSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev "> ◀</button>,
    nextArrow: <button className="slick-next">▶</button>,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleBookClick = (book) => {
    const encodedPath = encodeURIComponent(book.pdfPath);
    navigate(`/publication-viewer?pdf=${encodedPath}&title=${encodeURIComponent(book.title)}`);
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.map((book, index) => (
          <div 
            key={index} 
            className="slide cursor-pointer group"
            onClick={() => handleBookClick(book)}
          >
            <div className="relative">
              <img 
                src={book.image} 
                alt={book.title} 
                className="book-image transition-all duration-300 group-hover:opacity-80 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
            </div>
            <h3 className="title group-hover:text-orange transition-colors duration-300">{book.title}</h3>
            <div className="w-[50px] h-1 bg-gray-300 mb-5 mt-3 group-hover:bg-orange transition-colors duration-300"></div>
            <p className="date">{book.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
