import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemComponents from "../ItemComponents/ItemComponents";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./ItemDisplay.scss";

const API_URL = "http://localhost:8080";
function ListDisplay() {
  const { type_id, listId } = useParams();
  const [currentlist, setcurrentlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const listResponse = await axios.get(
          `${API_URL}/types/items/${type_id}/${listId}`
        );

        setcurrentlist(listResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error encountered, Please try again later.");
      }
    };
    fetchlist();
  }, [type_id, listId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="list-comps">
      {currentlist.map((item) => (
        // console.log(item),
        <ItemComponents key={item.id} name={item.title} image={item.image} />
      ))}
    </div>
  );
}

export default ListDisplay;
