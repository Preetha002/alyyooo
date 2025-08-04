import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔐 Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

// 🏠 Dashboard + Sidebar Pages
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Quiz from "./pages/Quiz";
import Videos from "./pages/Videos";
import EBooks from "./pages/EBooks";
import Tracker from "./pages/Tracker";
import Documents from "./pages/Documents";

// ✨ Extra Pages
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile";

// ✅ Sidebar Provider
import { SidebarProvider } from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 Authentication (no sidebar here) */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 🏠 Pages with Sidebar */}
        <Route
          path="/dashboard"
          element={
            <SidebarProvider>
              <Dashboard />
            </SidebarProvider>
          }
        />
        <Route
          path="/courses"
          element={
            <SidebarProvider>
              <Courses />
            </SidebarProvider>
          }
        />
        <Route
          path="/quiz"
          element={
            <SidebarProvider>
              <Quiz />
            </SidebarProvider>
          }
        />
        <Route
          path="/videos"
          element={
            <SidebarProvider>
              <Videos />
            </SidebarProvider>
          }
        />
        <Route
          path="/ebooks"
          element={
            <SidebarProvider>
              <EBooks />
            </SidebarProvider>
          }
        />
        <Route
          path="/tracker"
          element={
            <SidebarProvider>
              <Tracker />
            </SidebarProvider>
          }
        />
        <Route
          path="/documents"
          element={
            <SidebarProvider>
              <Documents />
            </SidebarProvider>
          }
        />

        {/* Extra */}
        <Route
          path="/chatbot"
          element={
            <SidebarProvider>
              <Chatbot />
            </SidebarProvider>
          }
        />
        <Route
          path="/profile"
          element={
            <SidebarProvider>
              <Profile />
            </SidebarProvider>
          }
        />
      </Routes>
    </Router>
  );
}

// ✅ THIS LINE WAS MISSING
export default App;
