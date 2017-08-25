/**
 * Created by Administrator on 2017-07-19.
 */
var dbhelper = require('./dbhelper.js');
var querystring = require('querystring');
function start(req, res) {

    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){
        post += chunk;
    });
    post = querystring.parse(post);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    dbhelper.sql('select * from replies',function(err,result){
        if (err) {
            console.log(err);
            return;
        }
        res.end(post);
    });
}
exports.start = start;