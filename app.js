var path = require('path');
var morgan = require('morgan');
var express = require('express');
var body_parser = require('body-parser');
var serve_favicon = require('serve-favicon');
var express_session = require('express-session');
var connect_dynamodb = require('connect-dynamodb')({ session: express_session });

var dynamodb = require('./server/dynamodb/dynamodb').dynamodb;

var index = require('./routes/index');

require('./server/init/init');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

if (process.env.node_env != 'production') {
  app.use(morgan('dev'));
}
app.use(body_parser.json());
app.use(express_session({
  resave: false,
  secret: 'mmk3aads',
  saveUninitialized: true,
  store: new connect_dynamodb({ client: dynamodb })
}));
app.use(body_parser.urlencoded({ extended: false }));
// app.use(serve_favicon(path.join(__dirname, 'server/favicon/favicon.ico')));

if (process.env.node_env != 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));
}

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
