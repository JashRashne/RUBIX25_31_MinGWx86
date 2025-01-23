import React from "react";
import windowslogo from "../../assets/windows.png";
import chromelogo from "../../assets/chrome.png";
import wordlogo from "../../assets/msword.png";
import thispc from '../../assets/thispc.png'
import folder from '../../assets/folder.png'
import recyclebin from '../../assets/recyclebin.png'
import arrow from '../../assets/arrow2.png'
import { useNavigate } from 'react-router-dom';
import TransitionEffect from "../TransitionEffect";


const MeetDesktop = () => {


  const navigate = useNavigate();


  return (
    <div class="bg-[url('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=1820')] bg-cover bg-center h-screen w-screen flex flex-col relative">
      <div className="w-full h-[94%]">
        {/* ARROW AND INSTRUCTION */}
        <img
          src={arrow}
          height={50}
          width={150}
          className="absolute left-[200px] top-[130px] rotate-[-123deg]"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[400px] top-[200px] rounded-xl flex flex-col">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg">CLICK HERE TO OPEN "CHROME"</span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">"CHROME" is a web browser that enables you to visit websites when connected to a stable internet connection.</span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center">

            <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
              <i class="ri-volume-up-line text-xl"></i>
              <span className="px-3 text-xm font-bold">LISTEN INSTRUCTION </span>
            </div>

          </div>
        </div>


        {/* THIS PC */}
        <img
          src={thispc}
          height={50}
          width={50}
          className="absolute left-5 top-5"
          alt=""
        />
        <span className="absolute left-5 top-[70px] text-sm text-white">This PC</span>

        {/* DOWNLOADS */}
        <img
          src={folder}
          height={50}
          width={50}
          className="absolute left-5 top-[95px]"
          alt=""
        />
        <span className="absolute left-3 top-[140px] text-sm text-white">Downloads</span>

        {/* MSWORD */}
        <img
          src={wordlogo}
          height={50}
          width={50}
          className="absolute left-5 top-[175px]"
          alt=""
        />
        <span className="absolute left-7 top-[225px] text-sm text-white">Word</span>

        {/* CHROME */}
        <img
          src={chromelogo}
          height={50}
          width={50}
          className="absolute left-5 top-[260px] cursor-pointer"
          alt=""
          onClick={() => navigate('/meet-chrome')}
        />
        <span className="absolute left-5 top-[310px] text-sm text-white">Chrome</span>

        {/* BIN */}
        <img
          src={recyclebin}
          height={50}
          width={50}
          className="absolute right-[40px] bottom-[80px]"
          alt=""
        />
        <span className="absolute right-[55px] bottom-[60px] text-sm text-white">Bin</span>


      </div>
      <div className="w-full h-[6%] bg-[#4884FD] flex">
        <div className="h-full w-[15%] bg-[#4EB148] rounded-r-xl flex items-center justify-center">
          <img src={windowslogo} height={20} width={20} alt="" />{" "}
          <span className="ml-2 text-white italic font-bold">start</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MeetDesktop;
