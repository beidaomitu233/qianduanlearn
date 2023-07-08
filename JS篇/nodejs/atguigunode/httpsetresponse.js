//引入http模块
const http=require('http')
//生成测试数据
let data2=[{
    name:'zhangsan',
    age:18,
    id:16,
},{
    name:'zhangsan',
    age:18,
    id:16,
},{
    name:'zhangsan',
    age:18,
    id:16,
},{
    name:'zhangsan',
    age:18,
    id:16,
}]

const jsondata=JSON.stringify(data2);
const str=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>successful</h1>

</body>

</html>`

//创建服务对象
const server=http.createServer((request,response)=>{
    //设置响应头，让浏览器按照utf-8的编码格式解析成html内容
    response.setHeader('Content-Type','text/html;charset=utf-8')
    //server一般指服务端使用的技术
    response.setHeader('server','node.js')
    //使用数组可以，设置多个同名的响应头。
    response.setHeader('author',['changhui','zhangsan','lisi'])

    //设置响应码
    response.statusCode=200
    //用的很少一般不用。设置相应信息，在响应码的后面显示
    response.statusMessage='ok'


    //设置响应体
    response.write('this is write')
    //可以解析html标签，并且可以设置通过。
    response.write('<h1>这是响应体</h1>')
    //返回一个网页
    response.write(str)
    //结束相应只能设置一个
    response.end(jsondata)

})

//监听端口
server.listen(9001,()=>{
    console.log('服务启动成功');
})

