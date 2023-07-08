/*

node中的第三方模块又叫包
包是基于内置模块封装出来的  大概就是框架

从 npm中搜索需要的包，下载包需要从npm包管理工具中下载

nodejs 已经自带npm管理工具 在终端中运行 npm -v
包就像分装好的函数，去调用 ，传递参数，修改格式等等都可以

安装包的方法

npm install 包的完整名词 
npm i 完整名称  ，这个是简写

下载指定版本 在名词后面加@版本号

安装时间包
npm install moment 
现在推荐用这个 ，上面这个已经不维护了
npm  i day

包使用方法在官方文档有
包版本语义化在我来笔记中 


 */

//简单体验 ,下载的时候包叫什么 导入就叫什么
const moment = require('moment');
const dayjs = require('dayjs');
let datee = dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A');

let dataa = moment().format('YYY-MM-DD HH:mm:ss');
console.log(dataa);
console.log(datee);

//md 文件转化为html文件的包  i5ting_toc -f path -o 即可转化
