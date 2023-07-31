/* eslint valid-jsdoc: "off" */

'use strict';

//导入数据库配置
const {USER_MYSQL_HOST,USER_MYSQL_PORT,USER_MYSQL_NAME,USER_MYSQL_PASSWORD,USER_MYSQL_DATABASE} = require('./config.mysql');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1690738300432_6922";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: USER_MYSQL_HOST,
      prot: USER_MYSQL_PORT,
      user: USER_MYSQL_NAME,
      password: USER_MYSQL_PASSWORD,
      database: USER_MYSQL_DATABASE,
    },
  };

  // 需要配合 security 插件一块使用
  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: ["http://localhost:8080"],
  };
  // 允许跨域的方法
  config.cors = {
    origin: "*",
    allowMethods: "GET, PUT, POST, DELETE, PATCH",
  };

  return {
    ...config,
    ...userConfig,
  };
};

