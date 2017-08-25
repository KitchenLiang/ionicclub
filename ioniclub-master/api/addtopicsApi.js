/**
 * Created by Administrator on 2017-08-11.
 */
var dbhelper = require('./dbhelper.js');
var url = require('url');
var util = require('util');
module.exports = function ( app ) {
    app.post('/api/v1/addtopics',function(req,res){
        var params = url.parse(req.url, true).query;
        var authorId=params.authorId;
        // console.log(req.body);
        // console.log(authorId);
         // console.log(req.body.title);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        dbhelper.sql("INSERT INTO topics (good,authorId,title,contents) VALUES ('1','"+authorId+"','"+req.body.title+"','"+req.body.content+"')",function(err,result){
            if (err) {
                console.log(err);
                return;
            }
            res.end("新增成功");
        });
    });
}