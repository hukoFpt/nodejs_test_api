const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

const authorizeRole = (role) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.role !== role) {
        return res
          .status(403)
          .json({ error: "Access denied. Insufficient permissions." });
      }

      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
};

module.exports = { authenticateToken, authorizeRole };
