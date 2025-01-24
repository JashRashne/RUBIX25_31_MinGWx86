import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BankForm = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    ifscCode: '',
    amount: '',
    beneficiaryName: '',
    remarks: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { accountNumber, ifscCode, amount, beneficiaryName, remarks } = formData;

    // Form validation
    if (!accountNumber || !ifscCode || !amount || !beneficiaryName) {
      toast.error('Please fill in all required fields!');
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      toast.error('Amount should be a positive number!');
      return;
    }

    // Success
    toast.success('NEFT Transaction Initiated Successfully!');
    console.log('Transaction Data:', formData);

    // Reset form after submission
    setFormData({
      accountNumber: '',
      ifscCode: '',
      amount: '',
      beneficiaryName: '',
      remarks: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
   <div className="w-64 bg-blue-800 text-white min-h-screen p-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">Banking Portal</h2>
        <div className="space-y-6">
          <Link to="/neft" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-money-dollar-circle-fill text-2xl"></i>
            <span className="text-lg">NEFT Transaction</span>
          </Link>
          <Link to="/rtgs" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-flashlight-fill text-2xl"></i>
            <span className="text-lg">RTGS Transaction</span>
          </Link>
          <Link to="/imps" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-phone-fill text-2xl"></i>
            <span className="text-lg">IMPS Transfer</span>
          </Link>
          <Link to="/balance" className="flex items-center space-x-4 hover:text-blue-300">
          <i class="ri-bank-card-fill text-2xl"></i>
            <span className="text-lg">Account Balance</span>
          </Link>
          <Link to="/history" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-history-fill text-2xl"></i>
            <span className="text-lg">Transaction History</span>
          </Link>
          <Link to="/cheque-book" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-book-2-fill text-2xl"></i>
            <span className="text-lg">Cheque Book Request</span>
          </Link>
          <Link to="/fund-transfer" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-exchange-fill text-2xl"></i>
            <span className="text-lg">Fund Transfer</span>
          </Link>
          <Link to="/loan" className="flex items-center space-x-4 hover:text-blue-300">
            <i className="ri-home-2-fill text-2xl"></i>
            <span className="text-lg">Loan Application</span>
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <nav className="bg-blue-600 p-4 mb-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <h1 className="text-xl font-bold">NEFT Transaction</h1>
            <div>
              <a href="#" className="mr-4 hover:underline">Home</a>
              <a href="#" className="hover:underline">Help</a>
            </div>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto py-8 px-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-center">Initiate NEFT Transaction</h2>

            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">IFSC Code</label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (INR)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="beneficiaryName" className="block text-sm font-medium text-gray-700">Beneficiary Name</label>
              <input
                type="text"
                id="beneficiaryName"
                name="beneficiaryName"
                value={formData.beneficiaryName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">Remarks (Optional)</label>
              <textarea
                id="remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Initiate Transaction
              </button>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default BankForm;
