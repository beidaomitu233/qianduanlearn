<template>
  <div>
    <div class="show-status">
        <p>已完成的待办事项数量：{{ completed }}</p>
        <p>未完成的待办事项数量：{{ uncompleted }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'showStatus',
  data() {
    return {
      completed: 0,
      uncompleted: 0,
      
    };
  },

  methods: {
    
  },

  computed: {
    
  },

  watch: {
    
  },
};
</script>

<style lang="less" scoped>
  .show-status {
  margin-top: 20px;
  text-align: left;
}
</style>