<template>
  <div>
    <h1>
      基于编程式路由跳转到酒店服务页面
    </h1>
    <!-- 需要到数据时可进行传参 -->
    <button @click="goHotelfoodService()">跳转到酒店服务页面</button>
    <!-- 前进 -->
    <button @click="$router.forward()">前进</button>
    <!-- 前进2 -->
    <button @click="$router.go(1)">前进</button>
    <!-- 后退 -->
    <button @click="$router.back()">后退</button>
    <!-- 后退2 -->
    <button @click="$router.go(-1)">后退</button>
    <!-- 也需要添加路由展示区 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hotelService',

  data () {
    return {

    };
  },

  mounted () {
  },

  methods: {
    goHotelfoodService () {
      // 1.编程式路由跳转
      // this.$router.push('/hotelService');
      // 2.编程式路由跳转,传递参数
      this.$router.push({
        name: 'Hotelfood',
        params: {
          id: 1,
          name: '酒店点餐服务',
          foodrequire: "白切鸡"
        }
      });
    }
    //使用replace跳转
    // this.$router.replace('/hotelService');
    //使用replace跳转并传参
    // this.$router.replace({
    //   name: 'Hotelfood',
    //   params: {
    //     id: 1,
    //     name: '酒店点餐服务',
    //     foodrequire: "白切鸡"
    //   }
    // });


  },
};
</script>

<style scoped>
</style>