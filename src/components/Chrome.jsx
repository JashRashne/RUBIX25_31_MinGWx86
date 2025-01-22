import React from "react";

const GoogleSearchUI = () => {
  return (
    <div className="bg-white h-screen flex flex-col text-black">
      {/* Top Tabs */}
      <div className="flex items-center px-4 py-2 bg-gray-100 text-sm border-b border-gray-300">
        <div className="flex items-center gap-3">
          {/* Back and Refresh Buttons */}
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-black font-bold">{`←`}</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-black font-bold">{`⟳`}</span>
          </button>
        </div>
        <div className="flex-grow flex items-center ml-4">
          <input
            type="text"
            placeholder="Search or type a URL"
            className="flex-grow bg-gray-100 text-gray-600 placeholder-gray-500 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Star and Download Buttons */}
        <div className="flex items-center gap-3 ml-4">
          {/* Star Button */}
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">★</span>
          </button>
          {/* Download Button */}
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">⬇️</span>
          </button>
        </div>
        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full bg-gray-300 ml-4 flex items-center justify-center">
          <span className="text-sm font-bold">👤</span>
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

export default GoogleSearchUI;
