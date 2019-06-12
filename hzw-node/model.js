const mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password:'0925',
    database:'73haizengwang'
})

connection.connect();
module.exports={
    wh: '',
    where: function (wheres) {
        this.wh = wheres;
        return this;
    },
    selectall: function (callbackFun) {
        if (this.wh != '') {
            var sql = 'select * from users where ' + this.wh;
            this.wh = '';
        } else {
            var sql = 'select * from users';
        }
        connection.query(sql, function (err, data) {
            callbackFun(data);
        })
    },

    delete:function(callbackFun){
        if (this.wh != ''){
            var sql = 'delete from users where '+this.wh;
            this.wh ='';
            // console.log(sql);
            connection.query(sql,function(err,data){
                // console.log(data);
                callbackFun(data);
            })
        }
    },

    adduser:function(formd,callbackFun){
        var str = '';
        var cc = '';
        for(aa in formd){
            cc+=aa+',';
            str+='\''+formd[aa]+'\''+',';
        }
        str = str.substr(0,str.length-1);
        cc = cc.substr(0,cc.length-1);
        var sql = 'insert into users ('+cc+') values ('+str+')';
        console.log(sql);
        connection.query(sql,function(err,res,data){
            // console.log(res);
            callbackFun(res);
        })
    },
    update:function(formd,callbackFun){
        var str ='';
        for(aa in formd){
            str += aa +'='+'\''+formd[aa]+'\''+',';
        }
        str =str.substr(0,str.length-1);
        var sql = 'update users set '+ str +' where '+this.wh;
        this.wh ='';
        // console.log(sql);
        connection.query(sql,function(err,res,data){
            // console.log(res);
            callbackFun(res);
        })
    }
    




}