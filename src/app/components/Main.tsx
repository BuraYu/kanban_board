import React from "react";

interface mainProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<mainProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex">
      <h1>Main</h1>
      {sidebarOpen ? null : (
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>Open</button>
      )}
    </div>
  );
};

export default Main;
