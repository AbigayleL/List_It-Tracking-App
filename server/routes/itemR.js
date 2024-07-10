import express from "express";
import fs from "fs";
import crypto from "crypto";
import cors from "cors";
import "dotenv/config";

import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const router = express.Router();

// Getting everything in all lists

const getAllInventories = async (req, res) => {
  try {
    const mangalist = await knex("manga").select("*");
    const customlist = await knex.select("*").from("custom");

    const combinedData = {
      mangalist,
      customlist,
    };

    combinedData.mangalist.forEach((item) => {
      if (item.image) {
        item.image = item.image.toString("base64");
      }
    });

    combinedData.customlist.forEach((item) => {
      if (item.image) {
        item.image = item.image.toString("base64");
      }
    });

    res.status(200).json(combinedData);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/", getAllInventories);

export default router;