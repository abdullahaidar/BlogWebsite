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

    // ASK JAN HOW TO GET 2 INPUT VALUES
    // const title = req.body.title;  
    // const text = req.body.textarea;

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
    const inputId = req.body.id;
    db.get('posts').remove({ id: inputId }).write();
    res.status(200).send('Success')
  } catch (error) {
    console.log(error);
    next(error);
  }

}