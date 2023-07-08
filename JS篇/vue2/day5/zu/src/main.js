import Vue from 'vue'
import App from './App.vue'

//这个只是个提示，提示说上线时要打开 生产模式
Vue.config.productionTip = false

//全局自定义指令的简写形式
Vue.directive('color', (el, binding) => {
  el.style.color = binding.value
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
