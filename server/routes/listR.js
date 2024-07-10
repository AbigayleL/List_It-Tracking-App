import express from "express";
import fs from "fs";
import crypto from "crypto";
import cors from "cors";
import "dotenv/config";

import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const router = express.Router();

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

const getitemsbylistid = async (req, res) => {
  try {
    const listData = await knex("list").where({
      id: req.params.id,
    });
    if (!listData) {
      return res.status(404).json({ message: "List doesn't exist!" });
    }

    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

router.get("/:id/", getitemsbylistid);

export default router;
