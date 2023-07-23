var express = require('express');
var router = express.Router();
const fs=require('fs')
const shortid=require('shortid')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//账本列表
router.get('/acountlist',(req,res,next)=>{


})

router.get('/acountlist/create',(req,res,next)=>{
  res.send('创建账本')
})

router.post('/acountlist/create',(req,res)=>{
  //输出请求体，内部已经继承了 body-parser所以不需要专门设置中间件
  console.log(req.body);
  //每个账单都应要要有个id.使用第三方包来生成
  const id=shortid.generate()
  req.body.id=id
  //获取成功后往list.json写入数据.必须要异步写入。
  const jsonbody=JSON.stringify(req.body)
  console.log(jsonbody);


})


router.get('/del',(req, res, next)=>{


})


module.exports = router;
