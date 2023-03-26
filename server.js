require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

//Mongodb Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

const app = express();
app.set("view-engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rendering the homepage
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//Handling the form request
app.post("/submit-form", async (req, res) => {
  const newUser = new User(req.body);
  const user = await newUser.save();
  console.log("User saved to db: ", user);

  res.send({ message: "Submitted successfully!" });
});

//Handling the subscribe request
app.post("/subscribe", async (req, res) => {
  const newUser = new User(req.body);
  const user = await newUser.save();
  console.log("User saved to db: ", user);

  res.send({ message: "Subscribed successfully!" });
});

app.listen(3000, () => console.log("Listenin on port 3000"));
