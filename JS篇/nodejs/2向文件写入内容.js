const fs = require('fs');

//向指定文件写入内容 fs.writeFile('文件，写入内容[编码格式],回调函数');
//如果写入的文件不存在则会创建一个文件，只能创建文件，不能创建目录，如果原本没有目录就会报错，如果两次写入同一个文件，后面就会覆盖前面
fs.writeFile('./tes/.txt', '1abc', 'utf8', (err) => {
  if (err) {
    return console.log('写入失败', err.message);
  } else {
    console.log('创建文件并写入数据成功');
  }
});
//写入某些变量 不需要加引号i
let ac = 'asdasd';
fs.writeFile('./tes/.txt', ac, 'utf8', (err) => {
  if (err) {
    return console.log('写入失败', err.message);
  } else {
    console.log('创建文件并写入数据成功');
  }
});

//
