var express = require('express');
var http = require('http');
var path = require('path');
var redis = require('redis');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();


var port=3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/PostSnacks', function(req, res) {
	console.log(req.body);

	// logic all goes here.
	var recievedObject = req.body;
	console.log(recievedObject.email);

	// Data to append
	var appData = { 
		"type" : "Snacks",
		"replyTo" : "sandra-snacks-300" ,
		"orgId":"300",
		"timestamp" : Date.parse(new Date()).toString(),
		"data" : recievedObject
		};
	
	appData = JSON.stringify(appData);
	
	// push the data on the redis server.

	var client = redis.createClient(6379,'10.10.16.172');
		//callback function
		client.rpush('inbound',appData,function(err){
			if(err)	throw err;
			console.log("INBOUND Success");
		});

	//task complete...!!
	res.end();
  
}); 

app.use('/users', users);

//request to send the data JSON
app.get('/',function(req,res){
});
//-------------

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stack traces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port',port);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;

