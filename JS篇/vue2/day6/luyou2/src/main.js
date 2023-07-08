import Vue from 'vue'

import App from './App.vue'
// 导入路由模块，拿到实例对象
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  /* 挂载router实例对象 */
  router
}).$mount('#app')
