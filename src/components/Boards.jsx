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
      <div className="name-unknown">
        <div className="boards-list">
          <span>All boards ({boards.length})</span>
          {boards.map((ele, index) => {
            return <h1>{boards[index].name}</h1>;
          })}
          <span>+ create new boards</span>
        </div>
        <div className="low-container">
          <div className="dark-mode">darkmode</div>
          <span>Hide Sidebar</span>
        </div>
      </div>
    </div>
  );
};
export default Boards;
