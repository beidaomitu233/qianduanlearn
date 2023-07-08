
const express=require('express');

//创建web服务器  创建应用对象
const app=express();

/* 
app.get('/json',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    const bata= {
        name:'hui'
    }

    let str=JSON.stringify(bata)
    res.send(bata)
    
})
 */
/* 
app.all('*', function(req, res, next) {undefined

    res.header("Access-Control-Allow-Origin", "*");

    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');

    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.header('Access-Control-Allow-Headers', 'mytoken');

    next();

});
 */
//1json转换
app.get('/json',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
const bata={
    namee:'atu1zz'
}
let str=JSON.stringify(bata)
res.send(str)
})


//8请求超时
app.get('/ezk',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    //设置一个3秒后返回的定时器
    setTimeout(()=>{

res.send('响应延迟')

    },3000)
})

//11axios请求
app.get('/axios',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.send('ok')
})

app.all('/cors',(req,res)=>{
    //设置响应头实现cors跨域                     默认是通配所有网页     这*号可以换成网页地址，只允许特定的网页       
    res.setHeader('Access-Control-Allow-Origin','*')
res.send('hello cors')
    
})

//设置监听端口
app.listen(3000,()=>{
    //控制台提示启动成功
console.log('服务器启动成功1')
});

