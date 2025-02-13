import React from "react";
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
  },
  {
    image: business,
    title: "Business Formalization in Ghana’s Construction Industry",
    date: "March 2024",
  },
  {
    image: vulnerability,
    title: "Understanding Vulnerability and Exclusion in Ghana",
    date: "June 2024",
  },
  {
    image: youthhealth,
    title: "The State of Youth Health in Ghana’s Construction Industry",
    date: "September 2024",
  },
];

const BookSlider = () => {
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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="slide">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="title">{book.title}</h3>
            <div className="w-[50px] h-1 bg-gray-300  mb-5 mt-3"></div>
            <p className="date">{book.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
