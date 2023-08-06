<template>
  <div id="app">
    <button @click="getdom()" ref="btn1">点击获取当前元素的DOM</button>
    <button @click="getdom2()">点击获取helloworld组件的DOM</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>这是组件2 </h1>

        <!-- 动画效果 -->
        <button @click="madeShow=!madeShow">隐藏或显示组件</button>
        <transition apppear>
              <h1 v-show="madeShow" class="zujian">动画动画</h1>
        </transition>

        <!-- 过渡效果 -->
        这是组件三
        <adas></adas>

    <hellotes :username="username" :userage="age"
              :userclass="zclass" />
    <!-- 使用自定义事件进行传参  -->
    <comp4 @sendata="sendataz()" />

    <!-- 使用插槽 ,里面只有一点不同的时候使用-->
    <slotcom> 
      <em>这是内容1</em>
    </slotcom>
    <slotcom> 
      <p>这是内容2</p>
      <img src="../public/favicon.ico" alt="">
    </slotcom>
    <slotcom> 
    <img src="./assets/logo.png" alt="">
    </slotcom>
  </div>
</template>

<script>
import hellotes from './components/hellotes.vue'
import comp4 from './components/comp4.vue'
import adas from './components/adas.vue'
import slotcom from './components/slotcom.vue'

export default {
  name: 'App',
  components: {
    hellotes,
    comp4,
    adas,
    slotcom
  },
  data () {
    return {
      targe: null,
      username: 'lisi',
      age: 18,
      zclass: '三年级',
            madeShow: true
    }
  },

  methods: {
    getdom () {
      console.log(this.$refs.btn1);
      console.log(this);
    },
    getdom2 () {
      console.log(this.$refs.hello2);
      console.log(HelloWorld);

    },
    sendataz (data) {
      console.log('接收到了组件4传来的数据');
      console.log(data);
    }
  },
  created () {
    //第一个参数是自定义事件，第二个参数是回调函数接收的参数就是数据
    this.$bus.$on('eventName1')
    this.$bus.$emit()
  },
  beforeCreate () {
    this.$bus.$off('eventName1')
  },
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
.zujian{
  background-color: burlywood;
}


//使用动画
//规定进入动画的名字
.v-enter-active{
  animation: madeslowin .5s linear ;

}
//离开的名字也是固定的
.v-leave-active{
  animation: madeslowleave 1s linear ;
}



//定义动画

@keyframes madeslowleave{
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-1800px);
  }
}

@keyframes madeslowin{
    from{
    transform: translateX(1000px);
  }
     to{
    transform: translateX(0px);
  }
}
</style>
