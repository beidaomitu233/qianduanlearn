'use strict';

const { Controller } = require('egg');

// 所有的Controller子类都要以 Controller为结尾的方式命名
class countmaxController extends Controller {
  async getmax() {
    // 这个解构为上下文
    const { ctx } = this;
    ctx.body = '<h1>countmax</h1>';
  }


}

module.exports = countmaxController;
