/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Upload File in Amazon S3 using Node.js
var AWS = require('aws-sdk')
  , util = require('util')
  , fs = require('fs')
  ;
(function() {
 //AWS.config.loadFromPath('C:/Documents and Settings/vmakawana106770/My Documents/NetBeansProjects/NodeJsDemo/web/config.json');
 
   var endpoint = new AWS.Endpoint('s3-external-1.amazonaws.com');
   var s3 = new AWS.S3();
   s3.client.endpoint = endpoint;
 var file = 'C:/Documents and Settings/vmakawana106770/My Documents/NetBeansProjects/NodeJsDemo/web/sample.txt';
 var stream = fs.createReadStream(file);
 s3.client.putObject({Bucket: 'sampleNode', Key: 'sample3.txt', Body: stream})
 .on('complete', function(res) {
  console.log(util.inspect(res));
 }).send();
 
})();
console.log("Successfully uploaded data to Amazon S3 bucket");