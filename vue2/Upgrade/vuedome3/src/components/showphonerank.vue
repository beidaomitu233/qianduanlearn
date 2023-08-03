<template>
  <div>
    <!-- 展示手机排名，同时也需要获取到手机的价格 -->
    <!-- 从store中获取数据 -->
    <div v-for="(item,index) in phonelist" :key="index">
      <h2>{{item.phonename}}</h2>
      <p>{{item.phoneprice}}</p>
    </div>
    <p>全部价格:{{ totalprice }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'showphonerank',
  data() {
    return {
    };
  },

  methods: {
        //从store中获取数据 直接获取数据
        getphonelist() {
            //直接写$store会自动向上查找，最终会在vc身上找到。所以可以直接使用
            // this.phonelist = this.$store.state.phonelist
        }
    
  },

  computed: {
    //使用计算属性来获取数据
    ...mapState({phonelist:'phonelist'}),
        //获取getters中的数据
    ...mapGetters({ totalprice: 'total' })

  },
  created(){    
    //获取数据
    // this.getphonelist()
    
  }
  
};
</script>

<style lang="less" scoped>
  
</style>