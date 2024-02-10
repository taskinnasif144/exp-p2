import Image from "next/image";
import React from "react";
import { footerImages } from "@/constants";
function Footer2() {
  const usebg = (path) => {
    const cmp = "/clipArts/twitter.png";
    if (path === cmp) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex justify-between items-center w-full flex-col md:flex-row bg-black px-16 py-4">
      <div className="flex items-center">
        <Image
          width={50}
          height={50}
          src="/yimbs-logo.jpg"
          alt="logo of the website"
          className="h-8 w-8"
        />
        <p className="ml-3 text-xs xs:text-sm sm:text-base md:text-lg">
          © 2023 | Yimbs Ltd. | All Rights Reserved
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/clipArts/globe.png"
          alt="image of an globe"
          width={100}
          height={100}
          className="bg-[#D9D9D9] border-white border-[1px] rounded-full h-4 w-4 xs:h-6 xs:w-6 my-3"
        />
        <p className="my-3 ml-2 mr-2">English</p>

        {footerImages.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt="image of logos"
              width={100}
              height={100}
              className={`rounded-sm h-4 w-4 m-1 xs:h-6 xs:w-6 ${
                usebg(image) ? "bg-white" : ""
              } `}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Footer2;
