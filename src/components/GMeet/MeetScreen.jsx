import React, { useState } from "react";
import Webcam from "react-webcam";
import Navbar from '../Navbar'

const MeetScreen = () => {
  // State for each button
  const [isButton1Active, setIsButton1Active] = useState(false);
  const [isButton2Active, setIsButton2Active] = useState(false); // Controls B2 (Webcam Toggle)
  const [isButton3Active, setIsButton3Active] = useState(false);
  const [isButton4Active, setIsButton4Active] = useState(false);
  const [isButton5Active, setIsButton5Active] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [isLinkInfoOpen, setIsLinkInfoOpen] = useState(true);
  const [isAdmitOpen, setIsAdmitOpen] = useState(true);

  return (
    <div className="bg-white h-screen flex flex-col">
      {/* Top Tabs */}
      <Navbar />

      {/* MEET UI */}
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="w-full h-[88%] flex justify-center relative">
          {numberOfPeople === 1 && (
            <div className="w-full h-full flex justify-center items-center">
              {isButton2Active ? (
                <Webcam className="w-full h-full rounded-md" />
              ) : (
                <div className="w-full h-full  flex items-center justify-center">
                  <div className="text-white bg-gray-200 rounded-xl h-[90%] w-[90%] font-bold items-center justify-center flex">
                    <span className="bg-blue-600 px-8 py-6 rounded-full text-xl">A</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {numberOfPeople === 2 && (
            <div className="w-full h-full flex">
              <div className="w-1/2 h-full">
                {isButton2Active ? (
                  <Webcam className="w-full h-full rounded-xl" />
                ) : (
                    <div className="w-full h-full  flex items-center justify-center">
                    <div className="text-white bg-gray-200 rounded-xl h-[90%] w-[90%] font-bold items-center justify-center flex">
                      <span className="bg-blue-600 px-8 py-6 rounded-full text-xl">A</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-1/2 h-full  flex items-center justify-center">
                  <div className="text-white bg-gray-200 rounded-xl h-[90%] w-[90%] font-bold items-center justify-center flex">
                    <span className="bg-red-400 px-8 py-6 rounded-full text-xl">J</span>
                  </div>
                </div>
            </div>
          )}

          {/* LINK INFO BUTTON */}
          <div
            className={`absolute bottom-4 left-4 bg-white border border-gray-300 shadow-md rounded-md ${
              isLinkInfoOpen ? "flex flex-col" : "hidden"
            } items-start h-[230px] w-[350px]`}
          >
            <div className="w-full h-[20%]  flex">
              <div className="h-full w-[80%] flex items-end pb-2 justify-start pl-5">
                Your meeting's ready
              </div>
              <div
                className="h-full w-[20%] flex items-end justify-center  cursor-pointer pb-2"
                onClick={() => setIsLinkInfoOpen(false)}
              >
                {" "}
                X{" "}
              </div>
            </div>
            <div className="w-full h-[25%]  flex items-center">
              <div className="h-[75%] ml-4 w-1/2 bg-blue-700 rounded-3xl flex items-center justify-start">
                <i class="ri-user-add-line text-white text-lg ml-5"></i>
                <span className="text-sm text-white ml-3">Add others</span>
              </div>
            </div>
            <div className="w-full h-[25%]  flex items-center">
              <span className="text-black text-sm leading-tight ml-4">
                Or share this meeting link with others you want in the meeting
              </span>
            </div>
            <div className=" w-full h-[25%] px-3 py-2">
              <div className=" h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="h-full w-[80%] flex items-center justify-center">
                  <span className="text-sm">
                    https://meet.google.com/hay-daym-eet
                  </span>
                </div>
                <div className="h-full w-[20%] flex items-center justify-center cursor-pointer">
                  <i class="ri-file-copy-line text-black text-xl hover:bg-gray-300 hover:rounded-full hover:px-2 hover:py-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* ADMIT BUTTON */}
          <div
            className={`absolute bottom-4 right-4 bg-white border border-gray-300 shadow-md rounded-xl ${
              isAdmitOpen ? "flex flex-col" : "hidden"
            } items-start h-[150px] w-[350px]`}
          >

            <div className=" w-full h-[35%] flex items-center justify-center pb-[6px]">
                <div className="h-full w-[80%] flex items-end justify-center font-semibold text-lg">Somone wants to join this call</div>
                <div className="h-full w-[20%] flex items-end justify-center text-lg"
                    onClick={() => setIsAdmitOpen(false)}
                > X </div>
            </div>
            <div className=" h-[30%] w-full flex items-center justify-start pl-6">
                <span className="bg-red-400 px-3 py-1 rounded-full">J</span>
                <span className="ml-4">Jash Rashne</span>
            </div>
            <div className=" h-[30%] w-full flex items-center justify-end pr-6">
                <span className="text-gray-600 cursor-pointer hover:bg-gray-300 hover:py-1 hover:px-2 hover:rounded-xl"
                    onClick={() => {setNumberOfPeople(2); setIsAdmitOpen(false);}}
                >Admit</span>
                <span className="ml-4 cursor-pointer text-gray-600 hover:bg-gray-300 hover:py-1 hover:px-2 hover:rounded-xl ">View</span>
            </div>
            

          </div>
        </div>
        <div className="w-full h-[12%]  flex">
          <div className="h-full w-[25%]  flex items-center justify-start pl-4">
            hay-daym-eet
          </div>
          <div className="h-full w-[45%]  flex items-center justify-center gap-4">
            {/* Individual Toggle Buttons */}
            <div
              onClick={() => setIsButton1Active(!isButton1Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton1Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-lg font-bold">

                {
                    isButton1Active ? <i class="ri-mic-off-fill"></i> : <i class="ri-mic-fill"></i>
                }

              </span>
            </div>
            <div
              onClick={() => setIsButton2Active(!isButton2Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton2Active
                  ? "bg-gray-700 border-4 border-gray-400" : "border-4 border-red-400 bg-red-300"
              }`}
            >
              <span className="text-white text-sm font-bold">{
                isButton2Active ? <i class="ri-video-on-fill"></i> : <i class="ri-video-off-fill"></i>
            }</span>
            </div>
            <div
              onClick={() => setIsButton3Active(!isButton3Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton3Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-lg font-bold"><i class="ri-share-2-fill"></i></span>
            </div>
            <div
              onClick={() => setIsButton4Active(!isButton4Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer ${
                isButton4Active
                  ? "border-4 border-red-400 bg-red-300"
                  : "bg-gray-700 border-4 border-gray-400"
              }`}
            >
              <span className="text-white text-lg font-bold"><i class="ri-emotion-happy-line"></i></span>
            </div>
            <div
              onClick={() => setIsButton5Active(!isButton5Active)}
              className={`flex items-center justify-center h-16 w-20 rounded-2xl cursor-pointer bg-red-500`}
            >
              <span className="text-white text-lg font-bold"><i class="ri-phone-fill"></i></span>
            </div>
          </div>
          {/* Smaller Buttons with Hover Animation */}
          <div className="h-full w-[30%]  flex items-center justify-end pr-4 gap-3">
            <div className="h-10 w-10  rounded-full flex items-center justify-center">
              <span className="text-black"><i class="ri-information-line h-full w-full text-3xl hover:bg-gray-200 hover:rounded-full cursor-pointer"></i></span>
            </div>
            <div className="h-10 w-10  rounded-full flex items-center justify-center">
              <span className="text-black"><i class="ri-group-line h-full w-full text-2xl hover:bg-gray-200 hover:rounded-full cursor-pointer"></i></span>
            </div>
            <div className="h-10 w-10  rounded-full flex items-center justify-center">
              <span className="text-black"><i class="ri-chat-unread-line h-full w-full text-2xl hover:bg-gray-200 hover:rounded-full cursor-pointer"></i></span>
            </div>
            <div className="h-10 w-10  rounded-full flex items-center justify-center">
              <span className="text-black"><i class="ri-shapes-line h-full w-full text-2xl hover:bg-gray-200 hover:rounded-full cursor-pointer"></i></span>
            </div>
            <div className="h-10 w-10  rounded-full flex items-center justify-center">
              <span className="text-black"><i class="ri-lock-star-line h-full w-full text-2xl hover:bg-gray-200 hover:rounded-full cursor-pointer"></i></span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetScreen;
