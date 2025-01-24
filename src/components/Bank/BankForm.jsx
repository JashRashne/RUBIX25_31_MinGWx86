import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2canvas from "html2canvas";
import arrow from "../../assets/arrow1.png";
import axios from "axios";

import bankotp from '../../assets/audio/bankotp.m4a'
import bankrecpt from '../../assets/audio/bankrecpt.m4a'
import banktransaction from '../../assets/audio/banktransaction.m4a'

const BankForm = () => {

const detailsRef = useRef(null);
  const handleDetailsClick = () => {
    if (detailsRef.current) {
      detailsRef.current.play();
    }
  };


  const otpRef = useRef(null);
    const handleOtpClick = () => {
      if (otpRef.current) {
        otpRef.current.play();
      }
    };


    const downloadRef = useRef(null);
      const handleDownloadClick = () => {
        if (downloadRef.current) {
          downloadRef.current.play();
        }
      };
    
  




  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountNumber: "",
    ifscCode: "",
    amount: "",
    beneficiaryName: "",
    remarks: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [otpSent, setOtpSent] = useState(false); // New state to manage OTP request
  const [otp, setOtp] = useState(""); // State to manage OTP input

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { accountNumber, ifscCode, amount, beneficiaryName, remarks } =
      formData;

    // Form validation
    if (!accountNumber || !ifscCode || !amount || !beneficiaryName) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      toast.error("Amount should be a positive number!");
      return;
    }

    const response = await axios.get(
      `https://python-server-1.vercel.app/send-email`,
      {
        params: {
          receiver_email: `electronjash@gmail.com`,
          subject: `THE OTP IS 6424`,
          message: `Regards , \n ElderlyBank`,
        },
      }
    );

    console.log(response);

    setOtpSent(true);
    setStep(2)
    // Success

    // Mark as submitted
    // setIsSubmitted(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    if (otp) {
      setIsSubmitted(true); // Show Download Receipt button after OTP validation
      toast.success("OTP verified successfully.");
    } else {
      toast.error("Please enter a valid OTP.");
    }

    toast.success("NEFT Transaction Initiated Successfully!");
    console.log("Transaction Data:", formData);
  };

  // Function to capture the page and download it as an image
  const handleDownload = () => {

    setStep(100);

    const element = document.getElementById("receipt");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "NEFT_Transaction_Receipt.png";
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      <div className={`${step == 1 ? "flex" : "hidden"}`}>
        <img
          src={arrow}
          height={50}
          width={50}
          className="absolute left-[380px] top-[130px] rotate-[100deg] z-20"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[10px] top-[20px] rounded-xl flex flex-col z-20">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg pt-2">ENTER BANK DETAILS</span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">
              Fill all the bank details of the recipient carefully and then
              click initiate transaction.
            </span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center gap-2">
            <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer"
            onClick={() => handleDetailsClick()}>
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
          src={arrow}
          height={50}
          width={50}
          className="absolute left-[250px] bottom-[180px] rotate-[100deg] z-20"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[10px] bottom-[260px] rounded-xl flex flex-col z-20">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg pt-2">ENTER OTP</span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">
            An OTP (One-Time Password) is a temporary code used for secure authentication, providing an extra layer of protection against unauthorized access.
            </span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center gap-2">
            <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer"
            onClick={() => handleOtpClick()}>
              <i class="ri-volume-up-line text-xl"></i>
              <span className="px-3 text-xm font-bold">
                LISTEN INSTRUCTION{" "}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className={`${step == 3 ? "flex" : "hidden"}`}>
        <img
          src={arrow}
          height={50}
          width={100}
          className="absolute left-[450px] bottom-[100px] rotate-[100deg] z-20"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[100px] bottom-[260px] rounded-xl flex flex-col z-20">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg pt-2">DOWNLOAD RECEIPT</span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">
              Click here to download the reciept which will act as a proof of transaction in case of any mishappenings or fraud.
            </span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center gap-2">
            <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer"
            onClick={() => handleDownloadClick()}>
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
      <div className="w-64 bg-blue-800 text-white min-h-screen p-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">
          Banking Portal
        </h2>
        <div className="space-y-6">
          <Link
            to="/neft"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-money-dollar-circle-fill text-2xl"></i>
            <span className="text-lg">NEFT Transaction</span>
          </Link>
          <Link
            to="/rtgs"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-flashlight-fill text-2xl"></i>
            <span className="text-lg">RTGS Transaction</span>
          </Link>
          <Link
            to="/imps"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-phone-fill text-2xl"></i>
            <span className="text-lg">IMPS Transfer</span>
          </Link>
          <Link
            to="/balance"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-bank-card-fill text-2xl"></i>
            <span className="text-lg">Account Balance</span>
          </Link>
          <Link
            to="/history"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-history-fill text-2xl"></i>
            <span className="text-lg">Transaction History</span>
          </Link>
          <Link
            to="/cheque-book"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-book-2-fill text-2xl"></i>
            <span className="text-lg">Cheque Book Request</span>
          </Link>
          <Link
            to="/fund-transfer"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-exchange-fill text-2xl"></i>
            <span className="text-lg">Fund Transfer</span>
          </Link>
          <Link
            to="/loan"
            className="flex items-center space-x-4 hover:text-blue-300"
          >
            <i className="ri-home-2-fill text-2xl"></i>
            <span className="text-lg">Loan Application</span>
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 relative">
        <nav className="bg-blue-600 p-4 mb-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <h1 className="text-xl font-bold">NEFT Transaction</h1>
            <div>
              <a href="/" className="mr-4 hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Help
              </a>
            </div>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto py-8 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-6"
            id="receipt"
          >
            <h2 className="text-2xl font-semibold text-center">
              Initiate NEFT Transaction
            </h2>

            {/* Transaction Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="accountNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitted}
                />
              </div>

              <div>
                <label
                  htmlFor="ifscCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitted}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount (INR)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitted}
                />
              </div>

              <div>
                <label
                  htmlFor="beneficiaryName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Beneficiary Name
                </label>
                <input
                  type="text"
                  id="beneficiaryName"
                  name="beneficiaryName"
                  value={formData.beneficiaryName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitted}
                />
              </div>
            </div>

            {/* Remarks */}
            <div>
              <label
                htmlFor="remarks"
                className="block text-sm font-medium text-gray-700"
              >
                Remarks (Optional)
              </label>
              <textarea
                id="remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitted}
              />
            </div>

            {/* OTP Form */}
            {otpSent && !isSubmitted && (
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleOtpSubmit}
                  type="button"
                  className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit OTP
                </button>
              </div>
            )}

            {/* Buttons */}
            <div className="text-center flex justify-center space-x-4">
              {!otpSent && (
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  disabled={isSubmitted}
                >
                  Initiate Transaction
                </button>
              )}

              {isSubmitted && (
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Download Receipt
                </button>
              )}
            </div>
          </form>
        </div>

        <audio src={bankotp} ref={otpRef} className="hidden"></audio>
        <audio src={bankrecpt} ref={downloadRef} className="hidden"></audio>
        <audio src={banktransaction} ref={detailsRef} className="hidden"></audio>

        <ToastContainer />
      </div>
    </div>
  );
};

export default BankForm;
