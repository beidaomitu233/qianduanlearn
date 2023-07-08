"use strict";

function run() {
  console.log('i  run ');
  {
    a: 10;

    b: 'hello';
  }
}

var obj = {
  data: [{
    name: 'zhangsan'
  }]
};
var shuju = 10; //第一种返回方式。

module.exports = {
  run: run,
  obj: obj,
  shuju: shuju
}; //第二种。两种方式是一样的

exports.run = run;
exports.obj = obj;
exports.shuju = shuju; //但是不能是哦那个 
//exports=value  不能直接返回一个value的常量值。例如exports=10
//