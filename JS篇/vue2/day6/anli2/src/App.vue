<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login.vue'

export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style lang="less">
#app {
  width: 1800px;
  height: 1000px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
