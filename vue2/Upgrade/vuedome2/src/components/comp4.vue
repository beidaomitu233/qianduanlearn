<template>
  <div>
      <h2>这是组件4</h2>
      <button @click="sayhello()">输出组件的话</button>
  </div>
</template>

<script>
import { sayhello } from '../minxins/sayhello'
export default {
  name: '',
  data() {
    return {
      word:"hello,this is component4"
    };
  },

  methods: {
  },
  mixins:[sayhello],
  computed: {
  },

  watch: {

  },
};
</script>

<style lang="less"></style>