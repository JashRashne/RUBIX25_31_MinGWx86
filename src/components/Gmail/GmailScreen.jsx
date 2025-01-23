import React, { useState } from "react";
import question from "../../assets/question.png";
import setting from "../../assets/setting.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import gmailLogo from "../../assets/gmailLogo.png";
import inbox from "../../assets/mail-inbox-app.png";
import starred from "../../assets/star.png";
import snoozed from "../../assets/clock.png";
import sent from "../../assets/send.png";
import drafts from "../../assets/file.png";
import refresh from "../../assets/refresh.png";
import more from "../../assets/ellipsis.png";
import compose from "../../assets/pen.png";
import next from "../../assets/next.png";
import back from "../../assets/back.png";
import down from "../../assets/down-arrow.png";
import attach from "../../assets/attach-document.png";
import link from "../../assets/link.png";
import font from "../../assets/color.png";
import drive from "../../assets/google-drive.png";
import image from "../../assets/image.png";
import smile from "../../assets/smile.png";
import check from "../../assets/check.png";
import Navbar from "../Navbar";
import arrow from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow3.png";
// import drafts from "../../assets/send.png";
const Tab = ({ label, isActive, onClick }) => (
  <button
    className={`w-full py-3 px-4 text-[0.95rem] font-medium rounded-t-lg ${
      isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);
const GmailScreen = () => {
  const [activeTab, setActiveTab] = useState("Primary");
  const [activeButton, setActiveButton] = useState("inbox");
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [step, setStep] = useState(1);

  const handleFocus = () => {
    setShowLabel(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setShowLabel(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    // Simulate sending the email
    setToastVisible(true); // Show toast notification

    // Hide the dialog box
    setOpen(false);

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Navbar link={"https://mail.google.com/mail/u/0/#inbox"} />
      <div className="flex h-screen bg-gray-100 relative">
        {/* ARROW AND INSTRUCTIONS */}

        <div className={`${step == 1 ? "flex" : "hidden"}`}>
          <img
            src={arrow}
            height={50}
            width={150}
            className="absolute left-[220px] top-[80px] rotate-[-80deg] z-20"
            alt=""
          />

          <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[400px] bottom-[130px] rounded-xl flex flex-col z-20">
            <div className="w-full h-[60%]  flex flex-col items-center justify-center">
              <span className="font-black text-lg pt-2">
                CLICK "COMPOSE" TO WRITE MAIL
              </span>
              <span className=" mb-2 text-sm text-center px-4 leading-tight">
                This button will open a compose tab where in you can send a mail
                to anyone.
              </span>
            </div>
            <div className="w-full h-[40%]  flex items-center justify-center gap-2">
              <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-volume-up-line text-xl"></i>
                <span className="px-3 text-xm font-bold">
                  LISTEN INSTRUCTION{" "}
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className={`${step == 2 ? "flex" : "hidden"}`}>
          <img
            src={arrow2}
            height={50}
            width={150}
            style={{ transform: "scaleX(-1)", rotate: "270deg" }}
            className="absolute left-[330px] top-[80px]  z-[210]"
            alt=""
          />

          <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[100px] bottom-[160px] rounded-xl flex flex-col z-20">
            <div className="w-full h-[60%]  flex flex-col items-center justify-center">
              <span className="font-black text-lg pt-2">
                TYPE THE MAIL HERE
              </span>
              <span className=" mb-2 text-sm text-center px-4 leading-tight">
                This is the text area where you type the actual contents of the
                mail.
              </span>
            </div>
            <div className="w-full h-[40%]  flex items-center justify-center gap-2">
              <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-volume-up-line text-xl"></i>
                <span className="px-3 text-xm font-bold">LISTEN</span>
              </div>
              <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-skip-right-line text-xl"></i>
                <span
                  className="px-3 text-xm font-bold"
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  NEXT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${step == 3 ? "flex" : "hidden"}`}>
          <img
            src={arrow}
            height={50}
            width={150}
            // style={{ transform: "scaleX(-1)", rotate: "270deg" }}
            className="absolute left-[330px] top-[-15px] rotate-[-150deg]  z-[210]"
            alt=""
          />

          <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[100px] bottom-[200px] rounded-xl flex flex-col z-20">
            <div className="w-full h-[60%]  flex flex-col items-center justify-center">
              <span className="font-black text-lg pt-2">
                ENTER THE RECIPIENT'S MAIL ID
              </span>
              <span className=" mb-2 text-sm text-center px-4 leading-tight">
                Enter all the mail addresses to whom you want to send a mail. Different mail addresses are seperated by a space.
              </span>
            </div>
            <div className="w-full h-[40%]  flex items-center justify-center gap-2">
              <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-volume-up-line text-xl"></i>
                <span className="px-3 text-xm font-bold">LISTEN</span>
              </div>
              <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-skip-right-line text-xl"></i>
                <span
                  className="px-3 text-xm font-bold"
                  onClick={() => {
                    setStep(4);
                  }}
                >
                  NEXT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${step == 4 ? "flex" : "hidden"}`}>
          <img
            src={arrow}
            height={50}
            width={150}
            // style={{ transform: "scaleX(-1)", rotate: "270deg" }}
            className="absolute left-[330px] top-[15px] rotate-[-150deg]  z-[210]"
            alt=""
          />

          <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[100px] bottom-[170px] rounded-xl flex flex-col z-20">
            <div className="w-full h-[60%]  flex flex-col items-center justify-center">
              <span className="font-black text-lg pt-2">
                ENTER THE SUBJECT
              </span>
              <span className=" mb-2 text-sm text-center px-4 leading-tight">
                Type out the title of your mail so that people know what the mail is about.
              </span>
            </div>
            <div className="w-full h-[40%]  flex items-center justify-center gap-2">
              <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-volume-up-line text-xl"></i>
                <span className="px-3 text-xm font-bold">LISTEN</span>
              </div>
              <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-skip-right-line text-xl"></i>
                <span
                  className="px-3 text-xm font-bold"
                  onClick={() => {
                    setStep(5);
                  }}
                >
                  NEXT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${step == 5 ? "flex" : "hidden"}`}>
          <img
            src={arrow}
            height={50}
            width={150}
            className="absolute left-[295px] bottom-[80px] rotate-[100deg] z-[200]"
            alt=""
          />

          <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[100px] top-[100px] rounded-xl flex flex-col z-20">
            <div className="w-full h-[60%]  flex flex-col items-center justify-center">
              <span className="font-black text-lg pt-2">
                CLICK "SEND" TO SEND MAIL
              </span>
              <span className=" mb-2 text-sm text-center px-4 leading-tight">
                This button will send the mail to the recipients mentioned.
              </span>
            </div>
            <div className="w-full h-[40%]  flex items-center justify-center gap-2">
              <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
                <i class="ri-volume-up-line text-xl"></i>
                <span className="px-3 text-xm font-bold">
                  LISTEN INSTRUCTION{" "}
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-64 flex flex-col py-2">
          <div className="flex items-center  px-4 gap-2 py-2 text-gray-400 font-normal text-2xl">
            {/* <div className=" py-4 px-4 flex items-center gap-2 bg-red-200 text-gray-400 font-normal text-2xl"> */}
            <img src={gmailLogo} alt="gmailLogo" className="w-8" />
            Gmail
          </div>
          <nav className="mt-4 space-y-1 flex flex-col justify-start">
            <div className="">
              <button
                onClick={() => {handleOpen(); setStep(2)}}
                className="flex items-center gap-4 font-medium text-gray-700 bg-[#c2e7ff] p-4 mb-4 ml-4 rounded-[1.5rem]"
              >
                <img src={compose} alt="compose" className="w-5 opacity-90" />
                Compose
              </button>
            </div>
            <div
              className={`flex items-center justify-center mr-4 rounded-r-full hover:bg-[#d2e2fc] pr-2 ${
                activeButton === "inbox" ? "bg-[#d2e2fc]" : ""
              }`}
            >
              <button
                className="flex gap-2 items-center w-full px-8 py-1 text-sm font-medium text-gray-700"
                onClick={() => setActiveButton("inbox")}
              >
                <img src={inbox} alt="inbox" className="w-4 opacity-70" />
                Inbox
              </button>
              <span className="text-xs font-bold text-gray-600">2,255</span>
            </div>
            <div
              className={`flex items-center justify-center mr-4 rounded-r-full hover:bg-[#d2e2fc] pr-2 ${
                activeButton === "starred" ? "bg-[#d2e2fc]" : ""
              }`}
            >
              <button
                className="flex gap-2 items-center w-full px-8 py-1 text-sm font-medium text-gray-700"
                onClick={() => setActiveButton("starred")}
              >
                <img src={starred} alt="starred" className="w-4 opacity-70" />
                Starred
              </button>
            </div>
            <div
              className={`flex items-center justify-center mr-4 rounded-r-full hover:bg-[#d2e2fc] pr-2 ${
                activeButton === "sent" ? "bg-[#d2e2fc]" : ""
              }`}
            >
              <button
                className="flex gap-2 items-center w-full px-8 py-1 text-sm font-medium text-gray-700"
                onClick={() => setActiveButton("sent")}
              >
                <img src={sent} alt="sent" className="w-4 opacity-70" />
                Sent
              </button>
            </div>
            <div
              className={`flex items-center justify-center mr-4 rounded-r-full hover:bg-[#d2e2fc] pr-2 ${
                activeButton === "drafts" ? "bg-[#d2e2fc]" : ""
              }`}
            >
              <button
                className="flex gap-2 items-center w-full px-8 py-1 text-sm font-medium text-gray-700"
                onClick={() => setActiveButton("drafts")}
              >
                <img src={drafts} alt="drafts" className="w-4 opacity-70" />
                Drafts
              </button>
              <span className="text-xs font-bold text-gray-600">10</span>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-center mr-4">
              <button
                className={`flex items-center w-full px-8 py-1 text-sm font-medium rounded-r-full text-gray-700 hover:bg-[#d2e2fc] ${
                  activeButton === "labels" ? "bg-[#d2e2fc]" : ""
                }`}
                onClick={() => setActiveButton("labels")}
              >
                <span className="material-icons mr-4 text-gray-500"></span>
                Labels
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="flex items-center justify-between pr-4 py-2">
            {/* <div className="flex items-center space-x-2"> */}
            {/* <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
              <span className="material-icons">menu</span>
            </button>
            <h1 className="text-lg font-bold text-gray-700">Inbox</h1> */}
            {/* </div> */}
            <div className="flex py-1 w-[100%] items-center justify-between">
              <div className="flex items-center justify-center w-[45rem] rounded-full px-2 bg-white">
                {" "}
                <img src={search} alt="search" className="w-6" />
                <input
                  type="text"
                  placeholder="Search mail"
                  className="w-full px-4 py-3 text-sm rounded-full focus:outline-none placeholder:text-[1.1rem]"
                />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <a href="#home" className="hover:text-gray-200">
                  <img
                    src={question}
                    alt="Question mark"
                    className="opacity-80 w-6"
                  />
                </a>
                <a href="#about" className="hover:text-gray-200">
                  <img src={setting} alt="Setting" className="opacity-80 w-6" />
                </a>
                <a href="#services" className="hover:text-gray-200">
                  <img src={menu} alt="Menu" className="opacity-80 w-6" />
                </a>
                <a href="#contact" className="flex items-center">
                  <button className="bg-[#6f4a2fc7] text-white rounded-full w-10 h-10 flex items-center justify-center">
                    J
                  </button>
                </a>
              </div>
            </div>
          </header>

          {/* Email Toolbar */}
          <div className="flex items-center justify-between px-6 py-1 bg-white rounded-tl-[1.3rem]">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="p-2 mr-2 bg-red-600 rounded" />
              <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
                <span>
                  <img src={refresh} alt="refresh" className="w-5 opacity-60" />
                </span>
              </button>

              <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
                <span>
                  {" "}
                  <img src={more} alt="more" className="w-4 opacity-60" />
                </span>
              </button>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span> 1-50 of 500</span>
              <div className="ml-2 flex items-center justify-center gap-3">
                <img src={back} alt="back" className="w-4 opacity-40" />
                <img src={next} alt="next" className="w-4 opacity-100" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          {/* <div className="flex items-center px-4 py-2 bg-white rounded-tl-[1.3rem] border-b">
          <button
            className="py-2 px-4 text-sm font-medium rounded-t-lg 
            
                 text-blue-600 border-b-2 border-blue-600"
          >
            Primary{" "}
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500">
            Social
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500">
            Updates
          </button>
        </div> */}
          <div className="flex items-center bg-white border-b shadow-md ">
            <div className="w-full flex items-center justify-around ">
              <Tab
                label="Primary"
                isActive={activeTab === "Primary"}
                onClick={() => handleTabClick("Primary")}
              />
              <Tab
                label="Promotions"
                isActive={activeTab === "Promotions"}
                onClick={() => handleTabClick("Promotions")}
              />
              <Tab
                label="Social"
                isActive={activeTab === "Social"}
                onClick={() => handleTabClick("Social")}
              />
              <Tab
                label="Updates"
                isActive={activeTab === "Updates"}
                onClick={() => handleTabClick("Updates")}
              />
            </div>
          </div>

          {/* Email List */}
          <div className="flex-1 overflow-y-auto bg-white">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-1 border-b hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <input type="checkbox" />
                  <span className="material-icons text-gray-400">
                    star_border
                  </span>
                  <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + (i % 26))}
                  </span>
                  <span className="font-medium text-gray-700">
                    Sender {i + 1}
                  </span>
                </div>
                <div className="flex-1 ml-4">
                  <p className="truncate text-gray-500">
                    <strong>Subject {i + 1}:</strong> This is some sample email
                    content for sender {i + 1}.
                  </p>
                </div>
                <div className="text-sm text-gray-400">12:30</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t">
            <div className="text-sm text-gray-500">1-50 of 500</div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
                <span className="material-icons">
                  <img src={back} alt="back" className="w-4 opacity-40" />
                </span>
              </button>
              <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
                <span className="material-icons">
                  <img src={next} alt="next" className="w-4 opacity-40" />
                </span>
              </button>
            </div>
          </footer>
        </div>
        {/* Dialog Box */}
        {open && (
          <div className="fixed bottom-10 right-10 w-[35rem] h-[35rem] rounded-xl flex justify-center items-center z-50">
            <div
              className="relative bg-white w-full h-full
             rounded-xl overflow-hidden shadow-lg"
            >
              {/* Dialog Header */}
              <div className="py-2 px-4 bg-gray-100 flex justify-between items-center border-b">
                <h2 className="text-md text-gray-700 font-semibold">
                  New Message
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={handleClose}
                >
                  ✕
                </button>
              </div>

              {/* Dialog Content */}
              <div className="space-y-1 px-4">
                {/* Conditionally show "To:" */}
                <div className="flex items-center">
                  {showLabel && (
                    <label className="block text-gray-600  border-b border-gray-300 p-2">
                      To:
                    </label>
                  )}
                  <input
                    type="email"
                    placeholder="Recipients"
                    className="w-full border-b border-gray-300 p-2 focus:outline-none"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Subject"
                    className="w-full border-b border-gray-300 p-2 focus:outline-none"
                  />
                </div>
                <textarea
                  placeholder=""
                  className="w-full p-2 h-[20rem] resize-none focus:outline-none"
                ></textarea>
              </div>

              {/* Dialog Footer */}
              <div className="absolute flex items-center space-x-1 bottom-0 left-0 p-4 w-full">
                {/* <button
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={handleClose}
                >
                  Close
                </button> */}
                <button
                  onClick={()=> { handleSend(); setStep(6)}}
                  className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600"
                >
                  Send
                </button>{" "}
                <button className="p-2 text-gray-600 rounded-md hover:bg-gray-200">
                  <span>
                    <img src={font} alt="font" className="w-4 opacity-80" />
                  </span>
                </button>
                <button className="p-2 text-gray-600 rounded-md hover:bg-gray-200">
                  <span className="font-bold">
                    <img src={attach} alt="attach" className="w-4 opacity-80" />
                  </span>
                </button>
                <button className="p-2 text-gray-600 rounded-md hover:bg-gray-200">
                  <span>
                    <img src={link} alt="link" className="w-4 opacity-80" />
                  </span>
                </button>
                <button className="p-2 text-gray-600 rounded-md hover:bg-gray-200">
                  <span>
                    <img src={drive} alt="drive" className="w-4 opacity-80" />
                  </span>
                </button>
                <button className="p-2 text-gray-600 rounded-md hover:bg-gray-200">
                  <span>
                    <img src={image} alt="image" className="w-4 opacity-80" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toastVisible && (
          <div className="fixed w-[15rem] bottom-4 right-4 bg-white flex items-center justify-start gap-4 px-4 py-4 rounded shadow-lg">
            <span>
              {" "}
              <img src={check} alt="check" className="w-6" />
            </span>
            <span> Email Sent!</span>
          </div>
        )}
      </div>
    </>
  );
};

export default GmailScreen;
