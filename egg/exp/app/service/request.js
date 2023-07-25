// 向数据库中请求
'use strict';

const { Service } = require('egg');
class RequestService extends Service {
  async find(id) {
    return {
      id,
      username: 'lisi',
      age: 19,
    };
  }
}

module.exports = RequestService;
