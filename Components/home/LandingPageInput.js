"use client";
import React, { useEffect, useState } from "react";

import { servicesArray } from "../../constants";

function LandingPageInput() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInput = (e) => {
    const input = e.target.value;

    setInputValue(input);
    const filtered = servicesArray.filter((suggestion) => {
      return suggestion.toString().toLowerCase().includes(input.toLowerCase());
    });
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    if (input.length === 0) {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="p-[6px] px-[14px] lg:px-[32px] lg:py-[12px] bg-white rounded-[20px] relative">
      <input
        className="bg-transparent outline-none w-full text-black"
        placeholder="eg. AC Service, PC service ..."
        type="text"
        value={inputValue}
        onChange={handleInput}
      />
      {showSuggestions && filteredSuggestions.length > 0 ? (
        <ul className="absolute  top-[120%]  bg-white w-[70%] p-2 rounded-sm shadow-lg max-h-[500px] overflow-y-auto z-50">
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <li
                key={index}
                className="text-black w-full cursor-pointer  hover:bg-slate-400 px-4 py-2 rounded-md border-b">
                {suggestion}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default LandingPageInput;
