import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../components/Main/MainListHeader/MainListHeader";
import MainListDisplay from "../../components/Main/MainListDisplay/MainListDisplay";
import MainItemDisplay from "../../components/Main/MainItemDisplay/MainItemDisplay";

import "./MainListPage.scss";

const API_URL = "http://localhost:8080";

const MainListPage = () => {
  const [activeComponent, setActiveComponent] = useState("lists");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="mainlist-page">
      <main className="mainlist-page__container">
        <div className="filter-buttons">
          <button
            className={`button ${activeComponent === "lists" ? "clicked" : ""}`}
            onClick={() => handleButtonClick("lists")}
          >
            All Lists
          </button>
          <button
            className={`button ${activeComponent === "items" ? "clicked" : ""}`}
            onClick={() => handleButtonClick("items")}
          >
            All Items
          </button>
        </div>
        <MainHeader />
        <div className="mainlist-page__container--list">
          {activeComponent === "lists" ? (
            <MainListDisplay />
          ) : (
            <MainItemDisplay />
          )}
        </div>
      </main>
    </div>
  );
};

export default MainListPage;
