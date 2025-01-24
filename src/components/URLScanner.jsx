import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URLScanner = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await axios.get(
        `https://99c3-103-160-70-195.ngrok-free.app/check-url?url=www.google.com`
      );
      const data = response.data;

      console.log(response);

      if (data.success === false) {
        setError("Failed to check the URL");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Error while checking the URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-50">
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-4 px-8 bg-white shadow-md">
        <div className="text-gray-800 text-2xl font-bold">
          <a href="/">Technik</a>
        </div>
        <ul className="flex space-x-6 text-gray-800">
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
      <div className="container min-w-[100vw] h-[90vh] flex items-center justify-center ">
        <div className="bg-white flex flex-col justify-center shadow-lg rounded-lg p-6 w-[40%] mx-auto">
          <h2 className="text-5xl font-extrabold text-blue-600 text-center mb-8">
            Scan a URL
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="url-input"
                className="block text-gray-700 font-medium mb-2"
              >
                Enter URL:
              </label>
              <input
                id="url-input"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                type="submit"
                className={`w-full px-4 py-2 rounded-md text-white ${
                  loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                } transition`}
                disabled={loading}
              >
                {loading ? "Checking..." : "Check URL"}
              </button>
              <button
                onClick={() => navigate("/url-education")}
                className="w-full px-4 py-2 rounded-md text-white bg-blue-400 hover:bg-blue-500"
              >
                Learn More
              </button>
            </div>
          </form>

          {/* Results */}
          {result && (
            <div className="mt-6 bg-green-50 border border-green-400 text-green-700 p-4 rounded-md">
              <h3 className="font-bold text-lg mb-2">Results</h3>
              <p>
                <strong>Is Safe:</strong> {result.malware ? "Yes" : "No"}
              </p>
              <p>
                <strong>Category:</strong> {result.category}
              </p>
              {/* <p><strong>Malicious Score:</strong> {result.malicious_score}</p> */}
              {/* <p><strong>URL Type:</strong> {result.url_type}</p> */}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-400 text-red-700 p-4 rounded-md">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default URLScanner;
