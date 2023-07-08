//导入express
const express = require('express');

//创建web服务器
const app = express();

//监听 get端口
/* 
参数1 客户端请求的url地址
参数2 请求对应的处理函数
req: 请求对象，包含了请求相关的属性和方法
qes 响应对象，也包含了

post也是一样 ，res.send是响应内容
*/

app.get('/abc', (req, res) => {
  res.send({ namee: 'zs', age: 14 });
  console.log('chengg');
  //通过req.query 可以获取到客户端发送过来的 查寻参数 ，默认下是一个空对象
  // 参数发送  ？name:'zzz' 以问号开头
  console.log(req.query);
});

//这里的id是一个动态匹配参数，可以匹配传进来的任意参数 ，不一定写id 写其他的也行
app.get('/aac/:id', (req, res) => {
  //req.params 是动态匹配到的url 参数 会以 对象id:xxx输出
  console.log(req.params);
  res.send(req.params);
});
//也可能跟多个参数  访问地址http://127.0.0.1/aac/1/aa
app.get('/aac/:id/:zz', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post('/abc', (req, res) => {
  res.send({ namee: 'zspost', age: 14 });
  console.log('chengg');
});

//启动服务器 监听80端口，并回调函数
app.listen(80, () => {
  console.log('服务器启动成功，监听正在监听80端口2');
});
