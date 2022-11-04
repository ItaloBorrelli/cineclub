import express from "express";
import cors from "cors";
import { connect, connection } from "mongoose";
import { config } from "dotenv";

import { router as loginRouter } from "./src/routes/LoginRoute.js";
import { router as userRouter } from "./src/routes/UserRoute.js";

config({ path: "../.env" });
let closeServer = () => {};

connect("mongodb://mongo:27017/cineclub").catch((e) => {
  console.error("Connection error", e.message);
});

const db = connection;
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
