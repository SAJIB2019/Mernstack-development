const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection successfull`);
  })
  .catch((err) => {
    console.log(err);
  });
//Middelware

const middleware = (req, res, next) => {
  console.log("Hello my middelware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello from about");
});

app.get("/contact", (req, res) => {
  res.send("hello from contact");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
