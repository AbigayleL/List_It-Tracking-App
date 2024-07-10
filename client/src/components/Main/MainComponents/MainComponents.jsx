import React from "react";
import { useState, useEffect } from "react";

import "./MainComponents.scss";

function MainComponents({ name, image }) {
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

export default MainComponents;
