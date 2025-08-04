import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const userName = "Preetha";
  const firstLetter = userName.charAt(0).toUpperCase();
  const navigate = useNavigate();

  const categories = [
    "Most Popular",
    "Generative AI",
    "AI & Machine Learning",
    "Data Science & Business Analytics",
    "Project Management",
    "Cyber Security",
    "Agile and Scrum",
    "Cloud Computing & DevOps",
    "Business and Leadership",
    "Software Development",
    "Product and Design",
  ];

  const allCourses = [
    {
      title: "PMP® Certification Training",
      partner: "Project Management Institute",
      duration: 4,
      unit: "Weeks",
      type: "Paid",
      start: "2nd Aug '25",
    },
    {
      title: "Advanced Executive Program in Cybersecurity",
      partner: "IIIT Bangalore",
      duration: 6,
      unit: "Months",
      type: "Paid",
      start: "31st Jul '25",
    },
    {
      title: "Certified ScrumMaster® (CSM)",
      partner: "Scrum Alliance",
      duration: 3,
      unit: "Days",
      type: "Free",
      start: "30th Jul '25",
    },
    {
      title: "Data Science with Python",
      partner: "IBM",
      duration: 8,
      unit: "Weeks",
      type: "Paid",
      start: "10th Aug '25",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Most Popular");
  const [selectedType, setSelectedType] = useState("");
  const [duration, setDuration] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const applyFilters = () => {
    let filtered = allCourses;
    if (selectedType) {
      filtered = filtered.filter((c) => c.type === selectedType);
    }
    if (duration) {
      filtered = filtered.filter((c) => String(c.duration) === duration);
    }
    return filtered;
  };

  const resetFilters = () => {
    setSelectedType("");
    setDuration("");
  };

  const filteredCourses = applyFilters();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white transition-all duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold">Courses</h1>
        </div>

        <div className="flex-1 px-6">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full p-2 rounded-xl bg-white/20 placeholder-gray-200 text-white outline-none"
          />
        </div>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold shadow-md"
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

      {/* Filters + Categories */}
      <div className="flex p-6 gap-4 items-center">
        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setCatOpen(!catOpen);
              if (!catOpen) setFiltersOpen(false);
            }}
            className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-md font-semibold hover:bg-white/30 transition"
          >
            {selectedCategory}
          </button>
          {catOpen && (
            <div className="absolute mt-2 bg-white/20 backdrop-blur-lg text-white rounded-lg shadow-lg w-56 z-10">
              <ul>
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCatOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-white/30 transition ${
                      selectedCategory === cat ? "bg-blue-600 font-semibold" : ""
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="relative">
          <button
            onClick={() => {
              setFiltersOpen(!filtersOpen);
              if (!filtersOpen) setCatOpen(false);
            }}
            className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-md font-semibold hover:bg-white/30 transition"
          >
            Filters
          </button>
          {filtersOpen && (
            <div className="absolute mt-2 bg-white/20 backdrop-blur-lg text-white rounded-lg shadow-lg w-64 p-4 z-10">
              <h3 className="font-semibold mb-2">Filter Options</h3>
              <div className="mb-3">
                <label className="block text-sm mb-1">Course Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-white/10 text-white rounded-md p-2 outline-none"
                >
                  <option value="">All</option>
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Duration (Weeks)</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-white/10 text-white rounded-md p-2 outline-none placeholder-gray-300"
                  placeholder="Enter weeks"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Apply
                </button>
                <button
                  onClick={() => {
                    resetFilters();
                    setFiltersOpen(false);
                  }}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-lg rounded-xl p-5 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 bg-white/30 rounded-md flex items-center justify-center font-bold">
                  {course.partner[0]}
                </div>
                <span className="text-sm text-gray-200">{course.partner}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-200">
                Duration: {course.duration} {course.unit}
              </p>
              <p className="text-sm text-gray-200">Type: {course.type}</p>
              <p className="text-sm text-gray-200 mb-3">
                Cohort Starts: {course.start}
              </p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold">
                View Program
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-200">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
