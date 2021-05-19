const express = require('express');

// create a new Router
const router = express.Router();

// Import
const { getPosts } = require('../controller/postsController')


router.route('/').get(getPosts);

//export router to app.js
module.exports = router;
