<template>
      <div class="todo-list">
        <!-- 首先向子组件传参，然后使用v-for进行渲染 -->
        <ToDoItem v-for="(item,index) in todoitemlist" :key="index" :id="item.id" :item="item.item" :initiator="item.initiator" :completed="item.completed"></ToDoItem>
        
      </div>
</template>

<script>
import ToDoItem from './toDoItem';
import axios from 'axios'
import { BASE_URL } from '../../URL_BASE.CONGIF'
export default {
  name: 'toDoList',
  components: {
    ToDoItem,
  },
  data() {
    return {
      todoitemlist:[],
    };
  },

  methods: {
  },

  computed: {
    
  },

  watch: {
    
  },
  //从数据库中获取todolist
  created() {
    console.log('created');
  axios({
          method: 'get',
          url: BASE_URL + '/getitemlist',
        }).then((res) => {
          console.log(res.data)
          const { data } = res.data
          console.log('======解构赋值======');
          this.todoitemlist = data.reverse()
          console.log(this.todoitemlist);
        }).catch((err) => {
          console.log(err)
     })
  }
}
</script>

<style lang="less" scoped>
  .todo-list {
  margin-top: 20px;
  max-height:500px;
  overflow: hidden;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-item button {
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
}
</style>