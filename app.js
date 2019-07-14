const express = require('express');
const app = express();
const port = 3000;
app.use('/', express.static(__dirname + '/public'));
const config = require('./config.js');
const AWS = require('aws-sdk');
const s3Object  = new AWS.S3({
    accessKeyId : config.aws_access_key_id,
    secretAccessKey : config.aws_secret_access_key,
    region: config.aws_region,
});
//Route homepage
app.get('/', function(req, res){
    res.render('index.html');
});
// Route gen pre signed url
app.get('/generatepresignedurl',function(req,res){
    var fileName = req.query.fileName;
    var type = req.query.type;
    var url = s3Object .getSignedUrl('putObject', {
        Bucket: config.bucket,
        Key: fileName,
        Expires: config.signedUrlExpireSeconds,
        ACL: "public-read",
        ContentType: type
    });
    res.send(url);
});

// RUN SERVER
app.listen(port,function(){
    console.log("Server listening on port " + port);
});