/* 
数据库是用来组织 存储 管理数据的仓库

数据库管理系统 就是数据库  

主流的有mysql Oracle sql server  都属于传统型数据库，关系型数据库

mongodb 属于非关系型数据库，和关系型互补，可以同时使用

*/

//导入mysql 模块
const mysql = require("mysql");
//与数据库建立连接
const lj = mysql.createPool({
  host: "127.0.0.1", //数据库的ip地址
  user: "root", //数据库登入账号
  password: "l123456789", //数据库登入密码
  database: "new_schema1", //数据库名
});

//测试mysql模块是否正常工作，输出1 1就是正常运行
lj.query("select 1", (err, result) => {
  //未正常工作责报错
  if (err) return console.log(err.message);
  //正常执行sql语句
  console.log(result);
});

//进行语句查询 ，得到的结果是以数组形式输出
lj.query("select *from users ", (err, result) => {
  //未正常工作责报错
  if (err) return console.log(err.message);
  //正常执行sql语句
  console.log(result);
});

/* 
//向数据库中新增一条数据，
const userr = { username: "huihui", userpassword: "lz" };
//定义待执行的sql语句 问号是占位符，这样可以后面在输入但先展位，可以避免sql注入
const jia = "insert into users (username,password) value(?,?)";

lj.query(jia, [userr.username, userr.userpassword], (err, result) => {
  if (err) return console.log(err.message);
  //如果执行的是insert 语句 责result返回的是一个对象
  if (result.affectedRows === 1) console.log("插入数据成功");
});
 */

//快捷插入数据
const userr = { name: "edqwe", password: "wqeqw" };
//定义待执行的sql语句 问号是占位符，这样可以后面在输入但先展位，可以避免sql注入
const jia = "insert into users set ?";
//设置一个回调函数来接收运行结果
lj.query(jia, userr, (err, result) => {
  if (err) return console.log(err.message);
  //如果执行的是insert 语句 责result返回的是一个对象
  if (result.affectedRows === 1) console.log("插入数据成功");
});
