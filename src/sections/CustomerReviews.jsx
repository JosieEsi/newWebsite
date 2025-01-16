import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import React, { useState, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";

const CustomerReviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle adding/removing overflow-hidden class to body
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up function to ensure no leftover class
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  // Function to handle modal opening and closing
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="max-container justify-center px-4" id="testimonials">
      <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
        Testimonials
      </h2>
      <h3 className="font-poppins text-center text-4xl font-bold">
        Our
        <span className="text-orange"> Impact </span>
        on Community
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text font-poppins">
        Hear genuine stories from our benefactors and volunteers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            position={review.position}
            feedback={review.feedback}
          />
        ))}
      </div>

      {/* Banner */}
      <div className="flex justify-center mt-10">
        <button
          className="bg-orange text-white py-4 px-6 rounded-lg hover:scale-110 text-lg font-poppins"
          onClick={openModal}
        >
          Leave a review
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative max-h-screen overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <ReviewForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerReviews;
