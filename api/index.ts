import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";

import { router as loginRouter } from "./src/routes/LoginRoute";
import { router as userRouter } from "./src/routes/UserRoute";

config();
let closeServer = () => {};

const PORT = process.env.PORT!;
const DB_HOST = process.env.DB_HOST!;
const DB_PORT = process.env.DB_PORT!;
const DB_NAME = process.env.DB_NAME!;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;
db.once("open", () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/login", loginRouter);
  app.use("/user", userRouter);

  const server = app.listen(Number(PORT), () => {
    console.log(`Started on PORT ${PORT}`);
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

export {};
