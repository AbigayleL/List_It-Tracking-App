import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import listRoutes from "./routes/listR.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use("/lists", listRoutes);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
