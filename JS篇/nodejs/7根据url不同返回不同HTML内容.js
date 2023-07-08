//实现原理 根据与接收到的req请求地址 if给不同的返回值
//设置默认响应内容为404  如果访问的是/ /index.html 等有关页面才返回特定，设置响应头，
const http = require('http');
const server = http.createServer();

let content = '404 Not Found';
// 第一个参数 req请求 第二个参数是res回应
server.on('request', (req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    content = '<h1>欢迎</h1>';
    console.log('成功');
  } else if (req.url === '/about.html') {
    //res.end 把收到的内容送去给浏览器解析渲染然后才放上去
    content = '<h1>关于</h1>';
    console.log('成功');
  } else {
    content = '404 Not Found';
  }
  res.setHeader('Content-type', 'text/html; charset=utf-8');
  res.end(content);
});

server.listen(80, () => {
  console.log('OK');
});
