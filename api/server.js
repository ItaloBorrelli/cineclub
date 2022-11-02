const express = require("express");
const cors = require("cors");

const db = require("./db");
// const <> = require("./routes/<>");

// app.use("/api/<>", <>);

let closeServer = () => {};

db.once("open", () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const server = app.listen(3001, () => {
    console.log("Started on PORT 3001");
    console.log("Client connected successfully");
  });

  closeServer = () => {
    server.close(() => {
      db.connection.close();
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
