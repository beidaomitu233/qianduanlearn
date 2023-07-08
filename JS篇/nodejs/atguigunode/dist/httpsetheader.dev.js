"use strict";

//引入http模块
var http = require('http'); //生成测试数据


var data2 = [{
  name: 'zhangsan',
  age: 18,
  id: 16
}, {
  name: 'zhangsan',
  age: 18,
  id: 16
}, {
  name: 'zhangsan',
  age: 18,
  id: 16
}, {
  name: 'zhangsan',
  age: 18,
  id: 16
}];
var jsondata = JSON.stringify(data2); //创建服务对象

var server = http.createServer(function (request, response) {
  //设置响应头，让浏览器按照utf-8的编码格式解析成html内容
  response.setHeader('Content-Type', 'text/html;charset=utf-8'); //server一般指服务端使用的技术

  response.setHeader('server', 'node.js'); //使用数组可以，设置多个同名的响应头。

  response.setHeader('author', ['changhui', 'zhangsan', 'lisi']); //设置响应体

  response.write('this is write'); //可以解析html标签，并且可以设置通过。

  response.write('<h1>这是响应体</h1>'); //结束相应只能设置一个

  response.end('jsondata');
}); //监听端口

server.listen(9001, function () {
  console.log('服务启动成功');
});