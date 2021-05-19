const express = require('express');

// create a new Router
const router = express.Router();

// Import
const { getPosts, addPost } = require('../controller/postsController')


router.route('/').get(getPosts)
    .post(addPost);

//export router to app.js
module.exports = router;
