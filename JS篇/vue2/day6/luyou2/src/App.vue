<template>
  <div id="app">
    <h1>APP组件</h1>
    <hr />
    <router-link to="/right/6">访问right-----</router-link>
    <router-link to="/right/1">访问right1------</router-link>
    <router-link to="/right/2">访问right2------</router-link>
    <router-link to="/right/2?name=aa age=20 ">访问right2------</router-link>

    <router-link to="/admin">管理主页------</router-link>
    <router-link to="/login">登入页面------</router-link>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import right from '@/components/right.vue'
import login from '@/components/login.vue'
import admin from '@/components/admin.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    right,
    login,
    admin
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mokuai {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
