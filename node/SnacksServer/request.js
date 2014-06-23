var http = require('http');

var options = {
  host: 'localhost',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '3000',
  //This is what changes the request to a POST request
  method: 'POST'
};

var jObjb = { 
"username" : "jkdihenkar" ,
"email" : "abc@etechtexas.com" 
}

var jObj = { "data" : jObjb };
var sendString = JSON.stringify(jObj);
var request = require('request');

request.post({
  headers: {'content-type' : 'application/json'},
  url:     'http://localhost:3000/PostSnacks',
  body:    JSON.stringify(jObjb)
},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
			
        }
    });