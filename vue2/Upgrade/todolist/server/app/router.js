'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //获取所有的todoitem
  router.get('/getitemlist', controller.home.getitemlist);
  //删除item
  router.post('/delitem',controller.home.delitemcon)
  //更改item
  router.post('/changeitem',controller.home.changeitem)
  //添加item
  router.post('/additem',controller.home.additem)
};
