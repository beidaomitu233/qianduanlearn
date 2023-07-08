"use strict";

var express = require('express');

var app = express(); //使用静态资源中间件.直接挂载目录就可以了

app.use(express["static"](__dirname + './public')); //没有next() 就不会执行到这里

app.get('/index.html', function (req, res) {
  res.send('welcome');
}); //监听

app.listen(9001, function () {
  console.log('启动成功');
});