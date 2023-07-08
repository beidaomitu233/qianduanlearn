//引入express框架
const express=require('express');
//引入路径处理模块
const path=require('path')

//创建web服务器  创建应用对象
const app=express();

//静态资源访问服务器功能
app.use(express.static(path.join(__dirname,'public')))


//开启跨域功能
app.all('*', function(req, res, next) {undefined

    res.header("Access-Control-Allow-Origin", "*");

    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');

    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.header('Access-Control-Allow-Headers', 'mytoken');

    next();

});

//创建路由规则  
        // request请求对象  response响应对象
app.get('/first',(req,res)=>{
    //设置响应头  设置允许跨域
   /*  response.setHeader('Access-Control-Allow-Origin','*') */
    //响应体  里面只能放字符串，如果要放对象的话，需要转化成json 
     /* res.send('Hello Ajax'); */
//响应一个数据时这么写
const bata= {
    name:'hui'
}
let str=JSON.stringify(bata)
res.send(bata)

    })

    app.get('/responseData',(req,res)=>{
        res.send({"name":"niu"})
    })
    //req.query用来获取get方法传递的参数
    app.get('/gete',(req,res)=>{
        res.send(req.query)
        res.send('successful')
        console.log('请求成功');
    })

    app.post('/post',(req,res)=>{
        response.setHeader('Access-Control-Allow-Origin','*')
        res.send(req.body)
    })


    app.get('/error',(req,res)=>{
     //返回自定的错误码提示，并输出某提示
        res.status(400).send('unready')
    })


    app.get('/verifyEmailAdress', (req, res) => {  
           if (req.query.email == 'itheima@itcast.cn')
 {  res.send({ message: '邮箱地址已经注册过了，请更换其他邮箱地址' })} else {res.send({ message: '恭喜，邮箱地址可用' })} });


app.get('/json',(req,res)=>{
res.send('successful')

})

app.get('/api',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')

const bata= {
    name:'redcup',
    Number:15,
}
let str=JSON.stringify(bata)
res.send(bata)
console.log(bata);

    })


//设置监听端口
app.listen(80,()=>{
    //控制台提示启动成功
console.log('服务器启动成功')
});

