/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//To create Bucket in S3

var AWS = require('aws-sdk');
var s3 = new AWS.S3({params: {Bucket: 'Nodejsbucket', Key: 'myKey'}});
s3.createBucket(function() {
  s3.putObject({Body: 'Hello!'}, function() {
    console.log("Bucket Created Successfully...!!!");
  });
});
