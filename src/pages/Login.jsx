import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import Logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Google login failed");
    }
  };

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl w-96 text-center shadow-lg">
        {/* Logo */}
        <img src={Logo} alt="Alyyooo Logo" className="h-16 mx-auto mb-6" />

        <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        {/* Email/Password Form */}
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none"
            required
          />

          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-white hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
          >
            Continue Learning
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-white/50" />
          <span className="px-2 text-white text-sm">OR</span>
          <hr className="flex-grow border-white/50" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg py-2 shadow hover:opacity-90 transition"
        >
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google"
            className="h-6 w-6 mr-2 bg-white rounded-full p-1"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
