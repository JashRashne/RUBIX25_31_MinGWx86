import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow1.png";

const BankHome = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white min-h-screen p-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">
          Banking Portal
        </h2>
        <div className="space-y-6">
          <Link
            to="/bank-neft"
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
            <i class="ri-bank-card-fill text-2xl"></i>
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

      {/* Main Content */}
      <div className="flex-1 p-12 relative">
        <div className={`${step == 1 ? "flex" : "hidden"}`}>
          <img
            src={arrow}
            height={50}
            width={100}
            className="absolute left-[280px] top-[300px] rotate-[-70deg] z-20"
            alt=""
          />

          <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[380px] top-[400px] rounded-xl flex flex-col z-20">
            <div className="w-full h-[60%]  flex flex-col items-center justify-center">
              <span className="font-black text-lg pt-2">CLICK ON NEFT</span>
              <span className=" mb-2 text-sm text-center px-4 leading-tight">
                Click on NEFT to get a simulated experience for the transaction. Please note that this box differs bank to bank but the main idea remains the same.
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
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Bank Functionalities
        </h1>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* NEFT Card */}
          <Link
            to="/bank-neft"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-money-dollar-circle-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              NEFT Transaction
            </h2>
            <p className="text-center text-gray-600">
              Initiate National Electronic Funds Transfer (NEFT) transactions
              quickly.
            </p>
          </Link>

          {/* RTGS Card */}
          <Link
            to="/rtgs"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-flashlight-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              RTGS Transaction
            </h2>
            <p className="text-center text-gray-600">
              Transfer funds in real-time with Real-Time Gross Settlement
              (RTGS).
            </p>
          </Link>

          {/* IMPS Card */}
          <Link
            to="/imps"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-phone-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              IMPS Transfer
            </h2>
            <p className="text-center text-gray-600">
              Make instant money transfers using Immediate Payment Service
              (IMPS).
            </p>
          </Link>

          {/* Account Balance Card */}
          <Link
            to="/balance"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-bank-card-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Account Balance
            </h2>
            <p className="text-center text-gray-600">
              Check the balance of your account quickly and securely.
            </p>
          </Link>

          {/* Transaction History Card */}
          <Link
            to="/history"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-history-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Transaction History
            </h2>
            <p className="text-center text-gray-600">
              View your past transactions and financial records.
            </p>
          </Link>

          {/* Cheque Book Request Card */}
          <Link
            to="/cheque-book"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-book-2-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Cheque Book Request
            </h2>
            <p className="text-center text-gray-600">
              Request a new cheque book for your account.
            </p>
          </Link>

          {/* Fund Transfer Card */}
          <Link
            to="/fund-transfer"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-exchange-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Fund Transfer
            </h2>
            <p className="text-center text-gray-600">
              Transfer funds between your own accounts or to others.
            </p>
          </Link>

          {/* Loan Application Card */}
          <Link
            to="/loan"
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">
              <i className="ri-home-2-fill text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Loan Application
            </h2>
            <p className="text-center text-gray-600">
              Apply for personal, home, or car loans with ease.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankHome;
