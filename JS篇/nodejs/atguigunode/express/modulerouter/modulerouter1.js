const express=require('express')

//路由模块化。调用routert方法
const router=express.Router()

//可将路由规则分类到一个文件里
router.get('/setting',(req,res)=>{
    res.send('welcome')
})


router.get('/lightsetting',(req,res)=>{
    res.send('welcome')
})


router.get('/sizesetting',(req,res)=>{
    res.send('welcome')
})

//最后将router导出
exports.router=router