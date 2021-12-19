const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "normal",
    },
    avater: {
      type: String,
    },
    resetPasswordLink: {
      type: String,
      default: "",
    },
    time: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
