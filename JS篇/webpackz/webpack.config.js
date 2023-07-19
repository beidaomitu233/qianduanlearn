module.exports={
    //入口文件
    entry:'./src/main.js',

    //输出
    output:{
        //输出到当前目录下的dist文件夹下
        path:__dirname+'/dist',
        //输出的文件名
        filename:'bundle.js'
    },

    //加载器
    module:{
        rules:[

        ]

    },

    //插件
    plugins:[
        //插件的配置
    ],

    //模式，可选项还有production
    mode:'development'

}
