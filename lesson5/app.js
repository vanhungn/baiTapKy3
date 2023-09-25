var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const restaurantsAmericanRouter=require("./routes/restaurantAmerican");
const WallStreet =require(".//routes/wallStreet")
const Borough=require("./routes/borought");
const chickenManhattan=require("./routes/chickenManhattan");
const GradeBRating=require("./routes/GradeBRating")
const grades=require("./routes/grades");
const scoreEvaluation=require("./routes/scoreEvaluation")
const db=require("./config/db")
var app = express();

db();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/american', restaurantsAmericanRouter);
app.use('/chickenManhattan', chickenManhattan);
app.use('/wallStreet', WallStreet);
app.use("/grades",grades)
app.use('/borough', Borough);
app.use('/gradeBRating', GradeBRating);
app.use("/scoreEvaluation",scoreEvaluation)
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
