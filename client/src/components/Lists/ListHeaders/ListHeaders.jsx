import { Link, useNavigate } from "react-router-dom";
import "./ListHeaders.scss";
import add from "../../../assets/icons/add.svg";

function ListHeaders({ listInfo }) {
  const navigate = useNavigate();

  return (
    <div className="list-header">
      <div className="list-header-top__container">
        <div className="bubble-header ">
          <h1 className="list-header-title">{listInfo[0].list_name}</h1>
        </div>
      </div>

      <div className="list-header-nav">
        <input
          type="text"
          className="list-header--search"
          placeholder="Search..."
          name="search"
        />
        <button className="button">filter</button>
        <div className="add-list-button">
          <button className="button">
            <img src={add} alt="+" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListHeaders;
