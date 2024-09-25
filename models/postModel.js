const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  content: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  edited: {
    type: Boolean,
    default: false,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema, "post");

module.exports = Post;
