'use strict';

const { app } = require('egg-mock/bootstrap');

// describe 第一个参数是描述，第二个参数是回调函数
describe('test/controller-count', () => {
  // it第一个参数是描述，第二个参数是回调
  it('countmax should GET and retrun maxnumber', () => {
    // 业务逻辑
    return app.httpRequest() // 是promise
    // get的是router中的路径
      .get('/count/max')
    // 返回状态码
      .expect(200)
    // 返回的内容,内容要与count业务逻辑中的内容一致。
      .expect('<h1>countmax</h1>');
  });
});
