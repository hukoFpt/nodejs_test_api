const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  authenticateToken,
  authorizeRole,
} = require("../middlewares/middleware");

router.post("/user", userController.createUser);
router.get(
  "/users",
  authenticateToken,
  authorizeRole("admin"),
  userController.getAllUsers
);
router.get("/user/:username", userController.getUserByUsername);

router.post("/user/login", userController.loginUser);

module.exports = router;
