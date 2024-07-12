import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ItemComponents.scss";
/*

$green: #97b6a3;
$red: #d36363;
$blue: #004aad;
$grey: #ccc;

*/

function ItemComponents({ id, name, image, type_id, progress }) {
  const getBorderColor = (progress) => {
    console.log(progress);
    if (progress == "Completed") {
      return "#97b6a3";
    } else if (progress == "Ongoing") {
      return "#004aad";
    } else if (progress == "Dropped") {
      return "#d36363";
    } else if (progress == "On-Hold") {
      return "#9A89AB";
    } else if (progress == "Planned") {
      return "#465285";
    } else {
      return "#ccc";
    }
  };
  return (
    <Link to={`/types/item/${type_id}/${id}`} className="item-component">
      <div
        className="card"
        style={{ border: `5px solid ${getBorderColor(progress)}` }}
      >
        <div className="card-body">
          <img className="card-image" src={image} alt={name} />
        </div>
        <div className="card-name">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ItemComponents;
