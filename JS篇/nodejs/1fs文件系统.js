//node是以模块化的方式运行的，需要什么就调用什么模块

//fs文件系统模块是node 官方提供的操作文件的模块，有很多方法和属性
//导入fs模块
const fs = require('fs');
//[]表示可选参数 ,回调函数中第一个参数就是 错误信息如果有错误信息就会返回 ，第二个参数是读取到的数据返回值(是字符串类型)
//fs.readFile(路径,[编码格式],回调函数) 方法读取文件
fs.readFile('./tes/1.txt', 'utf8', function (erra, dataStr) {
  //打印失败的结果
  /* 
        如果文件读取成功 erra的值为null  
        读取失败 则为 错误对象 ， pass则为undefined
        */
  if (erra) {
    //读取失败是没找到这个文件 路径错误
    return console.log('文件读取失败' + erra.message);
  } else {
    //打印成功的结果
    console.log('文件读取成功' + dataStr);
  }
});

//
