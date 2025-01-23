import React from "react";
import landing1 from '../assets/landing1.jpg'

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col">
  {/* Background Layer with Blurred Effect */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522643527310-7222a3f57bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
  >
    {/* Optional: Use a semi-transparent overlay */}
    <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"></div>
  </div>

  {/* Navbar */}
  <nav className="relative z-10 flex justify-between items-center p-4 bg-white shadow-md">
    <div className="text-gray-800 text-2xl font-bold">Elderly Care</div>
    <ul className="flex space-x-6 text-gray-800">
      <li><a href="#services" className="hover:underline">Services</a></li>
      <li><a href="#about" className="hover:underline">About Us</a></li>
      <li><a href="#contact" className="hover:underline">Contact</a></li>
      <li><a href="#faq" className="hover:underline">FAQ</a></li>
    </ul>
  </nav>

  {/* Main Content */}
  <div className="flex-grow flex items-center justify-center z-10 text-center">
    <div>
      <h1 className="text-4xl font-bold text-gray-800">
        Residential Elderly Care For All Your Needs
      </h1>
      <p className="mt-4 text-gray-600">
        Because they can no longer take care of themselves
      </p>
      <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600">
        Get Started
      </button>
    </div>
  </div>

  {/* Footer Info */}
  <div className="absolute bottom-6 w-full text-center z-10">
    <p className="text-gray-600">
      Elderly Care is trusted by over 500,000+ users across the US and Canada!
    </p>
  </div>
</div>


     {/* Tools Section */}
<div className="bg-white py-16 px-8 text-center">
  <h2 className="text-2xl font-bold text-gray-800">Our Essential Tools</h2>
  <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
    {/* Gmail Icon */}
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
        <img src="https://img.icons8.com/ios-filled/50/000000/gmail.png" alt="Gmail" className="w-10 h-10" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800">Gmail</h3>
      <p className="mt-2 text-gray-600">Easy</p>
    </div>

    {/* Google Meet Icon */}
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
        <img src="https://img.icons8.com/ios-filled/50/000000/google-meet.png" alt="Google Meet" className="w-10 h-10" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800">Google Meet</h3>
      <p className="mt-2 text-gray-600">Medium</p>
    </div>

    {/* Printer Icon */}
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
        <img src="https://img.icons8.com/ios-filled/50/000000/printer.png" alt="Printer" className="w-10 h-10" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800">Printer</h3>
      <p className="mt-2 text-gray-600">Easy</p>
    </div>

    {/* URL Safety Checker Icon */}
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
        <img src="https://img.icons8.com/ios-filled/50/000000/url-safety-checker.png" alt="URL Safety Checker" className="w-10 h-10" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800">URL Safety Checker</h3>
      <p className="mt-2 text-gray-600">N/A</p>
    </div>
  </div>
</div>


      {/* How It Works Section */}
      <div className="bg-orange-100 py-16 px-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          How It Works?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Describe Needs
            </h3>
            <p className="mt-2 text-gray-600">
              All the Lorem Ipsum generators on the Internet to repeat
              predefined chunks as necessary.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Choose Your Hero
            </h3>
            <p className="mt-2 text-gray-600">
              All the Lorem Ipsum generators on the Internet to repeat
              predefined chunks as necessary.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Stay Connected
            </h3>
            <p className="mt-2 text-gray-600">
              All the Lorem Ipsum generators on the Internet to repeat
              predefined chunks as necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Why Families Choose Section */}
      <div className="bg-white py-16 px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Learn Why Families Choose Elderly Care
          </h2>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don’t look even slightly believable.
          </p>
          <p className="mt-4 text-gray-600">
            You need to be sure there isn’t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Elderly Care"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          What Families Are Saying
        </h2>
        <p className="text-gray-600 italic">
          “There are many variations of passages of Lorem Ipsum available, but
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don’t look even slightly believable.”
        </p>
        <p className="mt-4 text-orange-500 font-medium">JOHN SMITH</p>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8 text-center">
        <p>Copyright © domainname.com. All Rights Reserved.</p>
        <p>Designed by buylandingpagedesign.com</p>
      </div>
    </div>
  );
};

export default Landing;
