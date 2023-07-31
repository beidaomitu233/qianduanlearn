'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  //获取所有item
  async getitemlist() {
    const { ctx } = this;
    const result = await ctx.service.itemmanage.getallitem();
    ctx.status=200
    ctx.body = {
      code:200,
      data:result
    };
  }
  //对todoitem删chu 
  async delitemcon(){
    const { ctx } = this;
    //获取post请求的参数体
    const id=ctx.request.body
    const result = await ctx.service.itemmanage.delitem(id);
    ctx.status=200
    ctx.body = {
      code:200,
      data:result
    };
  }
  //修改todoitem
  async changeitem(){
    const { ctx } = this;
    //获取post请求的参数体
    const {id,item,completed,initiator}=ctx.request.body
    const changgeobj={id,item,completed,initiator}
    const result = await ctx.service.itemmanage.changeitem(changgeobj);
    ctx.status=200
    ctx.body = {
      code:200,
      data:result
    };
  }
  //增加todoitem
  async additem(){
    const { ctx } = this;
    //获取post请求的参数体,id为自动设置且自增所以不需要设置id
    const {item,completed,initiator}=ctx.request.body
    const addobj={item,completed,initiator}
    const result = await ctx.service.itemmanage.additem(addobj);
    ctx.status=200
    ctx.body = {
      code:200,
      data:result
    };
  }
}

module.exports = HomeController;
