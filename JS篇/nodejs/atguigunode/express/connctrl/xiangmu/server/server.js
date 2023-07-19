const express=require('express')
const session=require('express-session')
const mysql = require('mysql');
//导入mysql处理session的模块
const MySQLStore=require('express-mysql-session')(session)
//导入body-parser模块，用于解析post请求体
const bodyParser=require('body-parser')

//导入cookie-parser模块，用于解析cookie。将用户访问相关的信息存储在数据库中
const cookieParser=require('cookie-parser')

//解析query格式的请求体数据
const urlencodedparser=bodyParser.urlencoded({extended:false})


const app=express()
app.use(cookieParser())



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
app.use(session({
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



// 登录路由处理程序
app.get('/login',(req, res) => {
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
          // 将用户信息存储在 session 中
          req.session.username = user.username;
          req.session.password=user.password;  
          req.session.uid=user.id;

          res.send('登录成功');
        } else {
          res.status(401).send('用户名或密码错误');
        }
      }
    );
    console.log('------将用户访问的-------');



  });
  
  // 需要验证登录的路由处理程序
  app.get('/profile', (req, res) => {
    // 检查 session 中的用户信息
   const  username= req.session.username;
    if (username) {
      // 已登录，执行相应的操作
      res.send('欢迎访问个人资料页');
    } else {
      // 未登录，重定向到登录页或返回错误信息
      res.send('未登入'); // 或者返回错误信息：res.status(401).send('未登录');
    }
  });

  //查看访问者
  app.get('/visiter', (req, res) => {
//验证是否已登入
const  sid= req.cookies.session_id;
if (sid) {
    // 已登录，执行相应的操作
        pool.query(
            //查询所有的等如果的信息。
            'SELECT * FROM sessions ',
            (error, results) => {
              if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ error: 'Database error' });
              }
              //找到这个用户之后返回，因为只会有一个对应的用户
              if (results.length > 0) {
                console.log(results);
             const  visiterinfo=  results.map((item) => {
                    //将json转化为对象格式
                    const data=JSON.parse(item.data);
                    //将需要的信息解构取出来
                    const {username,uid,cookie:{expires}}=data
                    //将时间转化为中国时间，但还是由时差，因为写入数据库的时间是格林威治时间
                    const chinatime = new Date(expires).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
                    console.log(username,uid,chinatime);
                    //重新组装成一个对象
                    const visiterinfo={username,uid,chinatime}
                    //将对象返回出去
                    return visiterinfo
                })
                //把信息对象返回给前端
                res.send(visiterinfo);
              } else {
                res.status(401).send('未有用户登入过');
              }
            }
          );
       
  } else {
    // 未登录，重定向到登录页或返回错误信息
    res.send('未登入'); 
  }



  });

module.exports=app