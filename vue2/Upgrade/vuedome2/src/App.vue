<template>
  <div id="app">
    <button @click="getdom()" ref="btn1">点击获取当前元素的DOM</button>
    <button @click="getdom2()">点击获取helloworld组件的DOM</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>这是组件2 </h1>
    <hellotes :username="username" :userage="age" :userclass="zclass" />
    <comp4/>
  </div>
</template>

<script>
import hellotes from './components/hellotes.vue'
import comp4 from './components/comp4.vue'

export default {
  name: 'App',
  components: {
    hellotes,
    comp4
  },
  data(){
    return {
      targe:'',
      username:'lisi',
      age:18,
      zclass:'三年级'
    }
  },
  
  methods:{
    getdom(){
      console.log(this.$refs.btn1);
      console.log(this);
    },
    getdom2() {
      console.log(this.$refs.hello2);
      console.log(HelloWorld);
      
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
