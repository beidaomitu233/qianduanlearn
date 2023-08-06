<template>
  <div>
    <h1>国内快餐板块</h1>
    <!-- 向子组件传递参数 -->
    <router-link replace="" :to="{
      name:'chFood',
      params:{id:FoodsMune[0].id,name:FoodsMune[0].name}
      }">
      <!-- 这是链接名字 -->
      {{FoodsMune[0].name}}
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'FastFood',

  data () {
    return {
      FoodsMune: [
        { id: 1, name: '红烧辣子鸡' },
        { id: 2, name: '麻辣香锅' },
        { id: 3, name: '麻辣烫' }
      ],
      timer: null,
    };
  },

  beforeDestroy () {
    console.log('组件被销毁了');
  },

  activated () {
    console.log('组件被激活了');
    //通过定时器来演示激活和失活切换
    this.timer = setTimeout(() => {
      console.log('定时器执行了');
    }, 100);
  },

  deactivated () {
    console.log('组件失活了,定时器被销毁');
    this.timer = null;
  },

  methods: {

  },
};
</script>

<style lang="css" scoped>
</style>