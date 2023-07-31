<template>
  <form @submit.prevent="additem(item)">
    <div class="add-todo-item">
      <input type="text" placeholder="请输入待办事项" v-model.trim="item">
      <button type="submit">添加</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../../URL_BASE.CONGIF'
export default {
  name: 'addToDoItem',
  data() {
    return {
      item:'',
    };
  },

  methods: {
        //删除todoitem
    additem(item) {
      axios({
        method: 'post',
        url: BASE_URL + '/additem',
        data: {
          item,
          initiator:'admin',
          completed:0
        }
      }).then((res) => {
        console.log(res.data)
        //解构赋值到自己的data
        const { data } = res.data
        //如果affectedRows不等于0，说明删除成功
        if (data.affectedRows = !0) {
          alert('添加成功')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },


  computed: {

  },

  watch: {

  },
};
</script>

<style lang="less" scoped>
.add-todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.add-todo-item input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}

.add-todo-item button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
}
</style>