'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getuserinfo() {
    const { ctx } = this;
    // 调用serivce层的方法去查询数据库中的数据。
    const res = await ctx.service.request.find(1);
    ctx.body = res;
  }
}

module.exports = HomeController;
