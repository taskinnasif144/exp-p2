"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import VendorQuery from "./VendorQuery";
import KeyWords from "./KeyWords";

function Hero1({ animating, count, onAnimationCompleted }) {
  const serviceArray = [
    "Air Conndition",
    "Desktop",
    "Refrigerator",
    "Appliances",
  ];
  return (
    <div className="w-full h-full py-[30px] flex flex-col justify-around items-center">
      <h2 className=" text-[28px] xs:text-[40px] lg:text-[60px] font-bold relative ">
        <div className="flex items-center w-[290px] xs:w-[450px] lg:w-[600px]">
          Your
          <AnimatePresence>
            <div className="width-fit-conent inline-block ml-2 mr-2 relative overflow-hidden">
              <motion.h2
                className="gradient-text"
                key={count}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  repeatType: "loop",
                }}>
                {serviceArray[count]}
              </motion.h2>
            </div>
          </AnimatePresence>
        </div>
        <div>
          Service by One
          <motion.div
            className="inline-block ml-3"
            initial={{ x: animating ? 0 : 50 }}
            animate={{ x: animating ? 50 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
            onAnimationComplete={onAnimationCompleted}>
            <TouchAppIcon className="text-[40px]" />
          </motion.div>
        </div>
      </h2>
      <div className="w-full max-w-[500px]  sm:w-[70%]">
        <VendorQuery />
        <KeyWords />
      </div>
    </div>
  );
}

export default Hero1;

// className="h-10 overflow-hidden"
