//只在局部起作用的叫局部中间件，也能共享req res

const express = require('express');
const app = express();

//定义中间件函数 ,其实就是个函数 里面有这特定的参数,不是use定义的
const zjj = (req, qes, next) => {
  console.log('局部调用了中间件');
  //next后就不要写内容了，要不然会混乱，next一定要写否则流程就卡住了
  next();
};
//中间件必须要在路由之前，因为代码从上到下匹配，匹配完了就结束了，
const zjj2 = (req, qes, next) => {
  console.log('局部调用了中间件2');
  next();
};

const zjj3 = (req, qes, next) => {
  console.log('局部调用了中间件3');
  next();
};

//在路由这里写上中间件，就是局部作用
app.get('/', zjj, (req, res) => {
  console.log('到达路由');
  res.send('home+');
});
//调用多个中间件的写法 ，路由的三个参数，请求方式，请求地址，中间件，操作函数
app.get('/user', [zjj2, zjj3], (req, res) => {
  console.log('到达路由');
  res.send('/user');
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
