import express from "express";
import "dotenv/config";
import { check, validationResult } from "express-validator";

import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const router = express.Router();

const getTableNameByType = (type_id) => {
  switch (type_id) {
    case "1":
      return "manga";
    case "2":
      return "tv_shows";
    case "8":
      return "custom";
    default:
      throw new Error("Unknown type");
  }
};

// Getting everything in all lists

const getAllInventories = async (req, res) => {
  try {
    const mangalist = await knex("manga").select("*");
    const customlist = await knex("custom").select("*");
    const tvlist = await knex("tv_shows").select("*");

    const combinedList = [...mangalist, ...customlist, ...tvlist];

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

//Getting the items from a list

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

// Adding an item to the list

// Validation middleware for custom items
const validateItem = [
  check("title").notEmpty().withMessage("Title is required"),
  check("progress").notEmpty().withMessage("Progress is required"),
];

// Route to add item to list
router.post("/items/:type_id/:listId", validateItem, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { type_id, listId } = req.params;
  const data = req.body;

  try {
    // Determine the table name based on type_id
    const tableName = getTableNameByType(type_id);

    let newItem = {
      main_list_id: listId,
      title: data.title,
      image: data.image,
      description: data.description || "",
    };

    // Additional fields for manga
    if (type_id === "1") {
      newItem = {
        ...newItem,
        completed: data.completed || false,
        chapters: data.chapters || 0,
        chapter_read: data.chapter_read || 0,
        progress: data.progress || "",
        link: data.link || "",
        last_updated: data.last_updated || null,
        last_read: data.last_read || null,
      };
    }
    if (type_id === "2") {
      newItem = {
        ...newItem,
        completed: data.completed || false,
        episodes: data.episodes || 0,
        episodes_watched: data.episodes_watched || 0,
        progress: data.progress || "",
        location: data.location || "",
      };
    }

    // Additional fields for custom
    if (type_id === "8") {
      newItem = {
        ...newItem,
        progress: data.progress || "",
        notes: data.notes || "",
      };
    }

    // Insert new item into the appropriate table
    const [id] = await knex(tableName).insert(newItem);

    res.status(201).json({ id, ...newItem });
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Getting an item from a list

const getItemByTypeAndId = async (req, res) => {
  const { type_id, itemId } = req.params;

  try {
    const tableName = getTableNameByType(type_id);
    const item = await knex(tableName).where({ id: itemId }).first();

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (item.image) {
      item.image = item.image.toString("base64");
    }

    res.status(200).json(item);
  } catch (err) {
    console.error("Error fetching item:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/item/:type_id/:itemId", getItemByTypeAndId);

// Editing an Item from list

router.put("/item/:type_id/:itemId", validateItem, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { type_id, itemId } = req.params;
  const data = req.body;

  try {
    const tableName = getTableNameByType(type_id);

    const Exists = await knex(tableName).where({ id: itemId }).first();
    if (!Exists) {
      return res.status(404).json({ message: "List not found" });
    }
    let updatedItem = {
      title: data.title,
      image: data.image,
      description: data.description || "",
    };

    if (type_id === "1") {
      updatedItem = {
        ...updatedItem,
        completed: data.completed || false,
        chapters: data.chapters || 0,
        chapter_read: data.chapter_read || 0,
        progress: data.progress || "",
        link: data.link || "",
        last_updated: new Date(), // Update last_updated timestamp
      };
    }

    if (type_id === "2") {
      updatedItem = {
        ...updatedItem,
        completed: data.completed || false,
        episodes: data.episodes || 0,
        episodes_watched: data.episodes_watched || 0,
        progress: data.progress || "",
        location: data.location || "",
      };
    }

    if (type_id === "8") {
      updatedItem = {
        ...updatedItem,
        progress: data.progress || "",
        notes: data.notes || "",
      };
    }

    const updateResult = await knex(tableName)
      .where({ id: itemId })
      .update(updatedItem);

    if (updateResult === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Retrieve updated item from database
    const updatedItemFromDb = await knex(tableName)
      .where({ id: itemId })
      .first();

    res.status(200).json(updatedItemFromDb);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Deleting item from list

const deleteItem = async (req, res) => {
  const { type_id, itemId } = req.params;
  try {
    const tableName = getTableNameByType(type_id);
    const item = await knex(tableName).where({ id: itemId }).first();

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await knex(tableName).where({ id: itemId }).del();
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.delete("/item/:type_id/:itemId", deleteItem);

export default router;
