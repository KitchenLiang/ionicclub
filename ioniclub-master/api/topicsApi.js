/**
 * Created by Administrator on 2017-07-15.
 */

var http = require("http");
var dbhelper = require('./dbhelper.js');

function start(req, res) {


    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
/*    var data={"data":[
        {"id":"1","title": "你好呢","good":"true","author":{"avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg","loginname":"无名"}},
        {"id":"2","title": "你好呢","good":"true","author":{"avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg","loginname":"无名"}},
        {"id":"3","title": "你好呢","good":"true","author":{"avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg","loginname":"无名"}},
    ]};
    res.end(JSON.stringify(data));*/

    dbhelper.sql('select * from topicsView',function(err,result){
        if (err) {
            // console.log(err);
            return;
        }

        var data={"data":result.recordset
        };
        res.end(JSON.stringify(data));
    });

}

exports.start = start;