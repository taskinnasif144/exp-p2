import Image from "next/image";
import React from "react";
import img from "../../public/ac-logo.jpg";

function DraggableServices({ title, path, id }) {
  return (
    <div className="text-center inline-block p-0 m-1 sm:p-3 sm:m-3 rounded-md sm:rounded-3xl unselectable">
      <Image
        src={path}
        alt={title}
        width={500}
        height={500}
        className="min-h-[100px] min-w-[100px] sm:h-[150px] sm:min-w-[260px] object-cover rounded-md  sm:rounded-3xl"
      />

      <h4 className="text-sm sm:text-xl mt-3 text-whtie"> {title} </h4>
    </div>
  );
}

export default DraggableServices;
