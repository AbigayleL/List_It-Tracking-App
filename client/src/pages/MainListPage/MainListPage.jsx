import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../components/Main/MainListHeader/MainListHeader";
import MainListDisplay from "../../components/Main/MainListDisplay/MainListDisplay";

import "./MainListPage.scss";

const API_URL = "http://localhost:8080";

const MainListPage = () => {
  // Do this later
  const [showMainList, setShowMainList] = useState(true);

  return (
    <div className="mainlist-page">
      <main className="mainlist-page__container">
        <div className="filter-buttons">
          <button className="button clicked"> All Lists </button>
          <button className="button"> All Items</button>
        </div>
        <MainHeader />
        <div className="mainlist-page__container--list">
          <MainListDisplay />
        </div>
      </main>
    </div>
  );
};

export default MainListPage;
