import Vue from 'vue'
import App from './App.vue'

//引入vuex中创建的store对象，
import store from './store/index'

//关闭vue生产提示
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')
