const express = require('express');
const app = express();

//导入jwt相关包
const jwt = require('jsonwebtoken');
const expressjwt = express('express-jwt');

//允许跨域资源访问
const cors = require('cors');
app.use(cors());

//设置secret密钥本质还是字符串
const secretkey = 'ithuiha';

//登入成功后
//调用jwt的sign方法生成jwt字符串 并通过token属性发给客户端
/* 
参数1 用户的信息对象
参数2 加密的密钥
参数3 配置对象 可以配置当前的token有效期

*/
const token = jwt.sign({ username: userinfo.username }, secretkey, {
  expiresIn: '5m',
});

//把用户发过来的jwt还原成 json字符串的中间件
/* 
第一个参数是 转化， 第二个参数配置那些接口不需要访问权限

配置成功express jwt之后就可以把解析出来的用户信息挂载到 req.user属性上

不建议把密码存在token中容易泄露
*/
app.use(expressjwt({ algorithms: ['HS256'] }).unless({ path: [/^i/] }));

res.send({
  msg: '登入成功',
  //把jwt密钥发给客户端
  tokens: token,
});

app.get('/', (req, res) => {
  console.log('路由获取成功');
  res.send('home');
});

app.listen(80, (req, res) => {
  console.log('服务器启动成功');
});
