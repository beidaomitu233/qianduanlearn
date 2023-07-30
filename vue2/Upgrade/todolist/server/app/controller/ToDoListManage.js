'use strict'

const {Controller} = require('egg')

class ToDoListManageController extends Controller{
    //获取全部item
    async getItem(){
        const {ctx} = this
        ctx.body = {
            //获取成功并返回数据
            status:200,
            data:await ctx.service.getItemList.getItem()
        }
    }
    //添加任务项
    async addItem(){}
    //更改任务项
    async updateItem(){}
    //删除任务项
    async deleteItem(){}
}