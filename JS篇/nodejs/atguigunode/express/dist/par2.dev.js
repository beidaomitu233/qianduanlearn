"use strict";

//导入express对象
var express = require('express');

var products = require('./products.json'); //创建服务对象


var app = express(); //创建路由
//小练习动态路由匹配商品

app.get('/:id.html', function (req, res) {
  //先获取参数
  console.log(req.params.id); //结构出id方便使用,但是这里的id是字符串类型的

  var id = req.params.id; //根据参数取json文件中查找有没有对应好的id

  var product = products.find(function (item) {
    return item.id === id;
  }); //如果有这个id那就返回这个商品

  console.log(product);

  if (product) {
    console.log(product);
    res.send('找到啦');
  } else {
    res.send('not found');
  }
}); //监听端口

app.listen(9001, function () {
  console.log('服务启动成功');
});