/**
 * Created by Administrator on 2017-07-17.
 */
var dbhelper = require('./dbhelper.js');
var url = require('url');
var util = require('util');
function start(req, res) {


    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    var params = url.parse(req.url, true);
    var loginname=params.pathname.substring(1);
/*    var data={"data":{
        "avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg",
        "loginname":"123",
        "score":"123",
        "authorId":"1"
    }};*/
    dbhelper.sql("select * from author where loginname='"+loginname+"'",function(err,result){
        if (err) {
            console.log(err);
            return;
        }

        if(result.recordset.length){
            var data={
                "message":"登陆成功",
                "code":"200",
                "data":{
                    "avatar_url":result.recordset[0].avatar_url,
                    "loginname":result.recordset[0].loginname,
                    "score":result.recordset[0].score,
                    "authorId":result.recordset[0].authorId
                }
            };

            res.end(JSON.stringify(data));
        }else {
            var data={
                "message":"登陆失败",
                "code":"400",
                "data":{

                }
            };
            res.end(JSON.stringify(data));
        }

    });



}

exports.start = start;