<template>
  <div id="app">
    <h1>这是根组件</h1>
    <button @click="axi">发起axios请求</button>
    <div class="mokuai">
      <left></left>
      <right></right>
    </div>
  </div>
</template>

<script>
import right from '@/components/right.vue'
import left from '@/components/left.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    left,
    right
  },
  methods: {
    async axi () {
      // 以前是用 axios时都需要，导入一次使用一次，在多组件中就很不方便，
      // 为了减少重复的导入，解决方案是把axios挂载到原型上，进行共享
      const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/get')
      // 为了地址的可维护行提高，就是把所有（或部分）一样的url地址放到axios函数default中，即使修改也很方便
      console.log(res)
      // 使用 axiosbaserul之后简化了地址输入
      const { data: ree } = await axios.get('/api/get')
      console.log(ree)
    },
    //use axios request http://www.liulongbin.top:3006/api/get then Store the data in a variable res and print it out
    async axi () {
      const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/get')
      console.log(res)
    },
    axi () {
      axios.get('http://www.liulongbin.top:3006/api/get').then(res => {
        console.log(res)
      })

      wqeqw
      // fix this bug

    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mokuai {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
