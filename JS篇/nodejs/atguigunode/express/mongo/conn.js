//连接mongodb数据库
const mongoose=require('mongoose')

//连接到数据库
mongoose.connect('mongodb://localhost:27017/beidao')

//设置回调函数,建议使用once
mongoose.connection.once('open',()=>{
    console.log('连接成功');
    //连接 成功的后续逻辑操作都会在这里执行
    
    //创建文档的结构对象 
    //设置集合中文档的属性和属性值类型。跟mysql相反，mysql是先创建表，再插入数据。mongodb是先插入数据，再创建表。
    let userSchema=new mongoose.Schema({
        name:{type:String,
            //设置为必填项
            required:true },
        position:{type:String,
            //设置为默认值
            default:'实习生',
            //枚举类型，只能是数组中的值
            enum:['UI','前端','后端','全栈','实习生']},
        id:{type:String,
            //设置为唯一值
            unique:true   },
        age:Number,
        is_leader:Boolean,
        honor:Array,
        birthday:Date,
        otherdec:Buffer,
        everytype:mongoose.Schema.Types.Mixed,
        relative:mongoose.Schema.Types.ObjectId,
        savings:mongoose.Schema.Types.Decimal128,

    })
    //创建模型对象，将文档结构放到集合内封装，就可以操作集合 增删改查。
   const userModel=mongoose.model('user',userSchema)

    //添加数据到文档中
    userModel.create({
        //6.x版本后，不支持回调函，会自动返回promise对象。{
        name:'牛马',
        position:'UI',
        age:22,
        id:'zzzddqwe12312'
        //6.x版本后，不支持回调函，会自动返回promise对象。
    }).then((err,data)=>{
        if(err) throw err
        console.log(data);
    }).catch((err)=>{
        console.log(err);
})
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

module.exports=mongoose.connection