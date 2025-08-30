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
      className={`bg-white dark:bg-darkGray h-screen w-[261px] flex flex-col ${
        sidebarOpen ? "" : "hidden"
      }`}
    >
      <h1 className="px-8 py-9 text-2xl">Kanban</h1>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          Allboards
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-black dark:text-white"
          >
            Close
          </button>
          <button
            onClick={handleChange}
            className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 "
          >
            Darkasdasdasdasd
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
