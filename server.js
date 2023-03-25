require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_LOCAL)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

const app = express();
app.set("view-engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.redirect("/thankyou");
    console.log("Saved to db:", user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/thankyou", (req, res) => {
  res.render("thankyou.ejs");
});

app.listen(3000, () => console.log("Listenin on port 3000"));
