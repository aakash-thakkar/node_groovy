var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
if (req.url == '/') {
fs.readFile('./titles.json', function(err, data) {
if (err) {
console.error(err);
res.end('Server Error');
}
else {
var titles = JSON.parse(data.toString());
fs.readFile('./template.html', function(err, data) {
if (err) {
console.error(err);
res.end('Server Error');
}
else {
var tmpl = data.toString();

var t=0;
var html = "";

while(t!=-1)  
{ 
 t= tmpl.search('%');
console.log(t.toString());
if(t!=-1) {tmpl = tmpl.replace(tmpl.charAt(t), titles.join('</li><li>'));
}
}
res.writeHead(200, {'Content-Type': 'text/html'});
fs.readFile('./viewalert.js', function(err, data) {
var htm=tmpl.replace('*',data.toString());
res.end(htm);
});
}
});
}
});
}
}).listen(8000, "127.0.0.1");