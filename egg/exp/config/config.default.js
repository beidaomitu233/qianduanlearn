/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
<<<<<<< HEAD
=======
  
>>>>>>> 0acefb6ec4eaa7ee1db3bb7838a177aaa03d7745
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1689701709869_7105';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
<<<<<<< HEAD
  };
=======

    
  };
  //关闭csrf防护
  config.security = {
    csrf :{
      enable:false,
    }
  };
  

>>>>>>> 0acefb6ec4eaa7ee1db3bb7838a177aaa03d7745

  return {
    ...config,
    ...userConfig,
  };
};
