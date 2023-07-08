//模块化 就是把一个大文件 拆成独立相互依赖的多个小模块
//提高代码复用性，提高可维护性, 实现按需加载

/* 
node 中的模块有三种  
1.内置模块 (例如 path fs等)
2.自定义模块 (用户自己创建的js文件 )
3.第三方模块  又叫包

都是用require来导入 ，导入时会同时加载（运行）模块 

模块作用域：和函数作用域相似，在自定义模块中定义的变量 方法成员 等，
只能在当前模块内被访问 就是那个js文件内 甚至是文件的函数内，模块级访问限制，就是模块作用域

module 对象是存储模块文件的相关信息的 包括路径等等  每个js文件都有

当想要共享模块作用域中的成员就用module.exports对象
在外界使用require 导入自定义模块时，其实导入的是 module.exports的属性
就是只共享exports 要共享的内容写在这个对象里面

把已有属性的共享出去module.exports.age = age;
当以对象的形式写进去 就是会以整个对象形式覆盖 具体看 999测试js
require导入模块时 永远指向module.exports  即使有exports
 
赋值对象就会开辟并指向这个新空间，如果不赋值属性就不会开辟新地址，这时两个都一样

所以区分两者这么麻烦，使用的时候最好是只用一个 

 Node.js 中的模块化规范
Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖
CommonJS规定:
③ 每个模块内部，module 变量代表当前模块。
② module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。
③ 加载某个模块，其实是加载该模块的 module.exports 属性。require0 方法用于加载模块。


*/
//第三方模块写的也是模块名 不需要写 地址 和内置模块一样
//自定义模块 导入     请求写的是路径 后缀可以不写会自动补
const custom = require('./999测试js.js');
console.log(custom);
console.log(module.exports);
//所以可以直接写exports  ，但是同时写两个时 一开始是两个都指向一个地方 ，
//但是如果单个给其中一个赋值一个对象，那这个就会重新开辟一个空间并指向这个空间，这时就是不一样的。mod.exp  和exp指向的是不同地址
console.log(module.exports === exports);
