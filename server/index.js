import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import listRoutes from "./routes/listR.js";
import itemRoutes from "./routes/itemR.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "images")));

const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use("/lists", listRoutes);
app.use("/types", itemRoutes);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
