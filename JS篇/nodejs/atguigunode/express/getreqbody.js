const express=require('express')
const app=express()
const bodyParser=require('body-parser')

//解析json格式的请求体数据
const jsonparser=bodyParser.json()

//解析query格式的请求体数据
const urlencodedparser=bodyParser.urlencoded({extended:false})

//没有next() 就不会执行到这里.获取登入页面
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})

//获取用户提交的信息
//urlencodedparser是解析发送过来的请求体。解析完成后会放到req.body中
app.post('/login',urlencodedparser,(req,res)=>{
    console.log(req.body);
    res.send('登入成功')
})


//监听
app.listen(9001,()=>{
    console.log('启动成功');
})


