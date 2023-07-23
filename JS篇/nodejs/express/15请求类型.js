/* 
请求头分为 两种 简单请求 预检请求

简单请求包括 get post head 
http头信息不超过九个个字段并且没有自定义头部字段
②HTTP头部信息不超过以下几种字段：无自定义头部字段、Accept.Accept--Language、Content-Language、DPR、
Downlink、Save-Data、Viewport-Width、Width、Content-Type(只有三个值application/x-www-form-
urlencoded.multipart/form-data.text/plain)

预检请求：在正式与服务器通讯之前，浏览器会先发送option 请求进预检，
来获知服务器是否允许该实际请求，服务器响应这次请求之后才会发送真正的请求，并且携带真实的数据

请求方式为简单之外的方法
请求头信息包括 自定义头部字段
向服务器发送了application/json格式的数据


*/
