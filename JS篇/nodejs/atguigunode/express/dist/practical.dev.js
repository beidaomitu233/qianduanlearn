"use strict";

//导入express对象
var express = require('express');

var products = require('./products.json');

console.log(products); //创建服务对象

var app = express(); //创建路由
//小练习动态路由匹配商品

/* app.get('/:id.html',(req,res)=>{
    //先获取参数
console.log(req.params.id);
//结构出id方便使用,但是这里的id是字符串类型的
let {id}=req.params
//根据参数取json文件中查找有没有对应好的id
products.find(item=>{
    if(item.id===Number(id)){
        //如果发现有对应的id就返回数据
        console.log(item);
        res.send(item)
        return
    }else{
        res.send('not found')
        return
        
    }
})

    
}) */

app.get('/index', function (req, res) {
  console.log(req);
  console.log(res);
  res.send('welcome to express');
}); //监听端口

app.listen(9001, function () {
  console.log('服务启动成功');
});