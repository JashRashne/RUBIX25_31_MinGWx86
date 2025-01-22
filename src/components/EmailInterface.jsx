import React from "react";

const EmailInterface = () => {
  return (
    <div className="w-[500px] mx-auto mt-10 border rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b p-4">
        <h1 className="text-lg font-medium">New Message</h1>
        <div className="space-x-2 text-blue-600">
          <button>Cc</button>
          <button>Bcc</button>
        </div>
      </div>

      {/* Form */}
      <form className="p-4 space-y-4">
        {/* To Field */}
        <div>
          <input
            type="email"
            placeholder="To"
            className="w-full border-b p-2 focus:outline-none focus:border-blue-600"
          />
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b p-2 focus:outline-none focus:border-blue-600"
          />
        </div>

        {/* Message Body */}
        <div>
          <textarea
            placeholder="Type your message here..."
            rows="6"
            className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>
      </form>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Send
          </button>
          <button className="p-2 text-gray-500 border rounded-lg">A</button>
        </div>
        <div className="space-x-2 text-gray-500">
          <button>🔗</button>
          <button>😊</button>
          <button>⚠️</button>
          <button>✏️</button>
          <button>...</button>
        </div>
      </div>
    </div>
  );
};

export default EmailInterface;
