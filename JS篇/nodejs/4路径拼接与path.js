const fs = require('fs');
const path = require('path');

//利用node 执行时 ，只会在终端目录下拼接上相对路径的地址
//即使在终端命令中输入路径也不行，只拼接终端所处位置和写的相对路径
fs.readFile('./tes/3.txt', 'utf-8', function (err, databa) {
  if (err) {
    return console.log('读取失败' + err.message);
  } else {
    console.log('读取成功' + databa);
  }
});
//利用绝对路径可以解决拼接问题，但是绝对路径的移植性很差。
// __dirname 表示当前文件所处的目录  ,这样就完美解决了所有问题
console.log('这里是路径-----' + __dirname + '-----这里是路径');
fs.readFile(__dirname + '/tes/2.txt', 'utf-8', function (err, databa) {
  if (err) {
    return console.log('读取失败' + err.message);
  } else {
    console.log('读取成功' + databa);
  }
});

//path 路径模块，用来处理路径拼接的的 有很多方法和属性，需要引用后使用
//path.join() 把多个路径片段拼接成完整字符串
const path1 = path.join('/a', '/b/e', '../', '/f', '/index.html');
console.log(path1); // ../ 返回上一层目录，所以输出abf

const path2 = path.join(__dirname, './tes/3.txt');
console.log(path2);

fs.readFile(
  path.join(__dirname, './tes/3.txt'),
  'utf-8',
  function (err, databa) {
    if (err) {
      return console.log('读取失败' + err.message);
    } else {
      console.log('读取成功' + databa);
    }
  }
);

// 获取路径中的文件名， path.basename(path,ext) ,可以获取路径中的最后一部分,上传文件的时候需要用
//path 路径字符串  ext文件扩展名（可选，并且可以跟多个）
let fullName = path.basename(path1);
console.log(fullName);

//只获取文件名，不包括扩展名
let fileName = path.basename(path1, '.html');
console.log(fileName);

//获取文件扩展名
let fileExt = path.extname(path1);
console.log(fileExt);
