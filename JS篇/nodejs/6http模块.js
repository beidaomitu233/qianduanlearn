//http 模块是用来创建web服务器的模块 通过 httpcreateServer()
//web服务器软件包括 IIs  Apache等

//带入模块
const http = require('http');
//创建示例
const server = http.createServer();
//给服务器示例绑定 时间，监听客户端请求
//                   回调函数 当有人访问（请求时，就是调用这个函数，请求一次调用一次）
server.on('request', function (req, res) {
  console.log('user is visiting the webserver http://127.0.0.1 ');
  //req是请求对象 收到请求就会调用这个对象，可以用来获取请求的一些信息（包括客户端的数据和属性）
  let pin = `你的请求地址是${req.url},你的请求方法是${req.method}`;
  console.log(pin);

  //res是响应对象 也可以查看服务器属性和数据
  //之前访问没法打开是因为，服务端没有返回内容，end就是返回内容的，返回中文的时候会出现乱码，需要手动设置及内容编码格式（响应头）
  res.setHeader('Content-type', 'text/html; charset=utf-8');
  res.end(pin); //属性          属性值
});

//启动服务，监听80端口
server.listen(80, function () {
  console.log('server is runing in locahost http://127.0.0.1 ');
});
