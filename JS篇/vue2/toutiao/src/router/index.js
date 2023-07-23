import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '@/views/User/User.vue'
import home from '@/views/Home/Home.vue'

/* 把路由安装vue组件 */
Vue.use(VueRouter)

/* 路由规则的数组 */
const routes = [
  /* 配置首页tabbar导航路由规则 */
  { path: '/', component: home },
  { path: '/user', component: user }
]

const router = new VueRouter({
  routes
})

export default router
