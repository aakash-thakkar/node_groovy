var express = require('express');
var redis = require('redis');
var router = express.Router();

/* GET home page. */
router.post('/PostSnacks', function(req, res) {
	console.log(req.body);

	//logic all goes here.
	var recievedObject = req.body;
	console.log('successfully parsed');

	//Data to append
	var appData = { 
		"type" : "snacks",
		"replyTo" : "sandra-snacks-300" ,
		"orgId":"300",
		"timestamp" : Date.parse(new Date()).toString(),
		"data" : recievedObject
		};
	
	//appData = JSON.stringify(appData);
	
	//push the data on the redis server.

	var client = redis.createClient(6379,'localhost');
		//callback function
		client.rpush('inbound',appData,function(err){
			if(err)	throw err;
			console.log("INBOUND Success");
		});

	//task complete...!!
	res.end();
  
}); 

module.exports = router;
