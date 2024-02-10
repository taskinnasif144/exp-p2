"use client";

import React, { useEffect, useRef, useState } from "react";
import DraggableServices from "./DraggableServices";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function ForHome({ title, array }) {
  const parent = useRef();

  function clickLeft() {
    parent.current.scrollBy({ left: -350, behavior: "smooth" });
  }
  function clickRight() {
    parent.current.scrollBy({ left: 350, behavior: "smooth" });
  }
  return (
    <div className=" p-8 sm:px-20 sm:py-10 my-12">
      <h3 className="text-[35px] mb-4"> {title}</h3>
      <div className="relative">
        <div
          className="flex overflow-hidden overflow-x-scroll noScrollBar flex-nowrap"
          ref={parent}>
          {array.map((service, index) => {
            return (
              <div key={index}>
                <DraggableServices title={service.title} path={service.path} />
              </div>
            );
          })}
        </div>
        <button
          className="absolute left-0 top-[35%] translate-x-[-50px]  bg-gray-500 p-2 rounded-full hover:bg-gray-400"
          onClick={clickLeft}>
          <ChevronLeftIcon />
        </button>
        <button
          className="absolute right-0 top-[35%] translate-x-[50px]  bg-gray-500 p-2 rounded-full hover:bg-gray-400"
          onClick={clickRight}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default ForHome;
