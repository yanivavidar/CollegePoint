const router = require("express").Router();
const createPost = require("../BLL/PostsBLL").createPost;
const updatePost = require("../BLL/PostsBLL").updatePost;
const deletePost = require("../BLL/PostsBLL").deletePost;
const getPost = require("../BLL/PostsBLL").getPost;
const getAllPosts = require("../BLL/PostsBLL").getAllPosts;
const likePost = require("../BLL/PostsBLL").likePost;
const commentPost = require("../BLL/PostsBLL").commentPost;
const bookmarkPost = require("../BLL/PostsBLL").bookmarkPost;

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/", getAllPosts);

// not yet implemented routes
router.put("/:id/like", likePost);
router.put("/:id/comment", commentPost);
router.put("/:id/bookmark", bookmarkPost);

module.exports = router;
