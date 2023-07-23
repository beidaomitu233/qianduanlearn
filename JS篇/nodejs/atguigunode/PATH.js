const fs=require('fs')
const path=require('path')

//PAth

//使用path.resolve()方法可以将多个路径解析为一个规范化的绝对路径。

//两个参数 ，第一个是绝对路径第二个是相对路径
path.resolve(__dirname,'.\PATH.js')
console.log(path.resolve(__dirname,'./PATH.js'));


//输出当前系统的分割线
console.log(path.sep);

//parse方法解析路径

console.log(__filename);

let str= 'D:\\nodeJs\\13-path\\path.js'; 
console.log(path.parse(str));

//快速获取文件名

console.log(path.basename(str));

//获取扩展名
console.log(path.extname(str));