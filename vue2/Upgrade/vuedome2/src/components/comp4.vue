<template>
  <div>
      <h2>这是组件4</h2>
      <button @click="sayhello()">输出组件的话</button>
      <button @click="sendDataToParent">向父组件传参</button>
  </div>
</template>

<script>
import { sayhello } from '../minxins/sayhello'
export default {
  name: '',
  data() {
    return {
      word:"hello,this is component4",
      zdata:18,
    };
  },

  methods: {
    sendDataToParent() {
          this.$emit('sendata', this.zdata);
    }
  },
  mixins:[sayhello],
  computed: {
  },

  watch: {

  },
};
</script>

<style lang="less"></style>