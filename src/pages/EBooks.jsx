import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EBooks = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const userName = "Preetha"; // later dynamic
  const firstLetter = userName.charAt(0).toUpperCase();

  // ✅ Categories
  const categories = [
    "All",
    "Textbooks",
    "Science & Technology",
    "Mathematics",
    "Languages & Grammar",
    "History & Civics",
    "Self-Help & Motivation",
    "Programming & Coding",
    "Biographies",
    "Comics & Short Stories",
    "Exam Preparation & Study Guides",
    "Fiction Books",
  ];

  // ✅ Book data
  const allBooks = [
    { title: "Attitude is Everything", action: "Read", category: "Self-Help & Motivation" },
    { title: "The Secret", action: "Read", category: "Self-Help & Motivation" },
    { title: "Atomic Habits", action: "Read", category: "Self-Help & Motivation" },
    { title: "The Power of Now", action: "Read", category: "Self-Help & Motivation" },
    { title: "Think and Grow Rich", action: "Borrow", category: "Self-Help & Motivation" },
    { title: "Fear No Evil", action: "Borrow", category: "Self-Help & Motivation" },

    { title: "Clean Code", action: "Borrow", category: "Programming & Coding" },
    { title: "The Pragmatic Programmer", action: "Borrow", category: "Programming & Coding" },
    { title: "Introduction to Algorithms", action: "Read", category: "Programming & Coding" },
    { title: "Artificial Intelligence", action: "Read", category: "Science & Technology" },
    { title: "Python Crash Course", action: "Read", category: "Programming & Coding" },
    { title: "Machine Learning with Python", action: "Read", category: "Science & Technology" },

    { title: "Pride and Prejudice", action: "Read", category: "Fiction Books" },
    { title: "Wuthering Heights", action: "Borrow", category: "Fiction Books" },
    { title: "Adventures of Huckleberry Finn", action: "Read", category: "Fiction Books" },
    { title: "The Great Gatsby", action: "Borrow", category: "Fiction Books" },
    { title: "Sherlock Holmes", action: "Read", category: "Comics & Short Stories" },
    { title: "The Odyssey", action: "Read", category: "Classic Literature" },

    { title: "To Kill a Mockingbird", action: "Borrow", category: "Fiction Books" },
    { title: "1984", action: "Read", category: "Fiction Books" },
    { title: "Brave New World", action: "Borrow", category: "Fiction Books" },
    { title: "The Catcher in the Rye", action: "Read", category: "Fiction Books" },
    { title: "The Alchemist", action: "Read", category: "Fiction Books" },
    { title: "The Glass Menagerie", action: "Join Waitlist", category: "Fiction Books" },
  ];

  // ✅ Filtered books
  const filteredBooks = allBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" || book.category === selectedCategory)
  );

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white transition-all duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-md sticky top-0 z-40">
        {/* Left - Page Title */}
        <h1 className="text-2xl font-bold">E-Books</h1>

        {/* Middle - Search Bar */}
        <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 w-2/5">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none px-2 text-white placeholder-gray-200"
          />
          <FaSearch className="text-gray-200" />
        </div>

        {/* Right - All button + Profile */}
        <div className="flex items-center space-x-4" ref={dropdownRef}>
          {/* All Button (Categories Dropdown) */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-5 py-2 rounded-full bg-white text-purple-600 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              <span>{selectedCategory}</span>
              <FaChevronDown className="text-purple-600" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 max-h-64 overflow-y-auto bg-white text-gray-800 rounded-xl shadow-2xl p-4 z-50">
                <h3 className="text-lg font-bold mb-3">Categories</h3>
                <div className="grid grid-cols-1 gap-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setDropdownOpen(false);
                      }}
                      className={`p-3 rounded-lg text-left font-medium transition ${
                        selectedCategory === cat
                          ? "bg-purple-100 text-purple-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Button */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu((prev) => !prev)}
              className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold shadow-md"
            >
              {firstLetter}
            </button>

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
      </div>

      {/* Content - Books Grid */}
      <div className="flex-1 p-6 space-y-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white/20 rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
            >
              {/* Placeholder cover */}
              <div className="w-32 h-44 bg-white/40 rounded-lg mb-3 flex items-center justify-center text-black font-semibold">
                {book.title.slice(0, 2)}
              </div>

              <h3 className="text-sm font-semibold text-center">{book.title}</h3>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => alert(`Opening ${book.title}...`)}
                className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold"
              >
                {book.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EBooks;
