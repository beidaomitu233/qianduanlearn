<template>
  <div>
    <h1>国内快餐板块</h1>
    <!-- 向子组件传递参数 -->
    <router-link :to="{
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
      ]
    };
  },

  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="css" scoped>
</style>