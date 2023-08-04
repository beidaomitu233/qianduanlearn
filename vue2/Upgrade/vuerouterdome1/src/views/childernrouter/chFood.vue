<template>
  <div>
    <h1>国内快餐</h1>
    <p>id:{{ id }}</p>
    <p>菜名:{{ name }}</p>
  </div>
</template>
  
  <script>
export default {
  name: 'chFood',
  props: ['id', 'name'],
  data () {
    return {
    };
  },

  mounted () {
    /* 输出ruote查看参数 */
    console.log(this.$route);
  },
  /*   computed: {
      id () {
        return this.$route.query.id || this.$route.params.id;
      },
      name () {
        return this.$route.query.name || this.$route.params.name;
      }
    }, */

  methods: {

  },
};
  </script>
  
  <style lang="css" scoped>
</style>