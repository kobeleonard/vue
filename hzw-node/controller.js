const template = require('art-template');
var fs = require('fs');
var model = require('./model');
template.defaults.root = './';

module.exports={
    index:(req,res)=>{
        model.selectall((data)=>{
            res.setHeader('Access-Control-Allow-Origin','*');
                // console.log(data);
                // console.log(JSON.stringify(data));
            res.end(JSON.stringify(data));
            // var htmls = template('./view/index.html',{data:data});
            // res.end(htmls);
        });
    },
    getone:(req,res,id)=>{
        model.where('id='+id).selectall(function(data){
            res.setHeader('Access-Control-Allow-Origin','*');
            // console.log(id);
            // console.log(data);
            res.end(JSON.stringify(data));
            // console.log(JSON.stringify(data))
            // console.log(data)
            // var htmls = template('./view/one.html',{data:data});
            // res.end(htmls);
        })
    },


    delete:(req,res,id)=>{
        model.where('id='+id).delete(function(data){
            if(data.affectedRows >=1){
                res.setHeader('Content-type','text/html;charset=utf-8')
                var s='<script>alert("删除成功");location.href="/"</script>';
                res.end(s);
            }
        })
    },


    add:(req,res)=>{
        fs.readFile('./view/add.html',function(err,data){
            res.end(data);
        })
    },
    adduser:(req,res,formd)=>{
        console.log(formd);
        model.adduser(formd,function(data){
            // if(data.affectedRows >=1){
                res.setHeader('Access-Control-Allow-Origin','*');
                res.end('1');
            // }
           
        })
    },

    updateshow:(req,res,id)=>{
        model.where('id='+id).selectall(function(data){
            var htmls = template('./view/edit.html',{data:data})
            res.end(htmls);
        })
    },

    update:(req,res,formd,id)=>{
        model.where('id='+id).update(formd,function(data){
            res.setHeader('Content-type','text/html;charset=utf-8')
            var s='<script>alert("修改成功");location.href="/"</script>';
            res.end(s);
        })
    }


}
