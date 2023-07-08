//定义的全局 中间件的执行顺序是按照写的顺序，
//

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('全局中间1件执行成功');
  const timee = Date.now();
  req.nowtime = timee;
  next();
});
app.use((req, res, next) => {
  console.log('全局中间2件执行成功');
  next();
});

app.use((req, res, next) => {
  console.log('全局中间3件执行成功');
  next();
});

app.get('/', (req, res) => {
  console.log('程序处理完毕');
  res.send(req.nowtime + '中间全部执行完毕，路由执行完毕，程序完成');
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
