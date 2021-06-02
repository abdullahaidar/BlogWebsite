const express = require('express');

// create a new Router
const router = express.Router();

// Import
const { getPosts, addPost, deletePost, updatePost } = require('../controller/postsController')


router.route('/posts')
    .get(getPosts)
    .post(addPost)

router.route("/:id")
    .delete(deletePost)
    .post(updatePost);

//export router to app.js
module.exports = router;
