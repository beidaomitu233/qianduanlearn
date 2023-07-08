"use strict";

//引入http模块
var http = require('http');

var path = require('path');

var fs = require('fs');

var url = require('url'); //创建服务对象


var server = http.createServer(function (request, response) {
  //响应头的设置需要根据请求的文件类型来设置
  //如果没有正确设置会导致，文件类型错误解析然后没有效果。
  //但是文件种类很多，所以需要根据文件的后缀名来判断，配合MIME来匹配类型。
  //获取URL对象
  var url2 = new URL(request.url, 'http://localhost:9001'); //获取请求文件类型，获取文件后缀，从 .开始截取，截取后存储在数组中，第【1】个元素就是文件类型。

  var suf = url2.pathname.split('.')[1]; //拼接路径和文件名得到绝对路径

  var requestfilename = __dirname + url2.pathname;
  requestfilename = path.resolve(requestfilename);
  var filetype = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
  };

  if (filetype[suf]) {
    //设置对应的请求头，让浏览器能正确解析文件类型
    response.setHeader('Content-type', "".concat(filetype[suf]));
  } else {
    //如果没有匹配导就设置为未知资源类型
    response.setHeader('Content-Type', 'application/octet-stream');
  } //将文件导入到模块内


  fs.readFile(requestfilename, function (err, data) {
    console.log(requestfilename); //文件读取完成后存储在变量中并返回

    response.end(data);
  });
  response.end('hello http');
}); //监听端口

server.listen(9001, function () {
  console.log('服务启动成功');
});