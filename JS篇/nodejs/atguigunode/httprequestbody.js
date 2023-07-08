//引入http模块
const http=require('http')

//创建服务对象
const server=http.createServer((request,response)=>{
    //设置响应头，让浏览器按照utf-8的编码格式解析成html内容
    response.setHeader('Content-Type','text/html;charset=utf-8')
    let requestbody=''
    
    //绑定流式读取的data事件，当读取完一块数据后触发回调函数。
    request.on('data',chunk=>{
        requestbody+=chunk  //已经从buffer自动转换成字符串了
    })
    request.on('end',()=>{
        console.log(requestbody);
      //读取完毕后就结束
    response.end('hello http')
    })

})

//监听端口
server.listen(3211,()=>{
    console.log('服务启动成功');
})

