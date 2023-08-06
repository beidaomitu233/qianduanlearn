import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

//外部单独声明store的模块
const userinfo={
    //命名是必须值否之vuex无法区分
    namespaced:true,
    actions:{
        //context是一个对象，里面包含了commit，dispatch，state等属性
        //修改学生信息
        changeinfo(context,value){
            console.log(value)
            //提交mutations
            context.commit("CHANGEINFO",value)
        }
    },
    mutations:{
        CHANGEINFO(state,value){
            //对信息进行修改
            state.name=value.name
            state.age=value.age
            state.stuclass=value.stuclass
        }

    },
    state:{
        name:"张三",
        age:18,
        stuclass:"三年级二班"
    },
    getters:{
        //获取学生新的信息
        newinfo(state){return { stuclass: "四年级二班" };}
    }
}

//外部单独声明store的模块
const phoneinfo={
    namespaced:true,
    actions:{},
    mutations:{},
    state:{
     data:[{
        name:"华为",
        price:3000
        
    },{
        name:"小米",
        price:2000

    },{
        name:"苹果",
        price:5000
    }]},
    getters:{}
}




//导出store
export default new vuex.Store({
    //将外部store的模块导入到store中
    modules:{
        userinfo,
        phoneinfo
    }

 })