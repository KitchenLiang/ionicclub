
var dbhelper = require('./dbhelper.js');
var url = require('url');
var util = require('util');
function start(req, res) {
    var params = url.parse(req.url, true).query;
    var topicId=params.topicId;
    var authorId=params.authorId;
    // console.log(topicId);
    // console.log(authorId);
    // console.log(req.body.content);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    dbhelper.sql("INSERT INTO replies (authorId,repliesCon,topicId) VALUES ("+authorId+",'"+req.body.content+"',"+topicId+")",function(err,result){
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        res.end("新增成功"+JSON.stringify(result)+"");
    });

}
exports.start = start;