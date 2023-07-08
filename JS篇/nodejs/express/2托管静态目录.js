//express.static(目录)  创建一个静态资源服务器，
// 资源访问路径不包括填写的参数
/* 注意：Express在指定的静态目录中查找文件，
并对外提供资源的访问路径。 
因此，存放静态文件的目录名不会出现在URL中。 */

const express = require('express');
const app = express();
//托管多个静态目录 ，查找文件时会按照顺序，先到第一个目录找
app.use(express.static('./tes'));
//拼接指定的目录 ，可以随意写
app.use('./tes', express.static('./tes'));
app.use(express.static('../zidingyibao'));

app.listen(80, () => {
  console.log('qingdongchenggo2ng http://127.0.0.1');
});
