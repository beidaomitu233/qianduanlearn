//es6导入包的方法 ,但是浏览器的兼容性很差，没有实现效果
import $ from 'jquery';
//需要用webpack解决兼容性

//导入css样式 在webpack中 都可以通过es6语法导入,需要第三方loader处理
import '@/css/index.css';

//引入less ,@是从新定义的一个 位置地点 基于src目录最为起点去寻在
import '@/css/index.less';

//导入图片，
import weixin from '@/upload/weixin.png';
//把img标签的src动态赋值
$('.img').attr('src', weixin);

$(function () {
  //实现奇数和偶数行的变色
  $('li:odd').css('background-color', 'red');
  $('li:even').css('background-color', 'black');
});

conole.log('123');
