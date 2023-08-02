import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //安装时间总线
  beforeCreate(){
    this.prototype.$bus=this  //将$bus挂载到vue实例对象上
  }
}).$mount('#app')
