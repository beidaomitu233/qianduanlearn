import Vue from 'vue'
import App from './App.vue'
// 导入路由模块，拿到实例对象
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 要使用 router路由使用起来就必须把路由实例对象，通过下面的方式进行挂载
  // 用router属性把router实例挂载到vue中 router:路由实例对象 ,值和属性名一样时可以简写
  router
}).$mount('#app')
