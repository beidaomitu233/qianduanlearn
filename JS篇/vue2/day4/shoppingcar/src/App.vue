<template>
  <div id="app">
    <Header title="购物车头部"> </Header>

    <!--循环渲染每一项商品 -->
    <!-- 这里面要绑定属性指令 是因为每次渲染都是另一项数据，需要动态的修改传过去值 -->
    <!-- item就是每一项，就是每一个数组中的对象 -->
    <Goods v-for="item in list" :key="item.id" :title="item.goods_name" :price="item.goods_price" :pic="item.goods_img" :status="item.goods_state" :id="item.id" :goodcount="item.goods_count" @zhuangtai="newstatus">
      <!-- 利用插槽时 深层次的组件传值也变得很简单  v-slot也可以直接用在组件上 -->
      <Counter :id="item.id" :goodcount="item.goods_count"></Counter>
    </Goods>
    <!--changestatus事件是子向父组件传值        -->
    <!-- 当被每一项被全选时就把true传过去，让全选的checked状态为传递过去的值 -->

    <Fooder title="购物车底部" :fullselect="fullselect" :choosedprice="allprice" :chooingcount="chooingcount" @select-change="goodstatus"></Fooder>
  </div>
</template>

<script>
import Counter from '@/components/Counter/Counter.vue'
import Goods from '@/components/Goods/Goods.vue'
import Fooder from '@/components/fooder/Fooder.vue'
import Header from '@/components/Header/Header.vue'

import bus from '@/components/Eventbus.js'
/* 导入axios */
import axios from 'axios'

export default {
  components: {
    Counter,
    Goods,
    Fooder,
    Header,
    Counter
  },
  data() {
    return {
      //存储列表数据，默认为空数组
      list: []
    }
  },
  //计算属性是实时检测数据变化，并且调用的一个方法
  computed: {
    //当list中所有的item都为true时every方法才会返回true，在通过return送出去
    fullselect() {
      return this.list.every((item) => item.goods_state)
    },

    //计算全部勾选的价格
    allprice() {
      //使用filter 过滤 状态为勾选的项，然后通过reduce累加
      return this.list
        .filter((item) => item.goods_state)
        .reduce((total, item) => {
          return (total += item.goods_price * item.goods_count)
        }, 0)
    },

    //计算勾选的数量,通过父传子
    chooingcount() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((totalchooing, item) => {
          return (totalchooing += item.goods_count)
        }, 0)
    }
  },
  methods: {
    //定义一个方法来取数据，
    async getdata() {
      //调用axios的get方法，请求数据,调用get放回置是promise 所以用await
      /* 使用axios时会包装一个外壳，而我们只要data里面的数据，获取data'并且重新命名为res */
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      /*   console.log(res); */
      //将请求到的数据存入data中

      //判断拿过来的数据是否可用 status=200时可用

      if (res.status === 200) {
        this.list = res.list
        console.log(this.list)
      }
    },
    //同步页面数据的修改
    //从数组中查找被点击的id和传过来的id相同的
    newstatus(val) {
      this.list.some((item, index) => {
        if (item.id == val.id) {
          item.goods_state = val.status
          //some查找的终止方法
          return true
        }
      })
    },
    goodstatus(fulstatus) {
      /* 使用forEach遍历数组 */
      this.list.forEach((item) => (item.goods_state = fulstatus))
    }
  },

  created() {
    //方法的内容还是放在methods中而这个周期是调用
    this.getdata()

    /* counter组件中加减值传递过来 ，并且把app中的值修改再通过子向父传回counter */
    bus.$on('addcount', (counterval) => {
      this.list.some((item) => {
        if (item.id === counterval.id) {
          item.goods_count = counterval.goodcount

          return true
        }
      })
    })
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
  margin: 0;
  padding: 0;
}
</style>
