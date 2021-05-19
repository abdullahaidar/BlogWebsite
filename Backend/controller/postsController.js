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