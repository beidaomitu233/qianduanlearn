"use strict";

//拷贝文件
var fs = require('fs'); //方式一,
//读取文件


var readresult = fs.readFileSync('./1.txt'); //写入文件

var writeresult = fs.writeFileSync('./4.txt', readresult);
console.log('同步读写完成'); //方式二，流式读写

var readresult2 = fs.createReadStream('./1.txt');
var ws = fs.createWriteStream('5.txt'); //查看读取数据，读一次就会触发一次data事件

readresult2.on('data', function (chunk) {
  console.log(chunk); //写入数据

  ws.write(chunk);
}); //完成后提示

readresult2.on('end', function () {
  console.log('流式读写完成');
}); //快捷写法

readresult2.pipe(ws);