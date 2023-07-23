//用promise封装fs.readFile
var fs = require('fs');

var path = require('path');
var p = new Promise(function (resolve, rejects) {
  fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', function (err, data) {
    //如果错误就直接放回错误类型的promise对象
    if(err) rejects(err);
    //正确直接返回数据
    resolve(data)
  });
});

p.then((value)=>{
  //成果之后的值是buffer类型的
  console.log(value.toString());
  //第二个参数就是rejcts之后的回调函数
},reason=>{
  console.log(reason);

})