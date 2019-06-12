var controller = require('./controller');
var querystring = require('querystring');
const url = require('url');
const fs = require('fs');
module.exports = {
    start:(server)=>{
        server.on('request',(req,res)=>{
            var urls = req.url;
            
            var path = url.parse(urls,true);
            var id = path.query.id;
            if(req.method == 'GET'){
                console.log(222);
                if(path.pathname == '/'){
                    controller.index(req,res);
                }else if(path.pathname == '/getone'){
                    controller.getone(req,res,path.query.id)
                }else if(path.pathname =='/delete'){
                    controller.delete(req,res,path.query.id)
                }else if(path.pathname =='/add'){
                    controller.add(req,res)
                }else if(path.pathname =='/edit'){
                    controller.updateshow(req,res,path.query.id)
                }   
                else {
                    fs.readFile('.'+urls,function(err,data){
                        res.end(data);
                    })
                }
            }else if(req.method == 'POST'){
                console.log(111);
                if(path.pathname =='/adduser'){
                    var da = '';
                    req.on('data', function (d) {
                        // 因为http协议中的数据都是字符串，
                        // 因此可以在每次发送过来数据后使用 + 拼接
                        da += d;
                    })
                    req.on('end', function () {
                        // console.log(da);
                        // 将data事件中接收拼接好的数据进行转译处理
                        // 借助核心模块的 querystring 模块进行转译
                        var qu = querystring.parse(da)
                        // 将转译好的数据传入业务层进行数据添加
                        controller.adduser(req,res,qu);
                    })




                    // console.log(111);
                    // var formidable = require('formidable');
                    // var fd = new formidable.IncomingForm();
                    // fd.uploadDir="D:\\tmp\\img";
                    // fd.parse(req,function(err,formd,files){
                        // console.log(formd);
                        // var imgpath = './public/img/'+files.img.name;
                        // fs.rename(files.img.path,imgpath,function(err){
                            // if(!err){
                                // formd.img=imgpath;
                                // controller.adduser(req,res,formd);
                            // }
                        // })                                                                                
                    // })
                   
                }else if(path.pathname =='/edit'){
                    var da = '';
                    req.on('data', function (d) {
                        // 因为http协议中的数据都是字符串，
                        // 因此可以在每次发送过来数据后使用 + 拼接
                        da += d;
                    })
                    req.on('end', function () {
                        // console.log(da);
                        // 将data事件中接收拼接好的数据进行转译处理
                        // 借助核心模块的 querystring 模块进行转译
                        var qu = querystring.parse(da)
                        // 将转译好的数据传入业务层进行数据添加
                        controller.adduser(req,res,qu,id);
                    })



                    // var formidable = require('formidable');
                    // var fd = new formidable.IncomingForm();
                    // fd.uploadDir="D:\\tmp\\img";
                    // fd.parse(req,function(err,formd,files){
                    //     var imgpath = './public/img/'+files.img.name;
                    //     fs.rename(files.img.path,imgpath,function(err){
                    //         if(!err){
                    //             formd.img=imgpath;
                    //             controller.update(req,res,formd,path.query.id);
                    //         }
                    //     })                                                                                
                    // })
                }

            }
        })

        
    }
}