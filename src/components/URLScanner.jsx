import React, { useState } from 'react';
import axios from 'axios';

const URLScanner = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      console.log(url);
      const response = await axios.get(`https://python-server-1.vercel.app/check-url`, {
        params: {
          url: url
        },
      });
      const data = response.data;

      console.log(response);

      if (data.success === false) {
        setError('Failed to check the URL');
      } else {
        setResult(data);
      }
    } catch (err) {
      setError('Error while checking the URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">URL Scanner</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-200">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Scan a URL</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="url-input" className="block text-gray-700 font-medium mb-2">
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
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded-md text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition`}
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check URL'}
            </button>
          </form>

          {/* Results */}
          {result && (
            <div className="mt-6 bg-green-50 border border-green-400 text-green-700 p-4 rounded-md">
              <h3 className="font-bold text-lg mb-2">Results</h3>
              <p><strong>Is Safe? :</strong> {result.malware ? 'No' : 'Yes'}</p>
              <p><strong>IP Address:</strong> {result.ip_address}</p>
              <p><strong>Content Type :</strong> {result.content_type}</p>
              <p><strong>Is Adult? :</strong> {result.adult ? 'Yes' : 'No'}</p>
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
