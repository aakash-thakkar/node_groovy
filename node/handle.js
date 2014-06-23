//var http = require('http');
//var redis = require('redis');
//var resObj = {};
var express = require('express');
var app = express.createServer(function(req,res,next) {

} );
  //create the request to send ....
  
  app.use(express.bodyParser());

//var server = http.createServer(function(req,res) { 
  
app.post('/',function(req,res) { 
  
  //here we'll response with the data....thats obtained on request
  req.setEncoding('utf-8');
  var responseString = '';
  req.on('data',function(data) { 
    responseString+=data.toString();
    console.log(data);
  });
  req.on('end',function() { 
    
    
    //var resObj = {};
    var resObj = JSON.parse(responseString);
    
    //all the json functions to perform ;;;
    console.log('succesfuly parsed json object');
	
	var appData = { 
	"type" : "snacks",
	"replyTo" : "sandra-snacks-300" ,
	"orgId":"300",
	"timestamp" : Date.parse(new Date()).toString(),
	
	};
	
	
	responseString = responseString.slice(0,responseString.length-1);
	appString = JSON.stringify(appData);
	appString = appString.slice(1,appString.length-1);
	responseString += (" , " + appString);
	responseString += " }";
	
	opObject = JSON.parse(responseString);
	
	var client = redis.createClient(6379,'localhost');
	
	client.rpush('mylist','value');
	client.lrange('mylist',0,-1, function(err,items) { 
	if (err) throw err;
	items.forEach(function(item,i) { 
	console.log(' ' + item);
	});
	});
	
	res.end();
  });
  });
  
  res.on('error',function(e) { 
    //something
    console.log('error');
  });
  
//}).listen(3000);



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
