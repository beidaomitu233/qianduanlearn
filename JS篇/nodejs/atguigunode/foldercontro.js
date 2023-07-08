const fs=require('fs')

//新建文件夹
fs.mkdir('newfolder',err=>{
if(err)   return console.log(err)
console.log('创建成功');
   
})

//递归创建需要加{recursive:true} 参数
fs.mkdir('newfolder1/newfolder1.2/newfolder1.2',{recursive:true},err=>{
    if(err)   return console.log(err)
    console.log('创建成功');
       
    })

//读取文件夹内容
fs.readdir('./',(err,data)=>{if(err)return console.log(err);console.log(data);})


//递归删除，当文件夹不为空时需要添加参数{recursive:true}
fs.rm('newfolder',{recursive:true},err=>{if(err)return console.log(err);console.log('删除成功');})
fs.rm('newfolder1',{recursive:true},err=>{if(err)return console.log(err);console.log('删除成功');})

fs.rename('newfolder5','newfolder6',err=>{if(err)return console.log(err);console.log('重命名成功')})