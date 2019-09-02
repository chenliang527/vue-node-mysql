// sql语句
var sqlAll = {
    user: {
        //注册
        add: 'INSERT INTO user(account,password,name) VALUES(?,?,?)'
    }
};
module.exports = sqlAll;