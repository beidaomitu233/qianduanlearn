// 向数据库中请求
'use strict';

//结构和controller类似
const { Service } = require('egg');
class RequestService extends Service {
    //获取全部
  async getallitem() {
    try{
        const { app } = this;
        const result = await app.mysql.select('ToDoList');
        return result
    }catch(error){
        if(error) console.log(error);
        return '未能连接上数据库'
    }

  }
  //根据id来删除todoitem,。
  async delitem(id) {
    try{
        if(id){
         
            console.log(id);
          const { app } = this;
          const result = await app.mysql.delete("ToDoList", id);
          return result;
        }else{
            return 'id不能为空'
        }
    }catch(error){
        if(error) console.log(error);
        return '未能连接上数据库'
    }
  }
  //修改todoitem
  async changeitem(changgeobj) {
    try{
        const { app } = this;
        const result = await app.mysql.update('ToDoList',changgeobj);
        return result
    }catch(error){
        if(error) console.log(error);
        return '未能连接上数据库'
    }
  }
  //增加todoitem
    async additem(addobj) {
    try{
        const { app } = this;
        const result = await app.mysql.insert('ToDoList',addobj);
        return result
    }catch(error){
        if(error) console.log(error);
        return '未能连接上数据库'
    }
    }
}

module.exports = RequestService;
