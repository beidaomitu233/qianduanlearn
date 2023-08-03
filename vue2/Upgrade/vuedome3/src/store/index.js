import Vue from 'vue';

//引入vuex
import Vuex from 'vuex';

//安装插件
Vue.use(Vuex)
//使用store管理vuex中的对象
 export default new Vuex.Store({
   //准备actions一用于响应组件中的动作
   actions: {
     //涨价20%，第一个参数是上下文，第二个参数是数据
     priceRise(context, data) {
       console.log("上下文");
       console.log(context);
       console.log("数据");
       console.log(data);
       //通过上下文调用mutations中的方法
       context.commit("PRICERISE", data);
     },
   },
   //准备mutations-一用于操作数据(state)
   mutations: {
     //涨价20%，第一个参数是state，第二个参数是数据
     //为了和actions区分开，mutations中的方法都是要大些
      PRICERISE(state, data) {
        console.log("state");
        //这里的state下面的是数据集合。
        console.log(state);
        console.log("data");
        console.log(data);
        //遍历数组，找到对应的数据，然后修改
        state.phonelist.forEach((item) => {
          if (item.id == data.id) {
            item.phoneprice += item.phoneprice / 20;
          }
        });
      }
   },
   //准备state一用于存情数据
   state: {
     phonelist: [
       { id: 1, phonename: "iPhone", phoneprice: 6999 },
       { id: 2, phonename: "Samsung Galaxy", phoneprice: 5999 },
       { id: 3, phonename: "Google Pixel", phoneprice: 4999 },
     ],
   },
   getters:{
      //获取手机总价
      total(state){
        //定义一个变量用于存储总价
        let totalprice = 0;
        //遍历数组，获取总价
        state.phonelist.forEach((item)=>{
          totalprice += item.phoneprice;
        });
        //返回总价
        return totalprice;
      }
   }
 });