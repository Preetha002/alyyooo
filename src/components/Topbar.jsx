// src/components/Topbar.jsx
import React from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Topbar = ({
  sidebarOpen,
  setSidebarOpen,
  profileOpen,
  setProfileOpen,
  username,
}) => {
  const profileLetter = username.charAt(0).toUpperCase();

  return (
    <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md">
      {/* Sidebar toggle + Logo */}
      <div className="flex items-center space-x-3">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center px-4">
        <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 w-full max-w-md">
          <FaSearch className="text-gray-200 mr-2" />
          <input
            type="text"
            placeholder="Search for courses, videos..."
            className="bg-transparent w-full outline-none text-white placeholder-gray-300"
          />
        </div>
      </div>

      {/* Profile Circle */}
      <div
        onClick={() => setProfileOpen(!profileOpen)}
        className="h-10 w-10 flex items-center justify-center bg-white text-purple-600 font-bold rounded-full cursor-pointer relative"
      >
        {profileLetter}

        {profileOpen && (
          <div className="absolute right-0 mt-12 bg-white text-black rounded-lg shadow-md w-40">
            <Link
              to="/profile"
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              Profile
            </Link>
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
              Settings
            </button>
            <Link
              to="/"
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
