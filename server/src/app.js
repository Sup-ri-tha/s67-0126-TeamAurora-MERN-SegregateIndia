// For app configuration [middlewares, routes]

import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Middleware
const app = express();
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
