import "./Boards.css";
import "../App.css";
import { useState } from "react";
import board from "../assets/icon-board.svg";
import { ReactComponent as Logo } from "../assets/icon-board.svg";
import useDarkMode from "./useDarkMode";

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

  const [darkMode, toggleDarkMode] = useDarkMode();

  console.log(darkMode);
  return (
    <div className="boards--container">
      <div className="logo">Kanban</div>
      <div className="main-content">
        <div className="boards-list">
          <span className="boards-count font-heading-s">
            All boards ({boards.length})
          </span>
          {boards.map((ele, index) => {
            return (
              <div className="list-element">
                <img className="board-image" src={board} alt="" />
                <h1 className="font-heading-m">{boards[index].name}</h1>
              </div>
            );
          })}
          <div className="create-element">
            <div className="board-icon">
              <Logo className="board-image1" />
            </div>{" "}
            <span className="create-new-board font-heading-m">
              + Create new boards
            </span>
          </div>
        </div>
        <div className="sidebar-control">
          {/* <div className="dark-mode">darkmode</div> */}
          <input
            type="checkbox"
            id="darkmode-toggle"
            onClick={() => toggleDarkMode()}
            checked={darkMode}
          />
          <label for="darkmode-toggle"></label>
          <span className="hide-sidebar-label">Hide Sidebar</span>
        </div>
      </div>
    </div>
  );
};
export default Boards;
