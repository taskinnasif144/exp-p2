"use client";

import React, { useState } from "react";
import AcRepair from "../../public/ac-logo.jpg";

import { motion, AnimatePresence } from "framer-motion";

function Hero2({ count }) {
  const images = [
    "https://st2.depositphotos.com/1010613/7207/i/450/depositphotos_72077837-stock-photo-technician-repairing-air-conditioner.jpg",
    "https://ydcaedubd.com/public/service/1679079399271496.jpeg",
    "https://www.swappliancerepair.com/wp-content/uploads/2022/02/Fridge-Repair-_1666788403.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617776411_microwaveovenrepairservices.jpg",
  ];

  return (
    <div className="w-full h-[600px] md:h-full text-center flex justify-between items-center flex-col py-[40px]">
      <h3 className="text-[35px] md:text-[60px] text-white font-bold">
        Desrie To Done
      </h3>

      <div className="h-[350px] sm:h-[500px] lg:h-[950px] w-[100%] sm:w-[60%] md:w-[80%] overflow-hidden block relative lg:p-10">
        <AnimatePresence>
          <motion.img
            key={count}
            initial={{ x: "-50%", y: "50%", opacity: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: "70%", y: "-37%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
            src={images[(count + 2) % images.length]}
            objectFit="cover"
            className="h-[80%] w-[50%] object-cover absolute top-[40%] left-[-10%]  rounded-3xl"
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.img
            key={count}
            initial={{ x: "-70%", y: "37%", opacity: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: "70%", y: "38%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
            src={images[(count + 1) % images.length]}
            objectFit="cover"
            className="h-[80%] w-[50%] object-cover inlineblock z-10 absolute top-[10%] left-[25%] translate-x-[-50%] rounded-3xl"
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.img
            key={count}
            initial={{ x: "-70%", y: "-37%", opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: "-50%", y: "50%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
            src={images[(count + 0) % images.length]}
            objectFit="cover"
            className="h-[80%] w-[50%]  object-cover absolute top-[40%] right-[-10%] rounded-3xl"
          />
        </AnimatePresence>
      </div>
      <div>
        <h3 className="text-[30px] text-white  ">Welcome to Yimbs</h3>
      </div>
    </div>
  );
}

export default Hero2;
