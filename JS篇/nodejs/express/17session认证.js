//npm 安装express-session

//导入express模块

const express = require('express');
const app = express();

//导入express-session
const session = require('express-session');

app.use(
  session({
    secret: 'ziding', //可为任意字符串
    resave: false, //固定写法
    saveUninitialized: true, //固定写法
  })
);

//session中间件配置成功后，就会有req.session属性

app.get('/api/login', (req, res) => {
  //判断用户提交的登入信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '233') {
    return res.send({ status: 1, msg: '登入失败' });
  }
  //登入成功后的用户信息存储到session中
  //session中间件配置成功后，才会有req.session属性
  req.session.user = req.body; //用户的信息
  req.session.islogin = true; //用户登入的状态
  res.send({
    status: '0',
    msg: '登入成功',
  });
});

//获取用户名字的接口
app.get('/api/username.islogin', (req, res) => {
  if (!req.session.islogin) {
    return req.send({ status: 1, msg: 'shibai' });
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  });
});

//清空session信息
app.get('/api/logout', (req, res) => {
  //只会清除调用这个函数的用户
  res.session.destroy();
  res.send({
    status: 0,
    msg: '成功推出',
  });
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
