import React from "react";
import { useState, useEffect } from "react";

interface sidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = () => {
    setDarkMode(!darkMode);
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
      className={`bg-white dark:bg-darkGray h-vh w-[261px] ${
        sidebarOpen ? "" : "hidden"
      }`}
    >
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-black dark:text-white"
      >
        Close
      </button>
      <button
        onClick={handleChange}
        className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 "
      />
    </div>
  );
};

export default Sidebar;
