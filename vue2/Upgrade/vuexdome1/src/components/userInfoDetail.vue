<template>
  <div>

    <h1>展示收集信息</h1>
    <!-- 通过mapState的映射数据可以直接用属性名 -->
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
    <p>班级：{{stuclass}}</p>

    使用的信息：{{data}}
    <p></p>
    新的班级是 {{ newinfo }}

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  name: 'userInfoDetail',

  data () {
    return {
    };
  },
  computed: {
    // 使用 mapState 将 userinfo 模块的 state 映射到组件的计算属性
    ...mapState('userinfo', ['name', 'age', 'stuclass']),

    // 使用 mapState 将 phoneinfo 模块的 state 映射到组件的计算属性
    ...mapState('phoneinfo', ['data']),

    //通过geeter获取新的信息
    ...mapGetters('userinfo', ['newinfo'])
  },

  methods: {
    // 使用 mapActions 调用 phoneinfo 模块的 changeinfo action
    ...mapActions('userinfo', ['changeinfo']),
  },

  mounted () {
    // 示例：通过 mapActions 调用 changeinfo action（异步操作）
    this.changeinfo({ name: 'New Name', age: 20, stuclass: 'New Class' });
    const info = this.newinfo;
    console.log(info);
  }
};
</script>

<style lang="css" scoped>
</style>