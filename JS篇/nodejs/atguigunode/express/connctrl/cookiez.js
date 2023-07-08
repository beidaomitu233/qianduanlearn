const express=require('express');
const app=express();
//导入并使用cookie-parser中间件
const cookieParser=require('cookie-parser')
app.use(cookieParser())

//设置响应cookie
app.get('/api',(req,res)=>{
    //第二个参数是设置cookie的有效时间，是可选参数，默认是关闭浏览器就失效
    //设置事件后会根据时间来销毁
    res.cookie('name','lisi',{maxAge:10000*1000})
    res.cookie('uid','3123123')
    res.send('设置cookie成功')
})

//查看张当
app.get('/api/account',(req,res)=>{
    res.send('查看成功')
})

//删除cookie
app.get('/api/del',(req,res)=>{
    //参数为属性名 key
    res.clearCookie('name')
    res.send('删除成功')
})

//获取cookie
    app.get('/api/getcookie',(req,res)=>{
        console.log(req.cookies);
        res.send('获取成功,你好'+req.cookies.name)
    })

app.listen(9001,()=>{
    console.log('服务器启动成功');
})