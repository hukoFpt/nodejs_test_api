const { v4: uuidv4 } = require("uuid");
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User({
      _id: uuidv4(),
      username,
      password,
    });

    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
