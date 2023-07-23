//将数据导入修改后再写入

const fs = require('fs');

fs.readFile('./tes/3.txt', 'utf8', function (err, databa) {
  if (err) {
    return console.log('读取失败' + err.message);
  } else {
    console.log('读取成功' + databa);
    console.log(typeof databa);
    const n = databa.replaceAll('=', ':');
    console.log(n);

    fs.writeFile('./tes/3.txt', n, function (err) {
      if (err) {
        return console.log('写入失败', +err.message);
      } else {
        console.log('写入成功');
      }
    });
  }
});
