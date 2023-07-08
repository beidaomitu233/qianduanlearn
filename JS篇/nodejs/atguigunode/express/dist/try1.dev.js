"use strict";

//导入express对象
var express = require('express');

var products = require('./products.json');

console.log(products); //创建服务对象

var app = express(); //创建路由

app.get('/index', function (req, res) {
  console.log(req);
  console.log(res);
  res.send('welcome to express');
}); //通配符匹配对应参数的网页

app.get('/:id.html', function (req, res) {
  req.params.id;
  console.log(req.params.id);
  res.end('=商品页面');
}); //小练习根据商品
//监听端口

app.listen(9001, function () {
  console.log('服务启动成功');
});