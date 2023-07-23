const express = require('express');
const app = express();

const qs = require('qs');

//制作一个解析表单数据的中间件，就是前端发过来的表单信息
const chulu = (req, res, next) => {
  //在中间件中需要监听req对象的data时间，获取客户端发送到服务器的数据，
  //有时数据量比较大就会分段进行发送，所以需要在服务端进行拼接
  //触发一次data事件，只会获取到一部分数据

  //用来存储发过来的数据
  let str = '';
  //监听req的on事件
  req.on('data', (pinjie) => {
    str += pinjie;
    //监听req的end事件 end事件触发就代表拼接完成，并且拿到完整的数据
  });
  req.end('end', () => {
    console.log(str);
    //拼接完成后需要解析成对象
    const body = qs.parse(str);
    //挂载到req.body上这样下游就可以公用
    req.body = body;
    next();
  });
};

module.exports = chulu;
