//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// DEPENDENCY for LOWDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

//import of security middleware
const cors = require('cors');
var app = express();

// Set CORS to omit security errors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// initialize the adapter to the mock db file
const adapter = new FileSync('data/db.json')

// SET UP LOWDB DATABASE
const db = low(adapter)

db.defaults({
  posts: [],
}).write();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);




module.exports = app;
