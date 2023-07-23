//拷贝文件
const fs=require('fs')

//方式一,

//读取文件
const readresult=fs.readFileSync('./1.txt')
//写入文件
const writeresult=fs.writeFileSync('./4.txt',readresult)
console.log('同步读写完成');

//方式二，流式读写

const readresult2= fs.createReadStream('./1.txt')
const ws=fs.createWriteStream('5.txt')

//查看读取数据，读一次就会触发一次data事件
readresult2.on('data',chunk=>{
    console.log(chunk);
    //写入数据
    ws.write(chunk)
})

//完成后提示
readresult2.on('end',()=>{
    console.log('流式读写完成');
})

//快捷写法
readresult2.pipe(ws)
