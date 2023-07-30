/* eslint valid-jsdoc: "off" */

'use strict';

//导入数据库配置文件
const {
  USER_MYSQL_HOST,
  USER_MYSQL_PORT,
  USER_MYSQL_NAME,
  USER_MYSQL_PASSWORD,
  USER_MYSQL_DATABASE} = require('../mysql.config')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1690716100519_7318';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql ={
    app:true,   
    agent:false,  
    client:{
      host:USER_MYSQL_HOST,  
      prot:USER_MYSQL_PORT,      
      user:USER_MYSQL_NAME,     
      password:USER_MYSQL_PASSWORD,  
      database:USER_MYSQL_DATABASE,  
    }
  }


  return {
    ...config,
    ...userConfig,
  };
};
