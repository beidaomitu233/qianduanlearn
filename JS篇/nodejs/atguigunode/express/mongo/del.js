//导入mongoose模块用于连接数据库
const mongoose=require('mongoose')
const conn=require('./conn')
console.log(conn);

//连接到数据库
mongoose.connect('mongodb://localhost:27017/beidao')


//设置回调函数,建议使用once
mongoose.connection.once('open',()=>{
    console.log('连接成功');
    //连接 成功的后续逻辑操作都会在这里执行
    //创建模型对象，将文档结构放到集合内封装，就可以操作集合 增删改查。
/*     conn.deleteOne({_id:'64a91a5532c7774c13af3775'}).then((err,data)=>{
        if(err) throw err
        console.log('删除成功');
}) */
})


//失败的回调
mongoose.connection.on('error',(err)=>{
    console.log(err);
    console.log('连接错误');
})

//断开连接的回调
mongoose.connection.on('close',()=>{
    console.log('断开连接');
})

//断开连接
setInterval(()=>{ mongoose.disconnect()},3000)