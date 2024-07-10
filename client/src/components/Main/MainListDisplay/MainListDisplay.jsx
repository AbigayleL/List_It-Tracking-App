import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import MainComponents from "../MainComponents/MainComponents";

import "./MainListDisplay.scss";

const API_URL = "http://localhost:8080";
function MainListDisplay() {
  const navigate = useNavigate();
  const [mainlist, setmainlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const listResponse = await axios.get(`${API_URL}/lists`);
        // Set state

        setmainlist(listResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error encountered, Please try again later.");
      }
    };
    fetchlist();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-list-comps">
      {mainlist.map((item) => (
        <MainComponents
          key={item.id}
          name={item.list_name}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default MainListDisplay;
