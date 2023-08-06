<template>
  <div>
    <router-view></router-view>
    <h1>酒店菜单</h1>
    <p>id:{{ id }}</p>
    <p>服务名:{{ name }}</p>
    <p>菜名:{{ foodrequire }}</p>
  </div>
</template>

<script>
export default {
  name: 'FoodService',
  props: ['id', 'name', 'foodrequire'],
  data () {
    return {

    };
  },

  mounted () {
    console.log(this.$route);
  },

  methods: {

  },
};
</script>

<style scoped>
</style>