import React, { useState } from "react";

const ActivitySurvey = () => {
  // Options data for the quiz
  const optionsData = [
    { text: "https://secure-login.bank.com", correct: false },
    { text: "http://bank-secure-login.com", correct: true },
    { text: "https://yourbank.com/login", correct: false },
    { text: "https://support.bank.com", correct: false },
  ];

  // State to manage the app flow
  const [isVideoShown, setIsVideoShown] = useState(true); // Whether the video screen is displayed
  const [options, setOptions] = useState(shuffleOptions(optionsData)); // Current options for the quiz
  const [selectedOption, setSelectedOption] = useState(null); // Selected option state
  const [isCorrect, setIsCorrect] = useState(null); // To track correctness

  // Array of random video URLs (you can replace with actual URLs)
  const videos = [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4",
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)]; // Select a random video

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option.correct);
  };

  const handleNextQuiz = () => {
    setOptions(shuffleOptions(optionsData)); // Shuffle options for the next question
    setSelectedOption(null); // Reset the selected option
    setIsCorrect(null); // Reset correctness
  };

  const handleVideoNext = () => {
    setIsVideoShown(false); // Hide the video screen and show the quiz
  };

  // Function to shuffle options for randomness
  function shuffleOptions(options) {
    return [...options].sort(() => Math.random() - 0.5);
  }

  return (
    <div className="h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <h1 className=" text-lg font-bold">
          Online Safety Awareness
        </h1>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        {isVideoShown ? (
          // Video Screen
          <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6">
              Watch This Educational Video
            </h1>
            {/* <p className="text-blue-700 text-center mb-4">
              Oops! You've clicked a potentially malicious URL. To help you
              avoid such links in the future, here’s a video to educate you,
              followed by a quiz for practice.
            </p> */}
            <video
              className="w-full rounded-lg shadow-md mb-6"
              controls
              src={randomVideo}
            >
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleVideoNext}
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition-all"
            >
              Next
            </button>
          </div>
        ) : (
          // Quiz Screen
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-blue-800 text-center mb-6">
              Online Safety Quiz
            </h1>
            <p className="text-blue-700 text-center mb-6">
              Which of the following looks like a malicious link?
            </p>
            <div className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`cursor-pointer border rounded-lg p-4 text-blue-800 font-medium shadow-sm transition-all ${
                    selectedOption
                      ? option.correct
                        ? "bg-green-100 border-green-500"
                        : selectedOption === option
                        ? "bg-red-100 border-red-500"
                        : "bg-blue-50 border-blue-200"
                      : "bg-blue-50 hover:bg-blue-100 border-blue-200"
                  }`}
                >
                  {option.text}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              {selectedOption && (
                <p
                  className={`font-medium ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isCorrect ? "Correct!" : "Incorrect. Try again!"}
                </p>
              )}
              <button
                onClick={handleNextQuiz}
                disabled={!selectedOption}
                className={`ml-auto px-4 py-2 rounded-md font-medium ${
                  !selectedOption
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitySurvey;
