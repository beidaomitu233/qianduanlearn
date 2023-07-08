"use strict";

//fs模块
//引入fs模块
var fs = require('fs'); //写入模块，分为异步和同步。


var str = '黄河之水天上来，奔流到海不复回。';
fs.writeFile('1.txt', str, function (err) {
  //如果不为空则表示写入失败
  if (!err) {
    console.log('写入成功');
  }
}); //同步写入

fs.writeFileSync('2.txt', str); //追加写入

fs.appendFile('2.txt', '\n重生之我要做一只猫', function (err) {
  if (err) {
    console.log('写入失败'); //终止程序向下执行

    return;
  }

  console.log('写入成功');
}); //使用参数调整追加写入

fs.writeFile('2.txt', '\t做一只猫可以喵喵喵', {
  flag: 'a'
}, function (err) {
  if (err) {
    console.log('写入失败'); //终止程序向下执行

    return;
  }

  console.log('写入成功');
}); //流式写入
//创建写入流对象,参数是写入的文本连接对象

var ws = fs.createWriteStream('3.txt'); //通过手动调用在写入

ws.write('流式写入更适用于高频词的写入');
ws.write('\n因为可以根据需要关闭连接'); //关闭连接

ws.close(); //文件读取

fs.readFile('3.txt', function (err, data) {
  if (err) {
    console.log("读取失败");
    return;
  } //输出的是buffer格式需要转化为字符串


  console.log('-----');
  console.log(data.toString());
});
console.log('流式读取'); //流式读取
//创建流读取对象，没有函数作为参数但是有返回值。

var rs = fs.createReadStream('1.txt'); //绑定data事件，

rs.on('data', function (chunk) {
  console.log(chunk);
});