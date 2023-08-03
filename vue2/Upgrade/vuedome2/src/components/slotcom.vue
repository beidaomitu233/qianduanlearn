<template>
  <div>
    <!-- 插槽的使用  -->
    <h1>插槽的使用</h1>
    <slot name="slot1">如果没有传递内容时就会显示</slot>
  </div>
</template>

<script>
export default {
  name: 'slotcom',
  data() {
    return {
      
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
  
</style>