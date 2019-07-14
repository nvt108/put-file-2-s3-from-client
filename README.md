# put-file-2-s3-from-client
AWS - Put file to S3 from client

# install node module
    1. npm install express
    2. npm install aws-sdk
# create config file
```
var config = {};
config.aws_access_key_id = "your aws access key";
config.aws_secret_access_key = "your aws secret key";
config.aws_region = "your region";
config.bucket = "bucket name";
config.signedUrlExpireSeconds  = 60 * 5;
module.exports = config;
```
#Setting permissions for S3 bucket
- Access to: S3->yourbucket->Permissions tab->CORS configuration and add config like as below
```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```
