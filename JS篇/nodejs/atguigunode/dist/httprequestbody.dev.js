"use strict";

//引入http模块
var http = require('http'); //创建服务对象


var server = http.createServer(function (request, response) {
  //设置响应头，让浏览器按照utf-8的编码格式解析成html内容
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
  var requestbody = ''; //绑定流式读取的data事件，当读取完一块数据后触发回调函数。

  request.on('data', function (chunk) {
    requestbody += chunk; //已经从buffer自动转换成字符串了
  });
  request.on('end', function () {
    console.log(requestbody); //读取完毕后就结束

    response.end('hello http');
  });
}); //监听端口

server.listen(3211, function () {
  console.log('服务启动成功');
});