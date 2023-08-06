<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="nav">
      <div class="left">
        <!-- 路由导航 -->
        <div> <router-link to="/playStations">游戏模块</router-link></div>
        <div> <router-link to="/fastFood">快餐模块</router-link></div>
        <div> <router-link to="/hotelService">酒店点餐服务</router-link>
        </div>
      </div>
      <div class="right">
        <!-- 路由展示内容区 -->
        <keep-alive :include="['FastFood','chFood']">
          <router-view></router-view>
        </keep-alive>

      </div>

    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    console.log(this)
  },
  //进入组件时就会被调用
  beforeRouteEnter(to, from, next) {
    //进入组件也要放行
    console.log('进入组件');
    console.log(to);
    //符合条件才放行
    if(1==1){
      next();
    // ...
    }
  },
  //离开组件时就会被调用
  beforeRouteLeave (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log('离开组件');
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
.nav {
  //将导航栏设置为flex布局并且设置为横向排列
  display: flex;
  flex-direction: row;
  //各占一半的宽度
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  background-color: #ccc;
}
//给导航栏的链接设置样式,设置成一个好看的盒子
.nav .left div {
  display: block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #000;
  text-decoration: none;
  color: #000;
}
.left {
  display: flex;
  flex-direction: column;
}
.right {
  width: 50%;
}
</style>
