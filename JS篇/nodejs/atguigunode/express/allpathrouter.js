const express=require('express')
const app=express()
const fs=require('fs')
const path=require('path')

//声明全局中间件函数
function recodervister(req,res,next){
    console.log('记录访问者的ip地址');
    //获取 请求url和客户端ip地址
    let {url,ip}=req
    //将信息追加进iprecoder文件，使用绝对路径，写入内容是ip和url
    fs.appendFileSync(path.resolve(__dirname,'./iprecoder.txt'),`${url}--${ip}\n`)
    //调用next才会执行后续代码
    next()
}

//使用中间件
app.use(recodervister)


//没有next() 就不会执行到这里
app.get('/index.html',(req,res)=>{
    res.send('welcome')
})


//监听
app.listen(9001,()=>{
    console.log('启动成功');
})


