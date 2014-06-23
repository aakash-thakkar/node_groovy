var http = require('http');

var fs = require('fs');

var parse = require('url').parse;

var join = require('path').join;

var root = __dirname;

var server = http.createServer(function(req,res) { 
	var url=parse(req.url);
	console.log(url);
	var path = join(root,url.pathname);
	console.log(path);
	//	path="./pages/test.html";
	
	var stream = fs.createReadStream(path);
	stream.on('data',function (chunk) { 
		res.write(chunk); });
	stream.on('end',function() { 
	res.end();
	});
	});
	
	server.listen(3000);