import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { router as loginRouter } from "./src/routes/login-route.js";
import { router as userRouter } from "./src/routes/user-route.js";

let closeServer = () => {};

mongoose.connect("mongodb://mongo:27017/cineclub").catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;
db.once("open", () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/login", loginRouter);
  app.use("/api/user", userRouter);

  const server = app.listen(3001, () => {
    console.log("Started on PORT 3001");
    console.log("Client connected successfully");
  });

  closeServer = () => {
    server.close(() => {
      db.close();
      console.log("Client disconnected successfully");
      console.log("Process terminated");
    });
  };
});

process.on("SIGTERM", () => {
  closeServer();
});

process.on("SIGINT", () => {
  closeServer();
});
