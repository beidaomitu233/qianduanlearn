"use strict";

var express = require('express');

var router = express.Router();

var fs = require('fs');

var shortid = require('shortid');
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
}); //账本列表

router.get('/acountlist', function (req, res, next) {
  fs.readFile('./public/list.json', function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});
router.get('/acountlist/create', function (req, res, next) {
  res.send('创建账本');
});
router.post('/acountlist/create', function (req, res) {
  //输出请求体，内部已经继承了 body-parser所以不需要专门设置中间件
  console.log(req.body); //每个账单都应要要有个id.使用第三方包来生成

  var id = shortid.generate();
  req.body.id = id; //获取成功后往list.json写入数据.必须要异步写入。

  var jsonbody = JSON.stringify(req.body);
  console.log(jsonbody);
  fs.appendFile('./public/list.json', jsonbody + '\n', function (err) {
    if (err) throw err;
    console.log('账单添加成功');
    res.send('账单添加成功');
  });
});
router.get('/del', function (req, res, next) {
  fs.writeFile('./public/list.json', '' + '\n', function (err) {
    if (err) throw err;
    console.log('删除成功');
    res.send('删除成功');
  });
});
module.exports = router;