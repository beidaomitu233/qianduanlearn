const express=require('express')
const app=express()

//导入模块化路由
const routersetting=require('./modulerouter1')

//使用模块化路由
app.use(routersetting)



app.get('/index',(req,res)=>{
    res.send('welcome')
})


//监听
app.listen(9001,()=>{
    console.log('启动成功');
})


