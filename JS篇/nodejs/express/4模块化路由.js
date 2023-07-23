//再实际应用的时候，一般不直接往app上挂载路由，而是通过模块化拆分
/* 
 只用app来注册路由，这样做方便管理
 
 1.创建对应的路由js文件
2调用express.Router() 函数创建路由对象
3.向路由对象上挂载具体路由
4使用exports向外共享路由
4使用app.use注册路由模块
 
模块化思想就是把路由当作自定义模块 把路由都分开 ，只在总文件里引入，并注册，这样条理清晰
 */

const express = require('express');
const app = express();

//导入路由模块,就是导入一个自定义的模块
const router = require('./5模块化路由2.js');
//注册路由模块,添加前缀
app.use('/api', router);

app.listen(80, () => {
  console.log('成功 http://127.0.0.1');
});
