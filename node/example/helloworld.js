var fs=require('fs');
var http = require('http');
var mime = require('mime');
var path = require('path');
var cache = {};

mytext="";



fs.readFile('./hello.msg',function(err,data) { 
mytext = data;
console.log(mytext.toString());
});

var server = http.createServer(function(req,res) { 

//res.writeHead(200, { "content-type" : mime.lookup(path.basename('./pages/test.html')) });
page="";
fs.readFile('./pages/test.html',function(err,data) {
/* x=data;
x+=("<i> " + mytext + "</i>");
page=x; */

page+=$('#myid').append(divEscapedContentElement(mytext));
res.write(page);
res.end();
});


}
).listen(3000);

var myname = "ABC";

myname += (7+13).toString();

console.log("helloworld!  " + myname);

//console.log(mytext);
function divEscapedContentElement(message) {
return $('<div></div>').text(message);
}