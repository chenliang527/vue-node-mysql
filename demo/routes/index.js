var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var models =require('../sql/sqk');
var $sql =require('../sql/sqllist');


var conn = mysql.createConnection(models.mysql);
conn.connect();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/list',function (req, res, next) {
    res.send({
        code: '0',
        list: [
            {
                name: '张三',
                age: 18
            },
            {
                name: '李四',
                age: 20
            }
        ]
    })
});


//注册
router.get('/register',function (req ,res) {
    var sql = $sql.user.add;
    var addsql = [ req.query.account, req.query.password, req.query.name ];
    conn.query(sql, addsql,function(err, result) {
        if (err) {
            console.log(err);
            res.end("注册失败")
        }else if (result) {
            res.end("注册成功了");
        }
        console.log(result);
    });
});
//登入
router.get('/login',function (req, res) {
    var loginSql = "select account,password from user where account = '" + req.query.account + "' and password = '" + req.query.password + "'";
    conn.query(loginSql ,function (err, result) {
        if(err){
            console.log(err);
            return
        }
        if(result == ''){
            res.end("登录失败")
        }else {
            console.log("OK");
            res.end("登入成功了");
        }
    });
});





module.exports = router;
