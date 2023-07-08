const fs=require('fs')

fs.rename('2.txt','两句诗歌.txtx',(err)=>{
    if(err){
        console.log(err);
        return}

    console.log('重命名成功');
})

fs.rename('1.txt','../4.txt',err=>{
    if(err){
        console.log(err);
        return}
    console.log('移动成功');
})