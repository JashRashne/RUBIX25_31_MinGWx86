import React from "react";
import logo from "../assets/meet.png";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="h-screen max-w-[100%] flex flex-col">
      <nav className="relative z-10 flex justify-between items-center p-4 px-8 bg-white shadow-md">
        <div
          className="text-gray-800 text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Technik
        </div>
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
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-[100%] w-full">{children}</div>
    </div>
  );
};

export default Layout;
