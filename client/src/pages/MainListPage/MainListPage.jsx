import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../components/Main/MainListHeader/MainListHeader";
import MainListDisplay from "../../components/Main/MainListDisplay/MainListDisplay";
import MainItemDisplay from "../../components/Main/MainItemDisplay/MainItemDisplay";

import "./MainListPage.scss";

const API_URL = "http://localhost:8080";

const MainListPage = () => {
  // Switching between items and lists
  const [activeComponent, setActiveComponent] = useState("lists");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const response = await axios.get(`${API_URL}/lists`);
        setListData(response.data);
      } catch (error) {
        console.error("Error fetching list data:", error);
      }
    };
    fetchListData();
  }, []);

  const handleAdd = (newItem) => {
    setListData([...listData, newItem]);
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
        <MainHeader handleAdd={handleAdd} />
        <div className="mainlist-page__container--list">
          {activeComponent === "lists" ? (
            <MainListDisplay key={listData.length} listData={listData} />
          ) : (
            <MainItemDisplay />
          )}
        </div>
      </main>
    </div>
  );
};

export default MainListPage;
