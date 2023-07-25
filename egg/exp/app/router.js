'use strict';
<<<<<<< HEAD

=======
>>>>>>> 0acefb6ec4eaa7ee1db3bb7838a177aaa03d7745
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
<<<<<<< HEAD
  router.get('/getuserinfo', controller.home.getuserinfo);
=======
  router.get('/user/detail', controller.home.detail);

  // 引入countController
  router.get('/count/max', controller.count.getmax);

  //设置get请求参数.默认可设置多个
  router.get('/user/info',controller.home.getname)

  //设置固定个参数
  router.get('/user/getclass/:class/:age/:teach',controller.home.getclass)

  //设置post请求
  router.post('/inputinfo',controller.home.adduser)
>>>>>>> 0acefb6ec4eaa7ee1db3bb7838a177aaa03d7745
};
