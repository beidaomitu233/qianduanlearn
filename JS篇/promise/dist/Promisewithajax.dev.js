"use strict";

//基于Promise封装ajax
function useajax(url) {
  //实例化Promise对象并将内容写在内部
  //函数的返回值就是Promise对象的返回值
  return new Promise(function (resolve, rejects) {
    //实例化XMLHttpRequest对象
    var x = new XMLHttpRequest(); //打开请求

    x.open('GET', url); //发送请求

    x.send(); //监听请求状态

    x.onreadystatechange = function () {
      //验证请求是否成果
      if (x.readyState === 4 && x.status === 200) resolve(x.response); //将请求成功的数据返回

      rejects(new Error('请求失败'));
    };
  });
} //返回的是promise对象所以可以直接调用then方法


useajax('https://www.fastmock.site/mock/d5676db29e9d85aaf6101253cf423499/newslist/newlist/tech').then(function (value) {
  console.log(value);
}, function (reason) {
  console.log(reason);
});