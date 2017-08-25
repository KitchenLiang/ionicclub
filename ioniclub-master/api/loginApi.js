/**
 * Created by Administrator on 2017-07-15.
 */
var dbhelper = require('./dbhelper.js');
var url = require('url');
var util = require('util');
function start(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    var loginname = req.body.loginname;
    var password = req.body.password;
    dbhelper.sql("select * from author where loginname='" + loginname + "' and password='" + password + "'", function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        if (result.recordset.length) {
            var data = {
                "message": "登陆成功",
                "code": "200",
                "data": {
                    "avatar_url": result.recordset[0].avatar_url,
                    "loginname": result.recordset[0].loginname,
                }
            };
            res.end(JSON.stringify(data));
        } else {
            var data = {
                "message": "登陆失败",
                "code": "400",
                "data": {}
            };
            res.end(JSON.stringify(data));
        }
    });
}

exports.start = start;