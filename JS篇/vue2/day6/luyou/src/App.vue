<template>
  <div id="app">
    <h1>这是根组件</h1>

    <!-- 当配置好router之后就使用 router-link来代替a链接  -->
    <!--     <a href="#/right">right组件------</a>
    <a href="#/left">left组件</a> -->

    <!-- 这里的/right hash是地址 -->
    <router-link to="/right">right组件--</router-link>
    <router-link to="/left">left组件</router-link>

    <!-- 占位符 ,只有配置好vue-router才会有这个标签，表示我们要显示的组件要放到这个位置来,-->
    <!--hash地址和组件的练习在index.js中配置 -->
    <router-view></router-view>
    <left></left>
    <right></right>
  </div>
</template>

<script>
import right from '@/components/right.vue'
import left from '@/components/left.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    left,
    right
  },
  methods: {}
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
