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
    const customlist = await knex("custom").select("*");

    const combinedList = [...mangalist, ...customlist];

    combinedList.forEach((item) => {
      if (item.image) {
        item.image = item.image.toString("base64");
      }
    });

    res.status(200).json(combinedList);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/", getAllInventories);

// Get all manga items from a specific list

const getTableNameByType = (type_id) => {
  switch (type_id) {
    case "1":
      return "manga";
    case "8":
      return "custom";
    default:
      throw new Error("Unknown type");
  }
};

const getAllListInventory = async (req, res) => {
  const { type_id, listId } = req.params;
  console.log("Type ID:", type_id);
  try {
    const tableName = getTableNameByType(type_id);
    const items = await knex(tableName).where({ main_list_id: listId });

    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/items/:type_id/:listId", getAllListInventory);

export default router;
