import "./Boards.css";
import "../App.css";
import { useState } from "react";

const Boards = () => {
  const [boards, setBoards] = useState([
    {
      name: "Platform Launch",
    },
    {
      name: "Marketing Plan",
    },
    {
      name: "Roadmap",
    },
  ]);

  return (
    <div className="boards--container">
      <div className="logo">Kanban</div>
      <div className="main-content">
        <div className="boards-list">
          <span className="boards-count">All boards ({boards.length})</span>
          {boards.map((ele, index) => {
            return <h1>{boards[index].name}</h1>;
          })}
          <span className="create-new-board">+ create new boards</span>
        </div>
        <div className="sidebar-control">
          <div className="dark-mode">darkmode</div>
          <span className="hide-sidebar-label">Hide Sidebar</span>
        </div>
      </div>
    </div>
  );
};
export default Boards;
