const express = require("express");
const router = express.Router();

// List of available API endpoints
const apiEndpoints = {
  "GET /api/users": "Get all users",
  "POST /api/user": "Create a new user",
  "GET /api/users/:id": "Get a user by ID",
    
  "GET /api/posts": "Get all posts",
  "POST /api/posts": "Create a new post",
  "GET /api/posts/:id": "Get a post by ID",
  "PUT /api/posts/:id": "Update a post by ID",
  "DELETE /api/posts/:id": "Delete a post by ID",
};

router.get("/", (req, res) => {
  res.json(apiEndpoints);
});

module.exports = router;