import React, { useState } from "react";
import Navbar from "../Navbar";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // This is needed for styling the toasts
import { useNavigate } from "react-router-dom";

const LeftMeetingScreen = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null); // Track the uploaded image file

  async function handleCheckMeet() {
    if (!imageFile) {
      console.error("No image selected");
      return;
    }

    // Initialize GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI('AIzaSyAkduarLNMsPxL7X8UxJjpsE3MyNGrVc0M');    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create a FileReader to read the image as Base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1]; // Remove the data URL prefix

      const prompt = "Does this have more than one person inside the meet? answer only either yes or no";

      const image = {
        inlineData: {
          data: base64Image,
          mimeType: imageFile.type,
        },
      };

      try {
        const result = await model.generateContent([prompt, image]);
        console.log(result.response.text()); // You can handle this response in a more meaningful way

        if (result.response.text()) {
          toast.success("You have learnt to use GOOGLE MEET");
        }


      } catch (error) {
        console.error("Error generating content: ", error);
      }
    };

    // Read the file as a data URL
    reader.readAsDataURL(imageFile);
  }

  return (
    <div className="h-screen w-screen">
      <Navbar link={"https://meet.google.com/hay-daym-eet"} />
      <div className="h-full flex flex-col items-center justify-center bg-gray-100">
        {/* Countdown Timer */}
        <div className="absolute top-6 left-6 flex items-center mt-[60px]">
          <div className="relative w-10 h-10">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 36 36"
            >
              <circle
                className="text-gray-300"
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
              />
              <circle
                className="text-blue-500"
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
                strokeDasharray="100"
                strokeDashoffset="45" // Adjust based on countdown percentage
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-sm">
              55
            </div>
          </div>
          <p className="ml-2 text-gray-700">Returning to home screen</p>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            You left the meeting
          </h1>
          <div className="flex gap-4 justify-center mb-6">
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-100">
              Rejoin
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
            
            onClick={() => navigate('/')}>
              Return to home screen
            </button>
          </div>
          <p className="text-blue-500 font-medium cursor-pointer">
            Submit feedback
          </p>
        </div>

        {/* Security Info */}
        <div className="mt-8 p-6 bg-white shadow-md rounded-lg flex flex-col items-center gap-4">
          <h2 className="font-semibold text-lg text-gray-800">
            TEST JOINING A MEET
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Create a meeting and have one person join. Once two participants are
            in the meeting, take a screenshot and upload it here.
          </p>
          <input
            type="file"
            accept="image/*"
            className="mb-4 border border-gray-300 rounded-lg p-2"
            onChange={(e) => setImageFile(e.target.files[0])} // Update the image file state
          />
          <button
            onClick={handleCheckMeet}
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default LeftMeetingScreen;
