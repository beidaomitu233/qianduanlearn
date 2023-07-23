<template>
  <div id="app">
  <div class="logo"> <img alt="Vue logo" src="./assets/logo.png"> </div> 
  <div>app根组件</div>
 <hr>
 <!-- 以标签的相识，使用注册好的组件 -->
  <left class="left" ref="leftt"></left>
  <right class="right"></right>

<br>
<p>父组件中的值{{coutson}}</p>
<sontofa @changge="getnewc "></sontofa>

<br>
<hr>
<!--向子组件传递数据 传递数据 -->
  <tansl :mes="message" :objz="obj"></tansl>
  
  <p >原内容{{ message}}</p>
  <p>{{obj}}</p>

<br>
<hr>
<xiongdi1></xiongdi1>
<xiongdi2 ></xiongdi2>

<br>
<hr>

<!-- 使用ref获取dom , -->
<p ref="appp">点击后变色</p>
<button @click="change">点击</button>

<br>
<hr>
<upchange> </upchange>

</div>
</template>

<script>
import left from'@/components/left.vue'
import right from'@/components/right.vue'
import tansl from'@/components/6父向传递信息.vue'
import sontofa from'@/components/7子向父传数据.vue'
import xiongdi1 from'@/components/8兄弟2.vue'
import xiongdi2 from'@/components/8兄弟之间的数据共享.vue'
import upchange from '@/components/10updata和延迟执行.vue'

export default {

data(){
  return{
    message:"这是简单类型，是赋值传递",
    /* 这是复杂数据传递的是地址 */
    obj:{name:"zs",
    age:18},
    coutson:0,
  }
},

methods:{
  /* 接收子组件传递过来的参数 */
  getnewc(newval){
    /* 将接收到的参数赋值到自身上 */
this.coutson=newval

  },
  
change(){
  /* 使用 ref获取到的dom元素 */
  /*         ref名字    */
  this.$refs.appp.style.color='red'

}

 

},

  name: 'App',
/* 注册组件 */
  components: {
    //原本 的写法 当键和值一样时
   'left':left,
   //简写
    right,
    tansl,
    sontofa,
    xiongdi1,
    xiongdi2,
    upchange,
    
  }
}
</script>

<style lang="less">
#app {
 
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

.logo{
  margin: 0 auto;
  width: 150px;
  height: 150px;
  margin-bottom: 50px;

}
}

</style>
