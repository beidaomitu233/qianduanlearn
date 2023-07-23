//中间件分成了五类
/* 
应用级别 绑定到app上的都是
路由级别 绑定到rourer上的中间件
错误级别  作用 专门捕获整个项目发生的异常错误，从而防止项目异常崩溃的
错误中间件必须要有四个形参 并且顺序是固定的，(err,req,res,next)
位置必须要放在所有路由的后面且不需要写next 

express内置的  
express.static 静态托管 全兼容
express.json 解析json格式请求体数据 4.16.0+可用
express.urlencoded 解析 url-encoded格式的表单 4.16.0+可用


第三方

*/

const express = require('express');
const app = express();

//epxress.json 写法配置解析application./json格试数据的内置中间件
//解析完之后就把结果挂载到req.body上 多个中间件之间共用同一个req res
app.use(express.json());

//express.urlencoded 写法 配置解析application/X-www-form-urlencoded格式数据的内置中间件
//express.url 就是基于parser进一步封装出来的
app.use(express.urlencoded({ extended: false }));
//4.16.0前的版本 用的是parser 中间件，是第三方中间件从npm中下载 require导入
app.use(parser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  //在服务端可以使用req.body  这个属性接收客户端发送过来的请求数据
  //默认情况下如果不配置任何表单数据的中间件 这个属性默认就等于 undefined
  //json 和表单的接收都是body，所以写两个解析一个body就够了
  console.log(req.body);
  res.send('ok');
});

app.get('/error', (req, res) => {
  throw new Error('服务器内部发生错误');
  console.log('路由获取成功');
  res.send('home');
});

//放在所有路由后面才能获取整个项目的错误
app.use((err, req, res, next) => {
  //这里的message 就是上面的Error
  console.log('错误' + err.message);
  res.send('服务器错误');
  //不需要写next 因为错误就结束了而且是最后的位置
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
