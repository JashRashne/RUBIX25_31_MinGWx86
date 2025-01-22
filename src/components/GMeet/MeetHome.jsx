import React from "react";
import meet from '../../assets/meet.png';
import { useNavigate } from 'react-router-dom';


const MeetHome = () => {


  const navigate = useNavigate();


  return (
    <div className="bg-white h-screen flex flex-col">
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
            placeholder="https://meet.google.com/landing"
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

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        {/* Google Meet Logo and Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex justify-center items-center">
            <img src={meet} alt="Google Meet Logo" />
          </div>
          <span className="text-gray-800 text-lg font-semibold">
            Google Meet
          </span>
        </div>

        {/* Header Icons */}
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">1:18 PM · Wed, Jan 22</span>
          <div className="flex gap-3">
            <button className="w-6 h-6 flex justify-center items-center text-gray-600">
              ❓
            </button>
            <button className="w-6 h-6 flex justify-center items-center text-gray-600">
              ⚙️
            </button>
            <button className="w-6 h-6 flex justify-center items-center text-gray-600">
              ⋮
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
              👤
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow px-6 py-12 items-center justify-center">
        {/* Left Section */}
        <div className="flex flex-col w-1/2 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl font-semibold text-gray-900 mb-4 ml-10">
            Video calls and meetings for everyone
          </h1>
          <p className="text-gray-600 text-lg mb-8 ml-10">
            Connect, collaborate, and celebrate from anywhere with Google Meet
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-600"

            onClick={() => navigate('/meet-screen')}
            >
              + New meeting
            </button>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Enter a code or link"
                className="py-2 px-4 text-gray-600 outline-none"
              />
              <button className="text-gray-600 bg-gray-100 px-4 hover:bg-gray-200">
                Join
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div className="mt-4">
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Learn more about Google Meet
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
              alt="Get a link"
            />
          </div>
          <h2 className="text-lg font-medium text-gray-800 mt-6">
            Get a link you can share
          </h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Click <span className="font-medium">New meeting</span> to get a link
            you can send to people you want to meet with
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetHome;
