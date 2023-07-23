import Vue from 'vue'
//导入app.vue跟组件，要把app.vue里面的模板结构渲染到html种
/* import App from './App.vue' */

/* 导入组件 */
import Test from'@/components/Test.vue'
/* 导入 */
import App from'@/App.vue'
/* 导入并设置成全局组件 */
import content from'@/components/content.vue'
/*              组件标签名字   导入的组件 */
Vue.component('mycontent',content);

Vue.config.productionTip = false

new Vue({
  //指定渲染区域
/*   el:'#app',  */
  //把render指定的组件渲染到html指定的el渲染区域中，原来div.app的位置会被替换成组件内容
/*   render: h => h(App), */

/* 将组件渲染  ，渲染的就是跟组件*/
render:h=>h(App)

//这个和el是完全一样的也是指定渲染区域，建议使用.$mount
}).$mount('#app')
