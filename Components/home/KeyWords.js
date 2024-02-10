import React, { useEffect, useState } from "react";
import { keyWords } from "../../constants/index";

function KeyWords() {
  const [seeMore, setSeeMore] = useState(false);
  const handleAction = () => {
    setSeeMore(!seeMore);
  };
  return (
    <div>
      <ul className="w-full flex  text-[8px] xs:text-xs flex-wrap">
        {keyWords.map((key, index) => {
          if (seeMore) {
            return (
              <li
                className="border inline-block px-2 py-1 mx-1 my-2 rounded-2xl whitespace-nowrap flex-wrap hover:bg-slate-700"
                key={index}>
                {key}
              </li>
            );
          } else {
            if (index < 3) {
              return (
                <li
                  className="border inline-block px-2 py-1 mx-1 my-2 rounded-2xl hover:bg-slate-700"
                  key={index}>
                  {key}
                </li>
              );
            }
          }
        })}
      </ul>
      <button onClick={handleAction} className="ml-5">
        {seeMore ? "See Less ..." : "See More ..."}
      </button>
    </div>
  );
}

export default KeyWords;
