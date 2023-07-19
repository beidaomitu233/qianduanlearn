var express = require('express');
const session=require('express-session')
const mysql = require('mysql');
//导入mysql处理session的模块
const MySQLStore=require('express-mysql-session')(session)

//导入cookie-parser模块，用于解析cookie。将用户访问相关的信息存储在数据库中
const cookieParser=require('cookie-parser')
//token加密
const jwt=require('jsonwebtoken')

var router = express.Router();


//基于mysql来完成对session进行存储

//创建连接池
const pool=mysql.createPool({
  host:'124.222.62.203',
  user:'qianduantest',
  password:'CEiwCGh2ZCEy3BAr',
  database:'qianduantest'
})


// 配置 session 存储后端，基于 MySQL 实现
const sessionStore = new MySQLStore({
  clearExpired: true,
  checkExpirationInterval: 900000, // 每15分钟检查过期会话
  expiration: 86400000, // 会话有效期为24小时
  createDatabaseTable: true, // 如果不存在会话表，则创建
  schema: {
    tableName: 'sessions', // 会话表的名称
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
}, pool);

//设置session中间件,这个中间件会在每次请求时都执行
router.use(session({
  name:'session_id',//设置cookie中的name值，默认是connect.sid。这个cookie后续用于查找session
  secret:'beidao',//密钥，参与加密的字符串也叫加盐，对session_id进行加密
  saveUninitialized:false,//是否每次请求前都设置一个cookie存储session的id，建议设置为false。设置为true可以查看访客
  resave:true,//是否每次请求都重新保存session。用户在页面上操作时就不会遇到过期问题。
  store:  sessionStore,
      //设置存储的位置，这里一般是设置数据库，根据需要来设置
  cookie:{
      httpOnly:false,//是否允许客户端通过js来修改cookie.可以通过document.cookie来修改。这样不安全
      maxAge:1000*6000//设置cookie的过期时间，毫秒为单位
  }
  
}))


router.get('/login',(req,res,next)=>{
  console.log('--------用户输入--------');
  console.log( req.query);
  const { username, password } = req.query;

  // 查询数据库以验证用户名和密码
  pool.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      //找到这个用户之后返回，因为只会有一个对应的用户
      if (results.length > 0) {
        const user = results[0];
        console.log('--------数据库查询结果--------');
        console.log(user);
        console.log(req.session);
        // 将用户信息存储在 session 中
        req.session.username = user.username;
        req.session.password=user.password;  
        req.session.uid=user.id;
        let token1=jwt.sign(
          //加密内容
          {name:user.username,password:user.password},
          //加密字符串
          'beidaoz ',
          //单位是秒
          {expiresIn:2})
          req.session.token=token1;
          console.log(token1);
        res.redirect('/account.html')
        next()
      } else {
        res.redirect('/index.html');
      }
    }
  );


})

router.get('/register',(req,res,next)=>{
  console.log('--------用户输入--------');
  console.log( req.query);
  const { username, password } = req.query;

  // 先查询数据库以验证用户名是否已存在
  pool.query(
    'SELECT * FROM users WHERE username = ? ',
    [username],
    (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      //找到这个用户之后返回，因为只会有一个对应的用户
      if (results.length > 0) {
        res.status(401).json('username: ' + username + ' already exists');
      } else {
          //如果数据库中没有重复的名字的可以注册。
  pool.query(
    'INSERT INTO users (username,password) VALUES(?,?)',
    [username, password],
    (error, results) => {
      //注册失败
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Database error' });
      }else{
        //注册成功
        console.log(results);
        console.log('User registered successfully');
        res.redirect('index.html');
      }

    }
  );
      
      }
    }
  );



})

//使用token保护 api
router.get('/account', (req, res) => {

  //使用加密token对比验证
  jwt.verify(req.session.token,'beidaoz',(err,success)=>{

    //如果验证成功就跳转到页面
    if(success){
      res.redirect('/account.html')
    }else{
      //如果验证失败就跳转到登录页面
      res.redirect('/index.html')
    }
  })



})

module.exports = {router,sessionStore}
