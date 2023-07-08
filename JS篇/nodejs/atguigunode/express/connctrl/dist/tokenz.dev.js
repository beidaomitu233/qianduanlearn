"use strict";

var express = require('express');

var jwt = require('jsonwebtoken');

var app = express(); //生成token

app.get('/gettoken', function (req, res) {
  // let token=jwt.sign(用户数据，加密字符串，配置对象)
  var token1 = jwt.sign({
    id: '123',
    name: 'lisi'
  }, 'beidao', //单位是秒
  {
    expiresIn: 10
  });
  console.log(token1); //验证token

  jwt.verify(token1, 'beidao', function (err, data) {
    if (err) {
      console.log('token验证失败');
      return;
    }

    console.log(data);
  });
});
app.listen(9001, function () {
  console.log('服务器启动成功');
});