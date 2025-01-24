import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActivitySurvey = () => {

  const navigate = useNavigate();
  // Options data for the quiz
  const optionsData = [
    { text: "https://secure-login.bank.com", correct: false }, // Safe
    { text: "http://bank-secure-login.com", correct: true }, // Malicious (fake, insecure)
    { text: "https://yourbank.com/login", correct: false }, // Safe
    { text: "https://support.bank.com", correct: false }, // Safe
    { text: "https://bank-secure-login.xyz", correct: true }, // Malicious (phishing attempt)
    { text: "https://www.bankofamerica.com/account/login", correct: false }, // Safe
    { text: "http://secure-logins.com", correct: true }, // Malicious (suspicious domain)
    { text: "https://www.chase.com/login", correct: false }, // Safe
    { text: "https://www.paypal-verify.net", correct: true }, // Malicious (phishing)
    { text: "https://login.banking-secure.com", correct: true }, // Malicious (fake secure login page)
    { text: "https://www.wellsfargo.com/signin", correct: false }, // Safe
    { text: "http://www.bank-info.com", correct: true }, // Malicious (non-HTTPS, insecure)
    { text: "https://www.mybank-secure-login.com", correct: true }, // Malicious (spoofed URL)
    { text: "https://login.banksecurely.com", correct: true }, // Malicious (similar to legit URLs)
    { text: "https://www.bankoftrust.com", correct: false }, // Safe
    { text: "http://banking-security.com", correct: true }, // Malicious (non-HTTPS)
    { text: "https://www.citibank.com/sign-in", correct: false }, // Safe
    { text: "https://www.payments-secure.com", correct: true }, // Malicious (looks like a payment page)
    { text: "https://www.hsbc.com/accounts-login", correct: false }, // Safe
    { text: "http://bank-logins.com", correct: true }, // Malicious (non-HTTPS, fake login)
  ];
  

  // State to manage the app flow
  const [isVideoShown, setIsVideoShown] = useState(true); // Whether the video screen is displayed
  const [options, setOptions] = useState(shuffleOptions(optionsData)); // Current options for the quiz
  const [selectedOption, setSelectedOption] = useState(null); // Selected option state
  const [isCorrect, setIsCorrect] = useState(null); // To track correctness

  const randomVideo = `https://www.youtube.com/watch?v=C1D0tNnTDe4`; // Select a random video

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
    return [...options].sort(() => Math.random() - 0.5).slice(0,4);
  }

  return (
    <div className="h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex flex-col">
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-4 px-8 bg-white shadow-md">
        <h1 className="text-gray-800 text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Technik</h1>
        <ul className="flex space-x-6 text-gray-800 cursor-pointer">
          <li>
            <a href="/community" className="hover:underline">
              Community
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        {isVideoShown ? (
          // Video Screen
          <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6">
              Watch This Educational Video
            </h1>
            <p className="text-blue-700 text-center mb-4">
              Oops! You've clicked a potentially malicious URL. To help you
              avoid such links in the future, here’s a video to educate you,
              followed by a quiz for practice.
            </p>
            <iframe
              className="w-full rounded-lg shadow-md mb-6"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C1D0tNnTDe4"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

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
