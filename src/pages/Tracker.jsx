import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy data for courses
const courses = [
  {
    title: "Introduction to Artificial Intelligence",
    totalUsers: 231169,
    completedUsers: 178241,
    progress: 70,
  },
  {
    title: "Basics of Linear Algebra using Python",
    totalUsers: 28575,
    completedUsers: 8387,
    progress: 6,
  },
  {
    title: "Statistical Inference using Python",
    totalUsers: 13558,
    completedUsers: 10829,
    progress: 100,
  },
  {
    title: "Probability Distribution using Python",
    totalUsers: 13513,
    completedUsers: 11437,
    progress: 100,
  },
];

// Dummy contributions data (52 weeks × 7 days)
const contributions = Array.from({ length: 52 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)) // levels 0–4
);

const months = [
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
];
const weekdays = ["Mon", "Wed", "Fri"];

const Tracker = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-md relative z-50">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Tracker <span role="img">📊</span>
        </h1>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold shadow-lg"
          >
            P
          </button>

          {/* Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-xl z-50">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
              >
                Profile
              </button>
              <button
                onClick={() => navigate("/")} // ✅ redirects to login page
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-8 relative z-0">
        {/* Course Progress Section */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="py-2 px-3">Courses</th>
                  <th className="py-2 px-3">Total Users</th>
                  <th className="py-2 px-3">Completed Users</th>
                  <th className="py-2 px-3">My Progress</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/20 hover:bg-white/10"
                  >
                    <td className="py-2 px-3">{course.title}</td>
                    <td className="py-2 px-3">{course.totalUsers}</td>
                    <td className="py-2 px-3">{course.completedUsers}</td>
                    <td className="py-2 px-3">
                      <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="gray"
                            strokeWidth="4"
                            fill="none"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="limegreen"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={2 * Math.PI * 20}
                            strokeDashoffset={
                              2 * Math.PI * 20 -
                              (course.progress / 100) * (2 * Math.PI * 20)
                            }
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                          {course.progress}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* My Learning Section */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">My Learning</h2>

          {/* Weekly Streak */}
          <div className="flex justify-between items-center bg-white/10 p-4 rounded-lg">
            <div>
              <h3 className="font-bold">Start a weekly streak 🔥</h3>
              <p className="text-sm text-gray-200">
                Watch 5 minutes of video per day to reach your goals.
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-2xl font-bold">0</span>
                <span className="text-gray-200">weeks</span>
                <span className="text-sm text-gray-300">Current streak</span>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#ccc"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#22c55e"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset="176"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-400">
                  0%
                </span>
              </div>
              <p className="text-xs mt-2 text-gray-200">0/30 course min</p>
              <p className="text-xs text-gray-200">0/1 visits</p>
              <p className="text-xs text-gray-200">Jul 27 - Aug 2</p>
            </div>
          </div>
        </div>

        {/* Contributions Section */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Contributions</h2>

          {/* Month labels */}
          <div className="flex ml-12 mb-1 space-x-8 text-xs text-gray-200">
            {months.map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </div>

          <div className="flex">
            {/* Weekdays */}
            <div className="flex flex-col mr-2 text-xs text-gray-200 space-y-6">
              {weekdays.map((d, idx) => (
                <span key={idx}>{d}</span>
              ))}
            </div>

            {/* Heatmap */}
            <div className="grid grid-rows-7 grid-flow-col gap-1">
              {contributions.map((week, i) =>
                week.map((day, j) => {
                  const levels = [
                    "bg-gray-700/40",
                    "bg-green-200",
                    "bg-green-400",
                    "bg-green-600",
                    "bg-green-800",
                  ];
                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`w-3 h-3 rounded-sm ${levels[day]}`}
                    />
                  );
                })
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-end mt-2 space-x-2 text-xs text-gray-200">
            <span>Less</span>
            <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
