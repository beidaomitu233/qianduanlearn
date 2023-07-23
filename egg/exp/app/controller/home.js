'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async detail() {
    const { ctx } = this;
    ctx.body = '<h1>user information</h1>';
  }


  //随意数量的方式
    async getname(){
    const {ctx}=this;
    //这是接受到的参数
    ctx.query
    console.log( ctx.query);
    ctx.body=ctx.query
  }

  //严格传参模式
  async getclass(){
        const {ctx}=this;
        ctx.body='你的班级是'+ctx.params.class+'年龄：'+ctx.params.age+'老师：'+ctx.params.teach
  }

  async adduser(){
     const {ctx}=this;
     console.log(ctx.request.body);
     ctx.body={
      status:200,
      //ctx.request.body是post请求的参数
      data:ctx.request.body
     }
  }
  
}

module.exports = HomeController;
