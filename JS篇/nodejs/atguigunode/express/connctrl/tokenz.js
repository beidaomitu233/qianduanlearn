const express=require('express')
const jwt=require('jsonwebtoken')
const app=express()

//生成token
app.get('/gettoken',(req,res)=>{
   // let token=jwt.sign(用户数据，加密字符串，配置对象)
   let token1=jwt.sign(
    {id:'123',name:'lisi'},
    'beidao',
    //单位是秒
    {expiresIn:10})
    console.log(token1);

    //验证token
jwt.verify(token1,'beidao',(err,data)=>{
    if(err){
 console.log('token验证失败');
return
}
console.log(data);
})
})



app.listen(9001,()=>{
    console.log('服务器启动成功');
})