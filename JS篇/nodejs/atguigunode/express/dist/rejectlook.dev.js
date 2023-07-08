"use strict";

var express = require('express');

var app = express(); //设置防盗链防止其他域名网站获取资源.use是全局中间件

app.use(function (req, res, next) {
  var referer = req.headers.referer;
  var referer2 = req.get('referer');
  console.log(referer2);

  if (referer2 && referer2 === 'http://127.0.0.1:9001/') {
    next();
  } else {
    res.send('防盗链');
  }
});
app.get('/home', function (req, res) {
  res.send('welcome');
}); //监听

app.listen(9001, function () {
  console.log('启动成功');
});