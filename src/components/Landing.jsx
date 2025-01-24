import React from "react";
import landing1 from "../assets/landing1.jpg";
import gmailLogo from "../assets/gmailLogo.png";
import meet from "../assets/meet.png";
import bank from "../assets/bank.png";
import printer from "../assets/printer.png";
import url from "../assets/url.png";
import bank from '../assets/bank.png'
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col">
        {/* Background Layer with Blurred Effect */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522643527310-7222a3f57bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          {/* Optional: Use a semi-transparent overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex justify-between items-center p-4 px-8 bg-white shadow-md">
          <div className="text-gray-800 text-2xl font-bold">Technik</div>
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
        <div className="flex-grow flex items-center justify-center z-10 text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Residential Elderly Care For All Your Needs
            </h1>
            <p className="mt-4 text-gray-50">
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
            Technik is trusted by over 500,000+ users across the US and Canada!
          </p>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-gray-50 py-16 px-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Our Essential Tools
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-4">
          {/* Tool Item Component */}
          {[
            {
              name: "Gmail",
              imgSrc: gmailLogo,
              difficulty: "Easy",
              navigationPlace: "/gmail-desktop",
            },
            {
              name: "Google Meet",
              imgSrc: meet,
              difficulty: "Medium",
              navigationPlace: "/meet-desktop",
            },
            {
              name: "Printer",
              imgSrc: printer,
              difficulty: "Easy",
              navigationPlace: "/",
            },
            {
              name: "Banking",
              imgSrc: bank,
              difficulty: "Medium",
              navigationPlace: "/bank-desktop",
            },
            {
              name: "URL Safety",
              imgSrc: url,
              difficulty: "Service",
              navigationPlace: "/url-scan",
            },
          ].map(({ name, imgSrc, difficulty, navigationPlace }) => (
            <div
              className="text-center relative group transition-transform transform hover:scale-105"
              key={name}
            >
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-300 transition-all">
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-12 h-12 object-contain"
                  onClick={() => navigate(`${navigationPlace}`)}
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {name}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">{difficulty}</p>
              {/* Tooltip */}
              <div className="absolute w-[120px] left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1 shadow-lg">
                Learn how to use {name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue-100 py-16 px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          How It Works?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Step 1 */}
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Describe Needs
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Easily describe your needs with a few clicks, and we'll help match
              you with the perfect solution.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Choose Your Hero
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Select from a curated list of trusted professionals to tackle your
              challenge effortlessly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Stay Connected
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Communicate seamlessly and stay updated at every step of the
              process.
            </p>
          </div>
        </div>
      </div>

      {/* Why Families Choose Section */}
      <div className="py-24 px-8 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 space-y-6 max-w-xl">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Learn Why Families Choose Elderly Care
          </h2>
          <p className="text-lg text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            You need to be sure there isn’t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Elderly Care"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-8 text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What Families Are Saying
        </h2>
        <p className="text-lg text-gray-700 italic max-w-2xl mx-auto">
          “We’ve been using the elderly care services for the past year, and the
          experience has been life-changing. The caregivers are kind,
          compassionate, and truly treat our loved one like family. We feel so
          relieved knowing they’re in good hands. Highly recommended!”
        </p>
        <p className="mt-6 text-orange-600 font-semibold text-xl">Jyoti Shah</p>
        <p className="text-gray-600 mt-2">Daughter of Mr. Sandeep Shah</p>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8 text-center">
        <p>Copyright © technik.com. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
