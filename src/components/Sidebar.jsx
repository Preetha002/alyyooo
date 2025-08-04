import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaQuestionCircle,
  FaYoutube,
  FaBolt,
  FaFileAlt,
  FaHome,
} from "react-icons/fa";

// ✅ Context
const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar }}>
      <div className="flex bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isOpen ? "ml-64" : "ml-16"
          } relative`}
        >
          {/* ✅ No profile button anywhere */}
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

const Sidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    ...(location.pathname !== "/dashboard"
      ? [{ name: "Home", icon: <FaHome />, path: "/dashboard" }]
      : []),
    { name: "Courses", icon: <FaBookOpen />, path: "/courses" },
    { name: "Quiz", icon: <FaQuestionCircle />, path: "/quiz" },
    { name: "Videos", icon: <FaYoutube />, path: "/videos" },
    { name: "E-Books", icon: <FaBookOpen />, path: "/ebooks" },
    { name: "Tracker", icon: <FaBolt />, path: "/tracker" },
    { name: "Documents", icon: <FaFileAlt />, path: "/documents" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar();
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gradient-to-b from-purple-700 to-blue-600 text-white h-screen fixed left-0 top-0 shadow-lg transition-all duration-300 flex flex-col`}
    >
      {/* Sidebar Toggle */}
      <div className="p-4 flex justify-start">
        <button
          onClick={toggleSidebar}
          className="text-white text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(item.path)}
            className={`flex w-full items-center space-x-3 px-3 py-2 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-white/30"
                : "hover:bg-white/20"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && <span>{item.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
