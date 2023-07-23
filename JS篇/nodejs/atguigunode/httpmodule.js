//引入http模块
const http=require('http')



//创建服务对象
const server=http.createServer((request,response)=>{
    //设置响应头，让浏览器按照utf-8的编码格式解析成html内容
    response.setHeader('Content-Type','text/html;charset=utf-8')
    //获取请求方法
    console.log(request.method);
   //获取请求url的路径和参数
   console.log(request.url);
   //获取HTTP协议版本号
   console.log(request.httpVersion);
    //获取请求头
   console.log(request.headers);
   
    response.end('hello http')
})

//监听端口
server.listen(3211,()=>{
    console.log('服务启动成功');
})

