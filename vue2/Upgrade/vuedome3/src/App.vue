<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hasnamecom>
    
      <!-- 按照名字给插槽传递内容 -->
      <template v-slot:videoz>
        <div>
          这是一个视频
        </div>
      </template>
      
        <template v-slot:img>
          <div>
            这是一个图片
          </div>
        </template>
    </hasnamecom>

 <h1>展示单个手机信息</h1>
  <showphone></showphone>
<h1>展示手机排行榜</h1>
  <showphonerank></showphonerank>
  </div>
</template>

<script>
import hasnamecom from './components/hasnamecom.vue';
import showphone from './components/showphone.vue';
import showphonerank from './components/showphonerank.vue';

export default {
  name: 'App',
  components: {
    hasnamecom,
    showphone,
    showphonerank
  },
  mounted(){
    console.log(this);
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
</style>
