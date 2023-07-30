"use strict";

const { Service } = require("egg");

class listService extends Service {
  //增删改查

  //获取全部item
  async getItem() {
    //连接mysql数据库并查询所有的任务项
    try {
      const app = this.app;
      const list = await app.mysql.select("complete", {
        where: { complete: 0 },
      });
      return list;
    } catch (error) {
        if(error) throw error;;
      return null;
    }
  }
  //添加任务项
  async addItem(item) {}
  //更改任务项
  async updateItem(item) {}
  //删除任务项
  async deleteItem(id) {}
}

module.exports = listService;
