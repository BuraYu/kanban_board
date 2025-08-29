import React from "react";
import { useState, useEffect } from "react";

interface sidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = () => {
    console.log("clicked");
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 h-vh w-xs ${
        sidebarOpen ? "" : "hidden"
      }`}
    >
      <button
        onClick={handleChange}
        className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 "
      >
        Toggle Dark Mode
      </button>
      <h1 className="text-black dark:text-white">This is the sidebar</h1>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-black dark:text-white"
      >
        Close
      </button>
    </div>
  );
};

export default Sidebar;
