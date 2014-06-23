
/**
 * Module dependencies.
 */
var register = require('./routes/register');

var express = require('express')
  , routes = require('./routes');

var register = require('./routes/register');
var messages = require('./messages');  

app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
// app.use(messages);
  
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get('/register', register.form);
app.post('/register', register.submit);


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
