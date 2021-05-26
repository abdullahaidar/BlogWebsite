const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const db = low(adapter);

//  controller
exports.getPosts = (req, res) => {
  try {
    // get all data
    const posts = db.get('posts').value();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// add to database
exports.addPost = (req, res, next) => {
  try {
    const post = req.body
    db.get('posts')
      .push(post)
      .last()
      .assign({ id: Date.now().toString() }).write()
    res.status(201).send(post)
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// DELETE 
exports.deletePost = (req, res, next) => {
  try {

    const inputId = req.body.id
    db.get('posts').remove({ id: inputId }).write();
    res.status(200).send('Success')
  } catch (error) {
    console.log(error);
    next(error);
  }
}
//Update post
exports.updatePost = (req, res, next) => {
  try {
    const postId = req.body.id;
    const post = db.get("posts").find({ id: postId }).value();
    db.get("posts")
      .find({ id: postId })
      .assign({
        title: req.body.title,
        content: req.body.content,
      })
      .write();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};