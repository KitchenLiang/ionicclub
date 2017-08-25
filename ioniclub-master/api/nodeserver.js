/**
 * Created by Administrator on 2017-07-15.
 */
var http = require("http");
var express = require('express');
var server = express();
var addrepliesApi=require('./addrepliesApi');
var bodyParser = require('body-parser');


var topicsApi=require('./topicsApi');
var topicApi=require('./topicApi');
var loginApi=require('./loginApi');
var userApi=require('./userApi');

// bodyParser.urlencoded解析form表单提交的数据
server.use(bodyParser.urlencoded({extended: false}));

// bodyParser.json解析json数据格式的
server.use(bodyParser.json());

server.use('/api/v1/topics',topicsApi.start);
server.use('/api/v1/topic/',topicApi.start);
server.use('/api/v1/login',loginApi.start);
server.use('/api/v1/user/',userApi.start);

server.post('/api/v1/replies',addrepliesApi.start);
require('./addtopicsApi')(server);
server.listen(3000);
console.log("node nodeserver has started.");

