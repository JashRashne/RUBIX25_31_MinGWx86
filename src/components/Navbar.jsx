import React from "react";
import refresh from "../assets/refresh.png";
import starred from "../assets/star.png";
import backFull from "../assets/backFull.png";
import download from "../assets/downloads.png";

const Navbar = ({ link }) => {
  return (
    <>
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
            placeholder={link}
            className="flex-grow bg-gray-100 text-gray-600 placeholder-gray-500 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
    </>
  );
};

export default Navbar;
