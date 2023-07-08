import Vue from 'vue'
import App from './App.vue'

// 把axios挂载到vue上不能复用，只能用一次又完整的写一次，简化了又没完全简化

// 新的axios减少重复导入解决方案，这样样就可以在其他组件直接使用
import axios from 'axios'

Vue.config.productionTip = false
// 配置默认 的url地址，在组件中调用时，也不需要重复写部分地址
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'

// 一般喜欢用 $http代替
Vue.prototype.$http = axios

new Vue({
  render: (h) => h(App)
}).$mount('#app')
