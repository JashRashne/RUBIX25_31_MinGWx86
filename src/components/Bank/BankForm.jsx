import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2canvas from "html2canvas";
import arrow from "../../assets/arrow1.png";

const BankForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountNumber: "",
    ifscCode: "",
    amount: "",
    beneficiaryName: "",
    remarks: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
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

    // Success
    toast.success("NEFT Transaction Initiated Successfully!");
    console.log("Transaction Data:", formData);

    // Mark as submitted
    setIsSubmitted(true);
  };

  // Function to capture the page and download it as an image
  const handleDownload = () => {
    const element = document.getElementById("receipt");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "NEFT_Transaction_Receipt.png";
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex ">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6">
        <h1 className="text-xl font-semibold mb-8">Banking Services</h1>
        <ul>
          <li className="text-lg hover:bg-blue-700 p-2 rounded-lg cursor-pointer mb-4">
            <a href="#">NEFT Transaction</a>
          </li>
          <li className="text-lg hover:bg-blue-700 p-2 rounded-lg cursor-pointer mb-4">
            <a href="#">RTGS Transaction</a>
          </li>
          <li className="text-lg hover:bg-blue-700 p-2 rounded-lg cursor-pointer mb-4">
            <a href="#">IMPS Transfer</a>
          </li>
          <li className="text-lg hover:bg-blue-700 p-2 rounded-lg cursor-pointer mb-4">
            <a href="#">Cheque Book Request</a>
          </li>
          <li className="text-lg hover:bg-blue-700 p-2 rounded-lg cursor-pointer mb-4">
            <a href="#">Account Balance</a>
          </li>
          <li className="text-lg hover:bg-blue-700 p-2 rounded-lg cursor-pointer mb-4">
            <a href="#">Transaction History</a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 relative">
        <nav className="bg-blue-600 p-4 mb-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <h1 className="text-xl font-bold">NEFT Transaction</h1>
            <div>
              <a href="#" className="mr-4 hover:underline">
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

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={isSubmitted}
              >
                Initiate Transaction
              </button>
            </div>

            {isSubmitted && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Download Receipt
                </button>
              </div>
            )}
          </form>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default BankForm;
