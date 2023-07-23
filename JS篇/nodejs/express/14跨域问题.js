//利用cors 中间件解决跨域问题
//cors 是express的第三方插件
//前后端分离就会导致跨域，所以需要解决接口跨域才能分离
//服务器的同源策略就是导致错误 其实就是设置响应头就可以
const express = require('express');
const app = express();

//下载 cors包 导入包 调用包
const cors = require('cors');
app.use(cors());

//表示只允许 来自这个域名的跨域请求
res.setHeader('Access-Control-Allow-Origin', 'https://hui7.top');
//表示允许全部
res.setHeader('Access-Control-Allow-Origin', 'https://hui7.top');

//一般最多只能向服务器发送9个请求头，如果需要额外请求就要提前声明否则会报错
//                                            额外声明的
res.setHeader('Access-Control-Allow-Headers', 'content-type');

//默认情况下cors客户端只支持get post head请求 可以设置允许其他的请求头
res.setHeader('Access-Control-Allow-Methods', 'content-type');

app.get('/', (req, res) => {
  console.log('路由获取成功');
  res.send('home');
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
