import React from "react";
import { footerlinks } from "@/constants";
import Link from "next/link";

function Footer1() {
  return (
    <div className="py-2 px-[10%] flex justify-between items-end">
      <div className="w-full">
        <div className="my-5 ">
          <h4 className="text-2xl md:text-4xl">Contact</h4>
          <h5 className="text-base md:text-xl">014080808</h5>
          <h5 className="text-base md:text-xl">info@yimbs.com</h5>
        </div>
        <div className="my-5">
          <h4 className="text-2xl md:text-4xl">Address</h4>
          <h5 className="text-base md:text-xl">House #18, Block #B</h5>
          <h5 className="text-base md:text-xl">solmaid, Vatara, Dhaka-1212</h5>
        </div>
      </div>
      <div className="flex flex-col w-2/5 py-4">
        {footerlinks.map((link, index) => {
          return (
            <Link
              className="text-base md:text-xl m-[2px] underline"
              key={index}
              href="#">
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer1;
