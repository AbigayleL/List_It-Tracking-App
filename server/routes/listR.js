import express from "express";
import fs from "fs";
import crypto from "crypto";
import cors from "cors";
import "dotenv/config";

import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const router = express.Router();
import { check, validationResult } from "express-validator";

//Get Requests

const getalllists = async (req, res) => {
  try {
    const lists = await knex.select("*").from("list");
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/", getalllists);

const getlistbyID = async (req, res) => {
  try {
    const lists = await knex("list").where({
      id: req.params.id,
    });
    if (lists) {
      res.status(200).json(lists);
    } else {
      return res.status(404).json({ message: "This list is not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/:id", getlistbyID);

// To make a new main list

const validateMainList = [
  check("list_name").notEmpty().withMessage("Name of list is required"),
  check("type_id").notEmpty().withMessage("Type ID is required"),
];

router.post("/", validateMainList, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { list_name, type_id, image } = req.body;

  try {
    const [id] = await knex("list").insert({
      list_name,
      type_id,
      image: image || "",
    });

    res.status(201).json({
      id,
      list_name,
      type_id,
      image: image || "",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Edit

router.put("/:id", validateMainList, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { list_name, type_id, image } = req.body;

  try {
    const id = req.params.id;

    const Exists = await knex("list").where({ id }).first();
    if (!Exists) {
      return res.status(404).json({ message: "List not found" });
    }

    const updatedRows = await knex("list")
      .where({ id })
      .update({
        list_name,
        type_id,
        image: image || "",
      });

    if (updatedRows === 0) {
      return res.status(404).json({ message: "List not found" });
    }

    res.status(200).json({
      id,
      list_name,
      type_id,
      image: image || "",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Delete mainlist

const deleteMainList = async (req, res) => {
  try {
    const Exists = await knex("list").where({
      id: req.params.id,
    });
    if (!Exists) {
      return res.status(404).json({ message: "list doesn't exist!" });
    }

    await knex("list").where({ id: req.params.id }).del();
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.delete("/:id", deleteMainList);

export default router;
