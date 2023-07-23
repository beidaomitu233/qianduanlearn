const express=require('express')
const app=express()

//声明全局中间件函数
let recodervister=(req,res,next)=>{
    if(req.query.code==='123'){
        next()

    }else {
        res.send('没有权限')
    }
}

//没有next() 就不会执行到这里.    //使用中间件的时间点是在路由内部
app.get('/index.html',recodervister,(req,res)=>{
    res.send('welcome')
})


//监听
app.listen(9001,()=>{
    console.log('启动成功');
})


