import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//引入头部导航栏
import navbar from '@/components/navbar.vue'
//引入脚部导航栏
import foodebar from '@/components/foodebar.vue'

import Shipin from '@/views/xuetang/Shipin.vue'
import VueAxios from 'vue-axios'

import axios from 'axios'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)

//全局注册在这个组件，这样全局都能用
Vue.component('navbar', navbar)
Vue.component('foodebar', foodebar)
Vue.component('Shipin', Shipin)

//过滤器,用来格式化数字，
Vue.filter('numformat', (number) => {
  /* 当数量到达这个量时，换成单位，保留两位小数 */
  if (number >= 10000000) {
    return (number / 10000000).toFixed(2) + '千万'
  } else if (number >= 10000) {
    return (number / 10000).toFixed(2) + '万'
  } else {
    return number
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
