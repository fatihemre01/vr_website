const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: String,
    email: String,
    twitter: String,
    discord: String,
    message: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = new mongoose.model("user", userSchema);
