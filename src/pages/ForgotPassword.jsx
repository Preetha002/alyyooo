import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
        <p className="text-sm mb-6">
          Enter your email and we’ll send you instructions to reset your password.
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-white/20 text-white placeholder-gray-300 w-full px-4 py-2 rounded-lg outline-none mb-4"
        />
        <button className="w-full py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
