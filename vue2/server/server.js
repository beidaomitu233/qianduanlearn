//创建express服务器
const express = require('express');

const app = express();

//导入history路由解析模块
const history = require('connect-history-api-fallback');
//使用中间件
app.use(history());


//托管静态资源
app.use(express.static(__dirname+'./dist'));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src 'self'"
  );
  next();
});


//接收get请求到首页
app.get('/', (req, res) => {
    res.send('Hello Express');
})

//启动服务器
app.listen(3000, () => {
    console.log('服务器启动成功');
})