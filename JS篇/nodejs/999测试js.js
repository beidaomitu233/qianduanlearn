console.log('自定义模块加载成功');

console.log(module);

const age = 20;

module.exports.namee = '辉辉';

module.exports.say = function () {
  console.log('hello');
};

module.exports = {
  bazz: 789,
};

//把已有的共享出去
module.exports.age = age;

exports = {
  bzz: 789,
};
