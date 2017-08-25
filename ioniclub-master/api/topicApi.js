/**
 * Created by Administrator on 2017-07-15.
 */
var dbhelper = require('./dbhelper.js');
var url = require('url');
var util = require('util');
function start(req, res) {
    var params = url.parse(req.url, true);
    var topicId=params.pathname.substring(1);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
/*    var data={"data":[
        {"id":"1","title": "你好呢","content":"asdasdasdad爱上大声地asdasdasdad爱上大声地asdasdasdad爱上大声地",
            "author":{"avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg","loginname":"123"},
            "replies":[
                {"author":{"avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg","loginname":"123"},"content":"JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。","ups":[{"author":"123"},{"author":"123"}]},
                {"author":{"avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg","loginname":"123"},"content":"JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。","ups":[{"author":"123"},{"author":"123"}]}
            ]
        },
    ]};*/
    dbhelper.sql('select * from topicView where topicsId='+topicId+'' ,function(err,result){
        if (err) {
            console.log(err);
            return;
        }
         // console.log(result.recordset);
        if(result.recordset.length){
            var data={
                "data":[{
                    "title":result.recordset[0].title,"content":result.recordset[0].contents,
                    "avatar_url":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg",
                    "loginname":"123",
                }]
            };
            data.data[0].replies=[];
        }


        for(var i=0;i<result.recordset.length;i++){
            //
            if(result.recordset[i].repliesId){
                data.data[0].replies[i]={
                    "avatar_url":result.recordset[i].avatar_url,
                    "loginname":result.recordset[i].loginname,
                    "content":result.recordset[i].repliesCon,

                }
            }

            // console.log(data.data.replies[i]);
        }
        // console.log(JSON.stringify(data));
        res.end(JSON.stringify(data));
    });


}

exports.start = start;
// node nodeserver
