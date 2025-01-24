import React, { useRef } from "react";
import meet from "../../assets/meet.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import arrow from '../../assets/arrow1.png'

import newmeeting from '../../assets/audio/newmeeting.m4a'

const MeetHome = () => {
  const navigate = useNavigate();
  const newMeetingRef = useRef(null);
  const handleNewMeetingClick = () => {
    if (newMeetingRef.current) {
      newMeetingRef.current.play();
    }
  }

  return (
    <div className="bg-white h-screen flex flex-col relative">
      <Navbar link={"https://www.meet.google.com/landing"} />

      {/* ARROW AND INSTRUCTION */}
      <img
        src={arrow}
        height={50}
        width={150}
        className="absolute left-[280px] top-[150px] rotate-[200deg]"
        alt=""
      />

      <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[400px] top-[60px] rounded-xl flex flex-col">
        <div className="w-full h-[60%]  flex flex-col items-center justify-center">
          <span className="font-black text-lg pt-2">
            USE THESE TO JOIN MEETINGS
          </span>
          <span className=" mb-2 text-sm text-center px-4 leading-tight">
            Use the "New Meeting" button to create your own meeting and enter a meeting code given to you by someone in the other box and hit "Join" in order to join another meeting.
          </span>
        </div>
        <div className="w-full h-[40%]  flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer"
          onClick={() => handleNewMeetingClick()}>
            <i class="ri-volume-up-line text-xl"></i>
            <span className="px-3 text-xm font-bold">LISTEN INSTRUCTION </span>
          </div>
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
            <button
              className="bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-600"
              onClick={() => navigate("/meet-screen")}
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
      <audio src={newmeeting} ref={newMeetingRef} className="hidden"></audio>
    </div>
  );
};

export default MeetHome;
