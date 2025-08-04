import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Create Your Account</h1>
        <p className="text-sm mb-6">Join Alyyooo and start learning smarter</p>
        {/* You can add signup form fields here */}
        <button className="w-full py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
