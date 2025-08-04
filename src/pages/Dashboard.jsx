import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Dashboard = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi Preetha 👋, nice to see you back! Is there something I can help you with?",
    },
  ]);
  const [input, setInput] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const username = "Preetha"; // Replace with dynamic user later
  const firstLetter = username.charAt(0).toUpperCase();
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  // Dummy Recommended Courses
  const recommendedCourses = [
    {
      id: 1,
      title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
      instructor: "Julian Melanson",
      rating: 4.5,
      learners: "50,634",
      price: "₹589",
      oldPrice: "₹2,799",
      tag: "Bestseller",
      image: "https://source.unsplash.com/400x300/?ai,technology",
    },
    {
      id: 2,
      title: "AI-Powered Copywriting with ChatGPT",
      instructor: "Tomáš Morávek",
      rating: 4.4,
      learners: "1,937",
      price: "₹589",
      oldPrice: "₹3,199",
      tag: "Premium",
      image: "https://source.unsplash.com/400x300/?copywriting,marketing",
    },
    {
      id: 3,
      title: "ChatGPT, DeepSeek, Grok & AI Assistants",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      learners: "757",
      price: "₹669",
      oldPrice: "₹889",
      tag: "Premium",
      image: "https://source.unsplash.com/400x300/?chatbot,assistant",
    },
    {
      id: 4,
      title: "Upgrade Social Media with ChatGPT",
      instructor: "Anton Voroniuk",
      rating: 4.2,
      learners: "333",
      price: "₹599",
      oldPrice: "₹799",
      tag: "Premium",
      image: "https://source.unsplash.com/400x300/?social,media",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white font-poppins">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Center Section: Search Bar */}
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

        {/* Right Section: Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-white text-purple-600 font-bold flex items-center justify-center shadow-md"
          >
            {firstLetter}
          </button>

          {/* Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate("/profile");
                }}
                className="w-full px-4 py-2 hover:bg-gray-200 text-left rounded-t-lg"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate("/");
                }}
                className="w-full px-4 py-2 hover:bg-gray-200 text-left rounded-b-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <h2 className="text-2xl font-bold">
          Hey {username}! Still online? Here you can learn at any time!
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Learning Hours</h3>
            <p className="text-3xl font-bold text-white">3h 30m</p>
            <p className="text-sm text-gray-200">this fiscal year</p>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Trending Courses</h3>
            <ul className="space-y-2 text-sm">
              <li className="p-2 bg-white/20 rounded-md">AI for Beginners</li>
              <li className="p-2 bg-white/20 rounded-md">
                Fullstack Development
              </li>
              <li className="p-2 bg-white/20 rounded-md">
                Data Science with Python
              </li>
            </ul>
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Recommended Courses</h3>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {recommendedCourses.map((course) => (
              <div
                key={course.id}
                className="min-w-[250px] bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {course.title}
                  </h4>
                  <p className="text-xs text-gray-200 mb-2">
                    {course.instructor}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-300">
                    <span>⭐ {course.rating}</span>
                    <span>{course.learners} learners</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-bold text-yellow-300">
                      {course.price}
                    </span>
                    <span className="line-through text-gray-400 text-xs">
                      {course.oldPrice}
                    </span>
                  </div>
                  <span className="mt-2 inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded">
                    {course.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="w-80 h-96 flex flex-col rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/20 text-white overflow-hidden mb-4 animate-fadeIn">
            <div className="px-4 py-2 bg-white/10 border-b border-white/20">
              <h2 className="font-semibold flex items-center">
                Alyyooo Chatbot 🤖
              </h2>
            </div>

            <div className="flex-1 p-3 space-y-2 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                    msg.sender === "bot"
                      ? "bg-purple-500/80 text-white self-start"
                      : "bg-blue-600/80 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-2 border-t border-white/20 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-lg bg-white/20 placeholder-gray-200 text-white outline-none"
              />
              <button
                onClick={handleSend}
                className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          🤖
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
