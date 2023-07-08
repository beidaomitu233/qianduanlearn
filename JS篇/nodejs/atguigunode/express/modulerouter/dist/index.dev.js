"use strict";

var express = require('express');

var app = express(); //导入模块化路由

var routersetting = require('./modulerouter1'); //使用模块化路由


app.use(routersetting);
app.get('/index', function (req, res) {
  res.send('welcome');
}); //监听

app.listen(9001, function () {
  console.log('启动成功');
});