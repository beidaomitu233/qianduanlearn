//导入模块
const http = require('http');
const path = require('path');
const fs = require('fs');

//创建服务器
const server = http.createServer();
//绑定请求事件
let fpath = '';
server.on('request', (req, res) => {
  //把请求的URL映射为具体存放路径，就是请求时只会给ip后面的路径，就是web文件相对地址，
  //把请求文件和当前目录地址拼接在一起就可以实现
  const url = req.url;
  /*  // web/index 是这样的
  const truepath = path.join(__dirname, url); */ // c/../web/index  这样才是完整的才是绝对没问题

  //当输入/时在后台补全路径
  if (req.url === '/') {
    fpath = path.join(__dirname, './textt.html');
  } else {
    //当输入其他文件夹的时候就 再拼接上其他路径
    fpath = path.join(__dirname, './', url);
  }

  //读取文件并响应文件
  fs.readFile(fpath, 'utf8', (err, databa) => {
    if (err) return res.end('404Not found');
    res.end(databa);
  });
});

//监听80事件
server.listen(80, () => {
  console.log('监听成功');
});
