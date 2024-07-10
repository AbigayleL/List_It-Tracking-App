import { Link, useNavigate } from "react-router-dom";
import "./MainListHeader.scss";

import add from "../../../assets/icons/add.svg";

export const MainListHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="main-header">
      <div className="main-header-top__container">
        <div className="bubble-header ">
          <h1 className="main-header-title">ALL LISTS</h1>
        </div>
      </div>

      <div className="main-header-nav">
        <input
          type="text"
          className="main-header--search"
          placeholder="Search..."
          name="search"
        />
        <div className="add-list-button">
          <button className="button">
            <img src={add} alt="+" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainListHeader;
