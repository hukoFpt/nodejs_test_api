const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.createPost = async (req, res) => {
  try {
    const { userId, title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid userId" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new post
    const post = new Post({
      userId: new mongoose.Types.ObjectId(userId), // Use 'new' keyword
      id: uuidv4(),
      title,
      content,
    });

    await post.save();

    res.status(201).json({ post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({ posts });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
