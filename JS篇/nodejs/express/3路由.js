//express 中的路由是指 客户端请求与服务器处理函数之间的映射关系
//express的路由分为分为三个部分，请求类型，请求URL地址，处理函数

//这个就是一个路由，请求方式 url 处理函数，这就是挂载路由
app.get('/abc', (req, res) => {});
app.get('/ac', (req, res) => {});
//匹配过程，当每个请求到达服务器，都需要先经过路由器匹配，匹配成功后才会调用对应的处理函数
/* 
匹配包括 方式和url
会按照顺序一直匹配下来，如果没有就报错了
  
  */
