const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // 入口文件路径
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist') // 输出目录路径
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配以 .js 结尾的文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: 'babel-loader' // 使用 babel-loader 进行转译
      },
      {
        test: /\.css$/, // 匹配以 .css 结尾的文件
        use: ['style-loader', 'css-loader'] // 使用 style-loader 和 css-loader 处理 CSS 文件
      },
      {
        test: /\.ts$/, // 匹配以 .ts 结尾的文件
        use: [
            //使用babel-loader并配置兼容版本
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env', // 指定环境的插件
                            {
                                targets: {
                                    chrome: '58', // 指定兼容到的浏览器版本
                                    "ie": "11" //只要支持这个版本，直接秒杀所有浏览器
                                }, 
                                corejs: '3', // 指定 corejs 版本
                                useBuiltIns: 'usage' // 按需注入 polyfill
                            }
                        ]
                    ]
                }
            }
            ,
            'ts-loader'
        ],
        include: [path.resolve(__dirname, 'src')] // 限制 ts-loader 只对 src 目录中的 .ts 文件进行处理
      }
    ]
  },
  
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template:'./src/index.html'})
  ],
  devServer: {
    static : path.resolve(__dirname, 'dist'), // 设置开发服务器的根目录
    port: 8080 // 设置开发服务器的端口号
  }
};
