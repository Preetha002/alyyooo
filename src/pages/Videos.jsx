import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaThumbsUp,
  FaShareAlt,
  FaCommentDots,
} from "react-icons/fa";

// ✅ Tech-related videos only
const videos = [
  {
    id: 1,
    title: "Core Java Tutorial | SCJP/OCJP",
    channel: "Durga Software",
    views: "1.2M views",
    time: "2 years ago",
    thumbnail: "https://source.unsplash.com/400x250/?java,programming",
    url: "https://www.youtube.com/embed/GoXwIVyNvX0",
  },
  {
    id: 2,
    title: "React Crash Course 2025",
    channel: "Traversy Media",
    views: "850K views",
    time: "6 months ago",
    thumbnail: "https://source.unsplash.com/400x250/?react,webdev",
    url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    channel: "Simplilearn",
    views: "500K views",
    time: "1 year ago",
    thumbnail: "https://source.unsplash.com/400x250/?machinelearning,ai",
    url: "https://www.youtube.com/embed/GwIo3gDZCVQ",
  },
  {
    id: 4,
    title: "Deep Learning with Python",
    channel: "freeCodeCamp",
    views: "1.8M views",
    time: "8 months ago",
    thumbnail: "https://source.unsplash.com/400x250/?deep,python",
    url: "https://www.youtube.com/embed/tPYj3fFJGjk",
  },
  {
    id: 5,
    title: "DSA in 1 Video | Complete Course",
    channel: "Code with Harry",
    views: "2.1M views",
    time: "10 months ago",
    thumbnail: "https://source.unsplash.com/400x250/?datastructure,algorithm",
    url: "https://www.youtube.com/embed/8hly31xKli0",
  },
];

const categories = [
  "All",
  "Programming",
  "Web Development",
  "AI & ML",
  "Data Science",
  "Algorithms",
];

const YouTubePage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  // ✅ Filter videos
  const filteredVideos = videos.filter(
    (v) =>
      v.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" ||
        v.title.toLowerCase().includes(selectedCategory.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white transition-all duration-300">
      {/* Top Bar */}
      <div className="grid grid-cols-3 items-center p-6 bg-white/10 backdrop-blur-md relative">
        {/* Left: Title */}
        <h1 className="text-2xl font-bold">YouTube Learning</h1>

        {/* Center: Bigger Search Bar */}
        <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search tech videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none px-2 text-white placeholder-gray-200 text-lg"
          />
          <FaSearch className="text-gray-200 text-lg" />
        </div>

        {/* Right: Profile Button */}
        <div className="flex justify-end relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full bg-white text-purple-600 font-bold flex items-center justify-center"
          >
            P
          </button>

          {/* Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-12 w-40 bg-white text-gray-800 rounded-lg shadow-lg">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={() => navigate("/")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Categories (clean row, no border/strip) */}
      <div className="flex space-x-3 px-6 py-3">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-white/20 hover:bg-white/30 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer hover:scale-105 transition"
            onClick={() => setActiveVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-semibold text-white text-sm mb-1">
                {video.title}
              </h2>
              <p className="text-xs text-gray-200">{video.channel}</p>
              <p className="text-xs text-gray-300 mb-3">
                {video.views} • {video.time}
              </p>
              <button className="mt-auto w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-lg w-full max-w-3xl overflow-hidden">
            <div className="relative pb-[56.25%]">
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">{activeVideo.title}</h2>
              <p className="text-gray-600">{activeVideo.channel}</p>
              <p className="text-sm text-gray-500 mb-3">
                {activeVideo.views} • {activeVideo.time}
              </p>

              {/* Actions */}
              <div className="flex space-x-4 text-gray-600 mb-3">
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <FaThumbsUp /> <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-500">
                  <FaShareAlt /> <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-purple-500">
                  <FaCommentDots /> <span>Comment</span>
                </button>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubePage;
