require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

// const <> = require("./routes/<>");

const app = express();

app.use(cors());
app.use(express.json());
// app.use("/api/<>", <>);

const uri = process.env.DATABASE_URL;
let client;

const server = app.listen(3001, () => {
  console.log("Started on PORT 3001");
  client = new MongoClient(uri);
  console.log("Client connected successfully");
});

const closeServer = () => {
  server.close(() => {
    client.close();
    console.log("Client disconnected successfully");
    console.log("Process terminated");
  });
};

process.on("SIGTERM", () => {
  closeServer();
});

process.on("SIGINT", () => {
  closeServer();
});
