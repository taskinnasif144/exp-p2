"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { customerReview } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

function CustomerReviews() {
  const [selectedId, setSelectedId] = useState(null);
  const parent = useRef();

  function clickLeft() {
    parent.current.scrollBy({ left: -350, behavior: "smooth" });
  }
  function clickRight() {
    parent.current.scrollBy({ left: 350, behavior: "smooth" });
  }

  const handleSelection = (id) => {
    setSelectedId(id);
  };
  console.log(selectedId);
  return (
    <section className="text-center w-[80%] m-auto my-16 relative ">
      <h2 className="text-5xl my-12">What Customers Says about Yimmbs!</h2>
      <div className="flex">
        <button
          onClick={clickLeft}
          className="px-3 mx-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all duration-150">
          <ArrowBackIosIcon />
        </button>
        <div
          ref={parent}
          className="flex flex-row overflow-hidden overflow-x-scroll noScrollBar">
          {customerReview.map((review, index) => (
            <ReviewCard
              key={index + 1}
              customerData={review}
              index={index + 1}
              selectedId={handleSelection}
              animated={false}
            />
          ))}
        </div>
        <button
          onClick={clickRight}
          className="px-3 mx-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all duration-150">
          <ArrowForwardIosIcon />
        </button>
      </div>

      <AnimatePresence>
        {customerReview.map(
          (review, index) =>
            selectedId !== null &&
            selectedId === index + 1 && (
              <ReviewCard
                key={index + 1}
                customerData={review}
                index={index + 1}
                selectedId={handleSelection}
                animated={true}
              />
            )
        )}
      </AnimatePresence>
    </section>
  );
}

export default CustomerReviews;
