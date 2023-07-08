"use strict";

//自动封装成Promise方法
var util = require('util');

var fs = require('fs');

var readfilepromise = util.promisify(fs.readFile);
readfilepromise('1.txt').then(function (value) {
  return console.log(value.toString());
});

function useajax(url) {
  //实例化XMLHttpRequest对象
  var x = new XMLHttpRequest(); //打开请求

  x.open('GET', url); //发送请求

  x.send(); //监听请求状态

  x.onreadystatechange = function () {
    //验证请求是否成果
    if (x.readyState === 4 && x.status === 200) return x.response; //将请求成功的数据返回

    return new Error('请求失败');
  };
}

var ajaxpromise = util.promisify(useajax);
ajaxpromise('https://www.fastmock.site/mock/d5676db29e9d85aaf6101253cf423499/newslist/newlist/tech').then(function (value) {
  return console.log(value.toString());
});