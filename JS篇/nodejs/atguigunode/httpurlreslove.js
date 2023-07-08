//引入http模块
const http=require('http')
const url=require('url')

//创建服务对象
const server=http.createServer((request,response)=>{
    //设置响应头，让浏览器按照utf-8的编码格式解析成html内容
    response.setHeader('Content-Type','text/html;charset=utf-8')

    //获取请求url的路径和参数,如果设置为true就以对象形式输出，默认是字符串
    const urlparsec= url.parse(request.url,true)

    console.log(urlparsec);
    console.log(urlparsec.pathname);
    console.log(urlparsec.query.name);
    
    //使用URL对象去解析.
    //需要将路径 参数和地址一起拼接
    const url2=new URL(request.url,'http://localhost:9001')
    console.log(url2);

    response.end('hello http')

})

//监听端口
server.listen(9001,()=>{
    console.log('服务启动成功');
})

