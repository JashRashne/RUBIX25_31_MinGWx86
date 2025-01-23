import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow1.png";
import refresh from "../../assets/refresh.png";
import starred from "../../assets/star.png";
import backFull from "../../assets/backFull.png";
import download from "../../assets/downloads.png";

const BankChrome = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(""); // State for the input value

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Check if the input is the correct URL
      if (searchValue == "eldersbankofindia.com") {
        navigate("/bank-login");
      }
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col text-black relative">
      {/* Top Tabs */}
      <div className="flex items-center px-4 py-2 bg-gray-100 text-sm border-b border-gray-300">
        <div className="flex items-center gap-3">
          {/* Back and Refresh Buttons */}
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
            <span className="text-black font-bold">
              <img src={backFull} alt="backFull" className="w-4 opacity-60" />
            </span>
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
            <span className="text-black font-bold">
              <img src={refresh} alt="refresh" className="w-4 opacity-60" />
            </span>
          </button>
        </div>
        <div className="flex-grow flex items-center ml-4">
          <input
            type="text"
            placeholder={`Enter a link or search the web...`}
            className="flex-grow bg-gray-100 text-gray-600 placeholder-gray-500 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} // Update searchValue
            onKeyDown={handleKeyPress}
          />
        </div>
        {/* Star and Download Buttons */}
        <div className="flex items-center gap-3 ml-4">
          {/* Star Button */}
          <button className="w-8 h-8 rounded-full flex items-center hover:bg-gray-200 justify-center">
            <span className="text-gray-600">
              {" "}
              <img src={starred} alt="starred" className="w-4 opacity-60" />
            </span>
          </button>
          {/* Download Button */}
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">
              {" "}
              <img src={download} alt="download" className="w-4 opacity-60" />
            </span>
          </button>
        </div>
        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full hover:bg-gray-200 ml-4 flex items-center justify-center">
          <span className="text-sm font-bold">
            {" "}
            <button className="bg-[#6f4a2fc7] text-white rounded-full w-8 h-8 flex items-center justify-center">
              J
            </button>
          </span>
        </div>
      </div>

      {/* ARRROW AND INSTRUCTION */}
      <img
        src={arrow}
        height={50}
        width={150}
        className="absolute right-[200px] top-[40px] rotate-[-75deg]"
        alt=""
      />

      <div className="h-[180px] w-[450px] bg-gray-50 border-2 border-black absolute right-[50px] top-[200px] rounded-xl flex flex-col z-20">
        <div className="w-full h-[60%]  flex flex-col items-center justify-center">
          <span className="font-black text-lg">
            TYPE "eldersbankofindia.com" and hit ENTER
          </span>
          <span className=" mb-2 text-sm text-center px-4 leading-tight">
            What we're typing here is called the web address of the website
            where we are visiting in order to use the website.
          </span>
        </div>
        <div className="w-full h-[40%]  flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-gray-200 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
            <i class="ri-volume-up-line text-xl"></i>
            <span className="px-3 text-xm font-bold">LISTEN INSTRUCTION </span>
          </div>
        </div>
      </div>

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

export default BankChrome;
