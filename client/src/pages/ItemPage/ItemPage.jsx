import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:8080";

const ItemPage = () => {
  return (
    <div className="item-page">
      <main className="item-page__container"></main>
    </div>
  );
};

export default ItemPage;
