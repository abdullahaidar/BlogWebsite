const express = require('express');

// create a new Router
const router = express.Router();

// Import
const { getPosts, addPost, deletePost, updatePost } = require('../controller/postsController')


router.route('/').get(getPosts)
    .post(addPost)
    .delete(deletePost);

router.route("/update").post(updatePost);

//export router to app.js
module.exports = router;
