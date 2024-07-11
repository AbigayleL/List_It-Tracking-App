import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ItemComponents.scss";

function ListComponents({ id, name, image, type_id }) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-image" src={image} alt={name} />
      </div>
      <div className="card-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default ListComponents;
