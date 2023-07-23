const path = require('path');
var entrypath = path.join(__dirname, './src/changge.js');
const htmlplugin = require('html-webpack-plugin');
var excludee = path.join(__dirname, './node_modules/');

//解构赋值 的、把包里面属性全部拆出来赋值给这个新对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



//构造实例对象
const htmlp = new htmlplugin({
  //指定要复制的文件
  template: './src/index.html',
  //指定复制出来的文件名和存放路径
  filename: './index.html',
});

//向外导出webpack的配置对象
module.exports = {
  mode: 'development', //mode用来指定构建模式。可选值有development和production
//显示报错源代码位置 ，上线发布时要删除掉这个
/* devtool:"eval-source-map", */
devtool:"nosources-source-map",
  //自定义webpake打包和输出路径 ,注意要先导入path才能用
  /*   entry: entrypath, */

  output: {
    //指定存放的目录
    path: path.join(__dirname + '/dist'),
    //指定生成的文件名
    filename: 'js/indeeex.js',
  },
//clean的调用

  //调用这个对象
  plugins: [htmlp, new CleanWebpackPlugin(),],

  //开启保存后自动打开网页
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 80,
  },

  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jpg|png|gif$/,
        use: 'url-loader?limit=1&outputPath=images'
      },

      /*   { test: /\.js$/, use: 'babel-loader', exclude: excludee }, */
    ],
  },

  resolve:{
    alias:{
//告诉webpack @是基于哪个位置开始
'@':path.join(__dirname,'./src/')
    }
  }
};