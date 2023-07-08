const fs = require('fs');
const path = require('path');

//利用正则表达式分离
//    匹配 style标签 里的所有字符 s是所有非空格字符 S是所有空格字符
const hstyle = /<style>[\s\S]*<\/style>/;
const hscript = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, './textt.html'),
  'utf8',
  function (err, htmldata) {
    if (err) {
      console.log('读取错误' + err.message);
    } else {
      console.log('读取HTML成功' + htmldata);
      rewrite(htmldata);
    }
  }
);

//总的思路就是 读取文件，把文件的部分截取出来（利用正则）存入变量，修改提取内容，写入新的文件

function rewrite(htmldata) {
  //利用正则提取所需的容(就是正则表达式的条件)，并且放到数组中
  const tiqu = hstyle.exec(htmldata);

  //替换style标签，在css里不需要写
  const newcss5 = tiqu[0].replace('<style>', '').replace('</style>', '');

  //把数据写入css文件中
  fs.writeFile(
    path.join(__dirname, './tes/6提取.css'),
    newcss5,
    function (err) {
      if (err) {
        return console.log('写入失败' + err.message);
      } else {
        console.log('写入成功');
        fs.readFile(
          path.join(__dirname, './tes/6提取.css'),
          'utf8',
          function (err, databa) {
            if (err) {
              return console.log('写入成功，读取失败' + err.message);
            } else {
              console.log('写入成功,读取内容如下' + databa);
            }
          }
        );
      }
    }
  );
}

//
