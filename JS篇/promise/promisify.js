//自动封装成Promise方法

const util=require('util')
const fs=require('fs')

const readfilepromise=util.promisify(fs.readFile)

readfilepromise('1.txt').then(value=>console.log(value.toString()))


function useajax(url){
        //实例化XMLHttpRequest对象
        const x = new XMLHttpRequest();
        //打开请求
        x.open('GET',url);
        //发送请求
        x.send();
        //监听请求状态
        x.onreadystatechange=()=>{
            //验证请求是否成果
            if(x.readyState===4&&x.status===200)return(x.response);//将请求成功的数据返回
            return(new Error('请求失败'));
        }
}

const ajaxpromise=util.promisify(useajax)
ajaxpromise( 'https://www.fastmock.site/mock/d5676db29e9d85aaf6101253cf423499/newslist/newlist/tech').then(value=>console.log(value.toString()))
