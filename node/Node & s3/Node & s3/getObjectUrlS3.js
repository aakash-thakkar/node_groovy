/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//get object URL from bucket
var AWS = require('aws-sdk')
var params = {Bucket: 'sampleNode', Key: 'sample.txt'};
var s3 = new AWS.S3();
var url = s3.getSignedUrl('getObject', params);
console.log('The URL is', url);
