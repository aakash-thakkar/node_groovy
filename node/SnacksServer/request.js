var http = require('http');

/* var options = {
  host: '10.10.17.64:8080',
  path: '/postSnacks',
  //since we are listening on a custom port, we need to specify it by hand
  port: '3000',
  //This is what changes the request to a POST request
  method: 'POST'
}; */

var jObjb = { 
"username" : "jkdihenkar" ,
"email" : "abc@etechtexas.com" 
}

var jObj = { "data" : jObjb };
var sendString = JSON.stringify(jObj);
var request = require('request');

request.post({
  headers: {'content-type' : 'application/json'},
  url:     'http://trackdemo.app.enterice.com/PostSnacks',
  body:    JSON.stringify(jObjb)
},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
			
        }
    });