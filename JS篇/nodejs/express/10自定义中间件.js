const express = require('express');
const app = express();

//引入自定义模块
const zidinng = require('./11模块化自定');
//把中间件函数注册为全局
app.use(zidinng);

app.get('/', (req, res) => {
  console.log('路由获取成功');
  res.send('home');
  res.send(req.body);
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
