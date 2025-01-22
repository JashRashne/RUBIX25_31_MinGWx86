import React from "react";
import windowslogo from "../../assets/windows.png";
import chromelogo from "../../assets/chrome.png";
import wordlogo from "../../assets/msword.png";
import thispc from '../../assets/thispc.png'
import folder from '../../assets/folder.png'
import recyclebin from '../../assets/recyclebin.png'
import { useNavigate } from 'react-router-dom';


const MeetDesktop = () => {


  const navigate = useNavigate();


  return (
    <div class="bg-[url('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=1820')] bg-cover bg-center h-screen w-screen flex flex-col relative">
      <div className="w-full h-[94%]">
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
