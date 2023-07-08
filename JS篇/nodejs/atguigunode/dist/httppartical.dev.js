"use strict";

var http = require('http'); //创建服务对象


var server = http.createServer(function (request, response) {
  //根据请求方法和请求URL来返回数据
  //获取请求方法和请求URL
  var URL1 = new URL(request.url, 'http://127.0.0.1:9002');
  var method = request.method;
  console.log(URL1);
  var pathname = URL1.pathname,
      search = URL1.search;
  console.log(pathname, search);

  if (method === 'GET' && pathname === '/login') {
    console.log(search); //返回登录页面

    response.end('longin page');
  } else if (method === 'GET' && pathname === '/reg') {
    console.log(search); //返回登录页面

    response.end('reg page'); //如果这两个页面都不匹配就返回找不到，否则连接就不会断开会占用资源。
  } else response.end('Not FOUND');
}); //监听端口

server.listen(9002, function () {
  console.log('服务启动成功');
});