"use client";

import { Widgets } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function ReviewCard({ customerData, index, selectedId, animated }) {
  return (
    <motion.div
      layoutId={index}
      onClick={animated ? () => selectedId(null) : () => selectedId(index)}
      className={`bg-[#D9D9D9] px-4 py-3 rounded-lg shadow-xl text-black mx-4 my-6 unselectable ${
        animated
          ? "w-[500px] h-[300px] absolute top-[20%] left-[33%]"
          : "min-w-[300px] min-h-[260px]"
      }`}>
      <motion.div className="flex items-center">
        <motion.img
          src={customerData.image}
          width={80}
          height={80}
          alt="Image of one of the customers"
          className="rounded-full h-[80px] w-{80px} object-center border-4 border-white translate-y-[-50%]"
        />

        <motion.div className="ml-4 text-left translate-y-[-15px]">
          <motion.h4 className="text-xl font-bold">
            {customerData.name}
          </motion.h4>
          <motion.h5 className="text-sm">{customerData.address}</motion.h5>
        </motion.div>
      </motion.div>
      <motion.div className="translate-y-[-20px] text-start">
        <motion.span>
          {animated
            ? customerData.review
            : customerData.review.substring(0, 200)}
        </motion.span>
        {!animated && (
          <motion.span className="text-[12px] text-gray-500 text-end">
            ....see more
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ReviewCard;
