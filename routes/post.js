const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/post", postController.createPost);
router.get("/posts", postController.getPosts);
router.get("/post/:postId", postController.getPostById);

module.exports = router;