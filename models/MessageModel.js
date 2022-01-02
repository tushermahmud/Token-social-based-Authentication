const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
    images: {
      type: Array,
    },
    videos: {
      type: Array,
    },
    time: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
