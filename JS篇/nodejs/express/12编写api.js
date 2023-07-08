const express = require('express');
const app = express();
//导入路由
const router = require('./13api模块');

//注册路由
app.use('/api', router);

//解析表单数据的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('路由获取成功');
  res.send('home');
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
