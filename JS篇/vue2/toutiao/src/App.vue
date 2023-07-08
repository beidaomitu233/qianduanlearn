<template>
  <div class="app">
    <!--上半区 -->
    <router-view></router-view>
    <!-- 下半区导航栏 -->
    <van-tabbar route placeholder>
      <van-tabbar-item replace icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item replace icon="user-o" to="/user">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less" scoped></style>
