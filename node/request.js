var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'localhost',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '3000',
  //This is what changes the request to a POST request
  method: 'POST'
};

var jObj = { 
"username" : "jkdihenkar" ,
"email" : "abc" 
}

var sendString = JSON.stringify(jObj);

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write(sendString);
req.end();