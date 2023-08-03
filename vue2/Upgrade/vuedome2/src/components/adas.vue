<template>
  <div>
    <h2>这是组件3</h2>
      <button @click="madeShow = !madeShow">隐藏或显示组件</button>
    <!-- 动画效果 -->
    <transition 
    name="animate__animated animate__bounce"
    enter-active-class="animate__fadeInLeft"
    leave-active-class="animate__fadeOutRight"
    >
        <h1 v-show="madeShow" class="zujian">这是内容这是内容这是内容</h1>
    </transition>

  </div>
</template>

<script>

//引入动画库
import 'animate.css'
import axios from 'axios'
export default {
  name: 'adas',
  data() {
    return {
      madeShow:true
    };
  },

  methods: {
    
  },
  created(){
    //向egg.js后端发起请求.走代理服务器的方式请求
    axios.get({
      url:'http://localhost:7001/api/getdata'
    }).then(res=>{
      console.log(res);
    })
  },

  computed: {
    
  },

  watch: {
    
  },
};
</script>

<style lang="less">
.zujian{
  background-color: burlywood;
}
</style>