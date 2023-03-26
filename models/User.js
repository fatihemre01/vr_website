const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    twitter: String,
    discord: String,
    feedback: String,
  },
  { versionKey: false }
);

module.exports = new mongoose.model("user", userSchema);
