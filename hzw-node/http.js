const http = require('http');

var server = http.createServer();
server.listen(1912,()=>{
    console.log('启动成功');
});

var router = require('./router');
router.start(server);