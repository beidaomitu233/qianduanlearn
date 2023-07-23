import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 存放vuex的store

//为了增加可读性和好维护，使用模块化写法，可以新建一个js文件再导入进来

const zhujianyi = {
  namespaced: true,
  actions: {
    //接收从组件中传递过来的值，
    // 第一个参数是一个迷你版的store不全
    shuchu(ministore, value) {
      //
      console.log(ministore)
      //当有一些额外的函数操作或者ajax请求时才需要先进action
      console.log('成功输出值' + value * 2)
      //调用之后写大写符合规范
      ministore.commit('SHUCHU', value)
      ministore.dispatch('del', value)
    },
    //可以实现无限套娃
    del(mistore, value) {
      //提高函数复用，让结构更易懂，让一个函数不承载过的代码拆分出来执行
      console.log('del拆分了代码' + value)
      console.log(mistore)
      if (value === 10) {
        console.log('惊喜')
      }
    }
  },
  mutations: {
    //参数是整个state对象，value是传递过来的值
    SHUCHU(state, value) {
      console.log('muta被调用')
      state.all += value
    },
    //当只需要直接执行输出的调用comit进入即可
    COM() {
      console.log('直接调用com')
    }
  },
  state: { all: 10 },
  getters: {
    jisuan(state) {
      return state.all * 10
    }
  }
}

const zuijianer = {
  namesspace: true,
  actions: {},
  mutations: {},
  state: {},
  getters: {}
}

//响应组件中的动作 ，逻辑分层，要处理的就在actio中如果在组件内先处理之后再传递过来，导致复用性低，且
//业务逻辑复杂的时候根本无法实现，所以要把处理函数分层理清
const actions = {}
//操作数据（就是操作state）
const mutations = {}
//存储数据
const state = {}

// 单纯对结果进行一些运算或者操作，对state中的数据加工之后再导出
//类似于计算属性 ，提高复用
const getters = {}

//这个括号的内容是传入配置对象
//创建并向外暴露store
export default new Vuex.Store({
  modules: {
    //向外暴露名，模块名
    zhujianyi,
    zuijianer
  },
  actions: actions,
  mutations,
  state,
  getters

  /* 模块化写法 */
})
