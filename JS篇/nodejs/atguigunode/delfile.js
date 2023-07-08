const fs=require('fs')

fs.unlink('1.txt',err=>{
    if(err) return  console.log(err);
    console.log('删除成功');
})

fs.rm('2.txt',err=>{
    if(err) return  console.log(err);
    console.log('删除成功');
})