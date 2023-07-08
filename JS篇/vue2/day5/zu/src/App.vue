<template>
  <div id="app">
    <h1>APP组件</h1>
    <hr />
    <keep-alive include="right,left">
      <component :is="showcomp"></component>
    </keep-alive>

    <!-- 切换展示组件 -->
    <button @click="showcomp = 'right'">显示右组件</button>
    <button @click="showcomp = 'left'">显示左组件</button>

    <div class="mokuai">
      <left>
        <!-- 想要把内容放到指定的插槽，用v-slot：name  name是插槽的name属性值。
        实际渲染到页面上时template标签只是包裹作用并不会出现，只是一个占位符 v-slot只能用在template标签上，不能用在元素里-->
        <!--  <template v-slot:second> <p>将内容填充到插槽2内部</p> </template> -->
        <template v-slot:thire> <p>将内容填充到插槽1内部</p> </template>

        <!-- #号是s-slot的简写 -->
        <!-- 在这里相当于接受了子向父传值的这么一个操作，传递的是插槽中的自定义属性，并且设置为对象类型 -->
        <template #thire2="{ msg, user }">
          <!-- 传过来的是对象，{msg} 就可以解构对象，方便使用里面的内容 -->
          <!--接受了必须要使用，这个叫做作用域插槽 -->
          <p>将内容填充到插槽4内部--{{ user }}</p>
          <p>将内容填充到插槽4内部2--{{ msg }}</p>
        </template>
        <template v-slot:thire3> <p>将内容填充到插槽5内部</p> </template>
      </left>

      <right></right>
    </div>
    <hr />
    <hr />
    <hr />
    <!--  v- 代表是vue指令 后面的是指令名字 -->
    <!-- =号表示要传参，并且参数是从data中来的 -->
    <h1 v-color="colors">自定义指令</h1>
    <!-- 这个表示传递字符串过去，就不会去data中寻找这个变量 -->
    <h1 v-color="'red'">自定义指令2</h1>
    <button @click="colors = 'green'">点击变绿</button>
  </div>
</template>

<script>
import right from '@/components/right.vue';
import left from '@/components/left.vue';

export default {
  name: 'App',
  data() {
    return {
      showcomp: 'right',
      colors: 'white',
    };
  },
  components: {
    right,
    left,
  },

  /* 私有指令节点 */
  directives: {
    //指令名字为 color ，指向一个对象
    /*     color: {
      //当指令被绑定时就会触发这个绑定函数,后续即使数据更新也不会自动调用， el是当前指令绑定的标签的dom元素,
      //通过binding接受传递过来的参数.参数值存在value中
      bind(el, binding) {
        el.style.color = binding.value;
        console.log(binding);
      },

      //当dom被更新时，会触发update函数，
      //就达到更新的目的，要和bind同时写，因为update是更新之后才会执行，一进页面是不执行的
      update(el, binding) {
        el.style.color = binding.value;
        console.log(binding);
      },
    }, */
    //简写形式,写成对象，因为bind和update的内容一样，所以可以简写成这样
    color(el, binding) {
      el.style.color = binding.value;
    },
  },
};
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
