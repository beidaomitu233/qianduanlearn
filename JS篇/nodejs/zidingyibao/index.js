//包结构至少有  package.json 包管理配置文件，index.js 包的入口文件 readme.md 包的说明
//包的名字不是文件夹的名字，而是pack中定义的name属性

//包其实就是把封装的js函数共享出去，

const shuchu = require('./mokuaibao');

shuchu.shuchu('ddd');
//向外暴露需要的成员，就用外部就能访问这个函数了
module.exports = {
  ...shuchu,
};
