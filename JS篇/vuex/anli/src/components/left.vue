<template>
  <div id="left">

    <div class="left">
      组件2获取到的数据
      <h1>输出{{all}}</h1>
    </div>
    <div class="right">
      <h1>输出10倍{{jisuan}}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';


export default {
  name: 'left',
  components: {

  },
  data () {
    return {
    }
  },
  computed: {
    //复杂写法
    allz () {
      return this.$store.state.all
    },
    //正确的简化写法,自动的补齐前面的路径，前面是可自定义的名字，后面是state中数据的名字，两个名字都是字符串
    //从state中读取数据，这个返回值是对象，所以要结构
    /* ...mapState({ all: 'all', }) */
    //寻找state下zhujiayi的all
    ...mapState('zhujianyi', ['all',]),

    //从getter中读取数据
    ...mapGetters('zhujianyi', ['jisuan'])

  }
  ,
  methods: {

    /*   shuchu () {
        //传递方法名，参数值， 并且在store的action中也添加一个shuchu的函数才能与之对对应
       
        this.$store.dispatch('shuchu', this.zhi),
    }, */
    //简写 ,但是传参需要再点击的事件的组件上传参
    ...mapActions('zhujianyi', { shuchu: 'shuchu' }),
    /*     com () {
          this.$store.commit('COM', this.zhi)
        }  */
    //按照工作原理图，commit的下一步应该是mut所以写mapmuta
    ...mapMutations('zhujianyi', { com: 'COM' })
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
  width: 1200px;
  height: 400px;
  border: 1px solid red;
  display: flex;
}
.left {
  flex: 1;
  border: 1px aquamarine solid;
  background-color: aquamarine;
}
.right {
  flex: 1;
  border: 1px solid yellow;
  background-color: yellow;
}
</style>
