// src/components/DashboardCards.jsx
import React from "react";

const DashboardCards = ({ username }) => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-6">
        Hey {username}! Still online? Here you can learn at any time!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Learning Hours */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Learning Hours</h3>
          <p className="text-3xl font-bold text-white">3h 30m</p>
          <p className="text-sm text-gray-200">this fiscal year</p>
        </div>

        {/* Trending Courses */}
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
    </div>
  );
};

export default DashboardCards;
