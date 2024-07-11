import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MainComponents.scss";

function MainComponents({ id, name, image, type_id }) {
  return (
    <Link to={`/types/items/${type_id}/${id}`} className="main-component">
      <div className="card">
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

export default MainComponents;
