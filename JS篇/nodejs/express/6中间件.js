//从请求到到响应的中间流程就是 中间件在进行处理 并且中间件是相连的 一个处理完就接着下一个
//中间件的调用流程吗，到达express服务器之后会联系嗲用多个中间件，从而对这次请求预处理
//中间件的本质就是处理函数 必须包含next() 函数作为形参
//next()函数的作用 调用这个函数表示处理完一个中间件，然后继续向下处理
// 多个中间件之间是共享同一份req res 这样可以在上有的中间件里添加统一的res和req方法和属性给下游的中间件和路由进行使用
//路由是最后的处理

const express = require('express');
const app = express();

const zj = function (req, res, next) {
  console.log('最简单的中间件，先给中间件');
  //利用共享特性，让下游的中间件使用
  const timee = Date.now();
  //给req添加自定义属性
  req.timeee = timee;
  //转交给下一个路由
  next();
};
//定义全局生效的中间件  只要是请求就会生效的中间件
app.use(zj);

app.get('/', (req, res) => {
  console.log('成功再给路由');
  res.send('home+' + req.timeee);
});

app.listen(80, () => {
  console.log('http://127.0.0.1');
});
