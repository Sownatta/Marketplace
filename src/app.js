const createError = require('http-errors');
const routes = require('./routes')
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createNewDb = require('./config/createdb');

require('dotenv').config();

const app = express();

//Configuração Express-session
app.use(session({
  secret: "apisenha123",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
 }));
 

// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public', 'stylesheets')));
app.use(express.static(path.join(__dirname, '..', 'public', 'images')));
app.use(routes);

//Criação do Banco de dados
createNewDb();

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
