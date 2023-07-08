"use strict";

var express = require('express'); //路由模块化。调用routert方法


var router = express.Router(); //可将路由规则分类到一个文件里

router.get('/setting', function (req, res) {
  res.send('welcome');
});
router.get('/lightsetting', function (req, res) {
  res.send('welcome');
});
router.get('/sizesetting', function (req, res) {
  res.send('welcome');
}); //最后将router导出

exports.router = router;