import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const MeetChrome = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(""); // State for the input value

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Check if the input is the correct URL
      if (searchValue === "meet.google.com") {
        navigate("/meet-home"); // Navigate to /meet-home if it matches
      }
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col text-black">
      <Navbar link={'Type a link or search for keywords...'}/>

      {/* Central Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Google Logo */}
        <div className="flex space-x-1 text-6xl font-roboto mb-10">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        {/* Search Box */}
        <div className="relative w-2/3 md:w-1/3">
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="w-full bg-gray-100 text-gray-600 placeholder-gray-500 py-3 px-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="absolute right-4 top-3 flex gap-2">
            {/* Mic Icon */}
            <div className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
              🎤
            </div>
            {/* Search Lens Icon */}
            <div className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
              🔍
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetChrome;
