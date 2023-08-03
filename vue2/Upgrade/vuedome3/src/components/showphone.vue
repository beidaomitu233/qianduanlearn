<template>
  <div>
    <!-- 详细展示一台手机的各项信息，从vuex中获取价格和名字数据 -->
    <p>{{ item.phonename }}</p>
 <p>{{item.phoneprice}}</p>

 <button @click="priceRise">给{{ item.phonename }}涨价20%</button>

</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'showphone',
    data() {
        return {     item:null
        };
    },

    methods: {
      //  从store中获取数据 直接获取数据
        getphonelist() {
            //直接写$store会自动向上查找，最终会在vc身上找到。所以可以直接使用
            this.item= this.phonelist[0]
        },
        //通过store中的方法修改数据
        priceRise(){
            //将涨价请求发送给store，第一个参数是方法名，第二个参数是要修改的数据
            this.$store.dispatch('priceRise',this.item)
        }
    },


    computed: {
        //获取数据更简单的方法。
    ...mapState({phonelist:'phonelist'}),  
    //获取getters中的数据
    ...mapGetters({ totalprice: 'total'})

    },
    created() {
         //获取数据
         this.getphonelist()

    }

};
</script>

<style lang="less" scoped>
  
</style>