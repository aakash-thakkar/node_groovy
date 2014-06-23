/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//to delete bucket
var AWS = require('aws-sdk');
var s3 = new AWS.S3({params: {Bucket: 'Nodejsbucket'}});
s3.deleteBucket(function(){});
console.log("Bucket deleted Successfully...!!!");
