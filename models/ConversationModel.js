const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const conversationSchema = new Schema(
  {
    members: {
      type: Array,
    },
    time: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
