import React from "react";

interface sidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`bg-gray-200 h-vh w-xs ${sidebarOpen ? "" : "hidden"}`}>
      <h1>This is the sidebar</h1>
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>Close</button>
    </div>
  );
};

export default Sidebar;
