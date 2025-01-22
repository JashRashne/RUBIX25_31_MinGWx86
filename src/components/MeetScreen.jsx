import React, { useState } from "react";
import Webcam from "react-webcam";
import Navbar from "./Navbar";

const MeetScreen = () => {
  // State for each button
  const [isButton1Active, setIsButton1Active] = useState(false);
  const [isButton2Active, setIsButton2Active] = useState(false); // Controls B2 (Webcam Toggle)
  const [isButton3Active, setIsButton3Active] = useState(false);
  const [isButton4Active, setIsButton4Active] = useState(false);
  const [isButton5Active, setIsButton5Active] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [isLinkInfoOpen, setIsLinkInfoOpen] = useState(true);

  return (
    <div className="bg-white h-screen flex flex-col">
      <Navbar link={"https://meet.google.com/landing"} />

      {/* MEET UI */}
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="w-full h-[88%] flex justify-center relative">
          {numberOfPeople === 1 && (
            <div className="w-full h-full flex justify-center items-center">
              {isButton2Active ? (
                <Webcam className="w-full h-full rounded-md" />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xl">
                    Camera Off
                  </span>
                </div>
              )}
            </div>
          )}
          {numberOfPeople === 2 && (
            <div className="w-full h-full flex">
              <div className="w-1/2 h-full">
                {isButton2Active ? (
                  <Webcam className="w-full h-full rounded-md" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-xl">
                      Camera Off
                    </span>
                  </div>
                )}
              </div>
              <div className="w-1/2 h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 font-bold text-xl">
                  Waiting...
                </span>
              </div>
            </div>
          )}

          {/* LINK INFO BUTTON */}
          <div
            className={`absolute bottom-4 left-4 bg-white border border-gray-300 shadow-md rounded-md ${
              isLinkInfoOpen ? "flex flex-col" : "hidden"
            } items-start h-[300px] w-[300px]`}
          >
            <div className="w-full h-[20%]  flex">
              <div className="h-full w-[80%] flex items-end pb-3 justify-start pl-4">
                Your meeting's ready
              </div>
              <div
                className="h-full w-[20%] flex items-end justify-center  cursor-pointer pb-3"
                onClick={() => setIsLinkInfoOpen(false)}
              >
                {" "}
                X{" "}
              </div>
            </div>
            <div className="w-full h-[20%]  flex items-center">
              <div className="h-[75%] ml-4 w-1/2 bg-blue-700 rounded-3xl flex items-center justify-start">
                <i class="ri-user-add-line text-white text-lg ml-5"></i>
                <span className="text-sm text-white ml-3">Add others</span>
              </div>
            </div>
            <div className="w-full h-[15%]  flex items-center">
              <span className="text-black text-sm leading-tight ml-3">
                Or share this meeting link with others you want in the meeting
              </span>
            </div>
          </div>

          {/* ADMIT BUTTON */}
        </div>
        <div className="w-full h-[12%] bg-gray-600 flex">
          <div className="h-full w-[25%] bg-yellow-100 flex items-center justify-start pl-4">
            hay-daym-eet
          </div>
          <div className="h-full w-[45%] bg-gray-200 flex items-center justify-center gap-4">
            {/* Individual Toggle Buttons */}
            <div
              onClick={() => setIsButton1Active(!isButton1Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton1Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-sm font-bold">B1</span>
            </div>
            <div
              onClick={() => setIsButton2Active(!isButton2Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton2Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-sm font-bold">B2</span>
            </div>
            <div
              onClick={() => setIsButton3Active(!isButton3Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton3Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-sm font-bold">B3</span>
            </div>
            <div
              onClick={() => setIsButton4Active(!isButton4Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton4Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-sm font-bold">B4</span>
            </div>
            <div
              onClick={() => setIsButton5Active(!isButton5Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton5Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-sm font-bold">B5</span>
            </div>
          </div>
          {/* Smaller Buttons with Hover Animation */}
          <div className="h-full w-[30%] bg-yellow-100 flex items-center justify-end pr-4 gap-3">
            <div className="h-10 w-10 bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <span className="text-black font-bold">S1</span>
            </div>
            <div className="h-10 w-10 bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <span className="text-black font-bold">S2</span>
            </div>
            <div className="h-10 w-10 bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <span className="text-black font-bold">S3</span>
            </div>
            <div className="h-10 w-10 bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <span className="text-black font-bold">S4</span>
            </div>
            <div className="h-10 w-10 bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <span className="text-black font-bold">S5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetScreen;
