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